/** @static */
var ExternalAPI =
{
	/**
	 * Флаг доступности интерфейса монетизации. При false весь интерфейс монетизации будет отключен.
	 * 
	 * @type Boolean
	 */
	buyEnabled: false,
	
	/**
	 * Инициализация внешнего API. Вызывается при старте игры.
	 */
	init: function()
	{
	},
	
	getUserDataCallback: null,
	
	/**
	 * Получение данных о прогрессе пользователя
	 * 
	 * @param callback Функция, которая будет вызвана по окочанию процесса загрузки. Должна вызываться с параметрами: количество очков и количество Skill Points
	 */
	getUserData: function(callback)
	{
		//Внутренний способ хранения в localStorage
		callback(Utils.getCookie(COOKIE_NAME + "_totalScores"), Utils.getCookie(COOKIE_NAME + "_skillPoints"));
		
		//AFW интеграция?
		//В документации указано, что в качестве параметра передает имя функции, а не ссылка, так что, увы, вот такой изврат.
		//Хотя по хорошему все это нужно было бы обернуть в анонимную функцию, если бы была передача по ссылке...
		
		/*
		ExternalAPI.getUserDataCallback = callback;
		AFW.loadData("ExternalAPI.returnUserData");
		*/
	},
	
	/**
	 * Враппер для парсинга ответа от AFW
	 * 
	 * @param result Результат
	 * @param data Данные
	 */
	returnUserData: function(result, data)
	{
		//AFW интеграция?
		//Непонятно какой формат ответа все же. В одном месте сказано что или XML или JSON. Во втором что только XML...
		//Если поддерживается JSON, то так. Если нет, то нужно добавить парсинг ответа.
		if(result == "OK")
		{
			ExternalAPI.getUserDataCallback(data.scores, data.skillPoints);
		}
	},
	
	/**
	 * Сохранение прогресса пользователя
	 * 
	 * @param scores Количество очков
	 * @param skillPoints Количество Skill Points
	 */
	saveUserData: function(scores, skillPoints)
	{
		//Внутренний способ хранения в localStorage
		Utils.setCookie(COOKIE_NAME + "_totalScores", scores);
		Utils.setCookie(COOKIE_NAME + "_skillPoints", skillPoints);
		
		//AFW интеграция?
		//Опять таки - поддерживается JSON? Если да, то так. Если нет, то заменить на генерацию XML.
		
		/*
		AFW.saveData({scores: scores, skillPoints: skillPoints});
		*/
	},
	
	/**
	 * Сохранение прогресса по пройденным уровням
	 * 
	 * @param data Прогресс в виде сериализованной строки
	 */
	saveProgress: function(data)
	{
		//Внутренний способ хранения в localStorage
		Utils.setCookie(COOKIE_NAME + "_progress", data);
	},
	
	/**
	 * Загрузка прогресса по пройденным уровням
	 * 
	 */
	loadProgress: function()
	{
		//Внутренний способ хранения в localStorage
		return Utils.getCookie(COOKIE_NAME + "_progress");
	},
	
	/**
	 * Сохранение текущего состояния полученных/изученных апгрейдов (юниты, здания, скилы и т.д.)
	 * 
	 * @param params объект ключ-значение с данными по апгрейдам
	 */
	saveUpgrades: function(params)
	{
		//Внутренний способ хранения в localStorage
		for(key in params)
		{
			Utils.setCookie(COOKIE_NAME + "_" + key, params[key]);
		}
	},
	
	/**
	 * Загрузка текущего состяния апгрейдов. Должен возвращать объект ключ-значение с состоянием апгрейдов.
	 * 
	 */
	loadUpgrades: function()
	{
		//Внутренний способ хранения в localStorage
		
		var data = {};
		
		data.magicHeal = Utils.getCookie(COOKIE_NAME + "_magicHeal");
		data.magicLight = Utils.getCookie(COOKIE_NAME + "_magicLight");
		data.magicQueen = Utils.getCookie(COOKIE_NAME + "_magicQueen");
		
		data.buildings = Utils.getCookie(COOKIE_NAME + "_buildings");
		
		data.units = Utils.getCookie(COOKIE_NAME + "_units");
		
		//подгрузка состояния скилов для каждого типа юнитов
		if(data.units)
		{
			var units = data.units.split(",");
			for(var i=0; i<units.length; i++)
			{
				data["skills_" + units[i]] = Utils.getCookie(COOKIE_NAME + "_skills_" + units[i]);
			}
		}
		
		return data;
	},
	
	buyActionCallback: null,
	/**
	 * Произведение покупки
	 * 
	 * @param type Код покупки, зарегистрированный в AFW и описанный в ini.js, секция things, параметр itemID
	 * @param callback Функция, которая будет вызвана при окончании процесса покупки
	 */
	buyAction: function(type, callback)
	{
		//Заглушка
		alert('Buy action "' + type + '" called.');
		callback(true);
		
		//AFW интеграция?
		//По окончанию процедуры покупки нужно вызвать callback с параметром: true - покупка успешно произведена. false - отказ или ошибка.
		
		/*
		ExternalAPI.buyActionCallback = callback;
		AFW.showUpSell(type, "ExternalAPI.returnBuyActionResult", false);
		*/
	},
	
	returnBuyActionResult: function(reason)
	{
		ExternalAPI.buyActionCallback(reason == "continue");
	},
	
	//логирование действий пользователя
	log:
	{
		levelStarted: function(id)
		{
			console.log("Level " + id + " started");
		},
		
		levelCompleted: function(id)
		{
			console.log("Level " + id + " completed");
		},
		
		levelFailed: function(id)
		{
			console.log("Level " + id + " failed");
		},
		
		levelRestarted: function(id)
		{
			console.log("Level " + id + " restarted");
		},
		
		skillTrained: function(unitId, skillId)
		{
			console.log("Skill " + unitId + ", " + skillId + " trained");
		}
	}
}