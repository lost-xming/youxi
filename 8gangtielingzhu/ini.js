var ini = {};

ini.version = "0.5";
ini.support_email = "customer.support@alawar.com";

//Чит-режим. При true доступны все уровни, здания, юниты и скилы. В релизе или ставить false или эту строчку вообще можно удалить :)
ini.cheatMode = false;

ini.defaultLang = "cn";

//Описание цен
var buyCosts =
{
	//Дополнительные жизни юнитов
	life:
	[
		{bonus: 10, cost: 10000},
		{bonus: 30, cost: 15000},
		{bonus: 40, cost: 20000}
	],
	
	//Дополнительная атака юнитов
	attack:
	[
		{bonus: 10, cost: 10000},
		{bonus: 30, cost: 15000},
		{bonus: 40, cost: 20000}
	],
	
	//Дополнителые деньги
	money:
	[
		{bonus: 50, cost: 10000},
		{bonus: 100, cost: 15000},
		{bonus: 150, cost: 20000}
	],
	
	//Дополнительная еда
	food:
	[
		{bonus: 20, cost: 10000},
		{bonus: 30, cost: 15000},
		{bonus: 40, cost: 20000}
	],
	
	//Покупаемые вещи
	things:
	[
		{
			//Уникальный ID для серверной части. В AFW это параметр item метода showUpSell
			itemID: "scores1",
			//Внутренний тип. Поддерживается scores и skill_points
			type: "scores",
			//Количество
			ammount: 100000,
			//Стоимость в валюте продавца
			cost: 1
		},
		
		{
			itemID: "skill_points1",
			type: "skill_points",
			ammount: 5,
			cost: 1
		},
		
		{
			itemID: "skill_points2",
			type: "skill_points",
			ammount: 15,
			cost: 2
		}
	]
}