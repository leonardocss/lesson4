let money,
				name,
				price,
				time;
				function start() {
						money = prompt('Ваш бюджет?', '');

						while (isNaN(money) || money == '' || money == null) {
							money = prompt('Ваш бюджет?', '');
						} 

						name = prompt('Название вашего интернет магазина?', '').toUpperCase();
						time = 21;
}

// start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	choseGoods: function choseGoods() {
		for (var i = 0; i < 5; i++) {
			let a = prompt('Какой тип товаров будем продавать?', "");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('Все верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0 ) {
			console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!')
		} else {
			console.log('В сутках 24 часа!')
		}
	},
	dayBudget: function dayBudget() {
		alert('ежедневный бюджет ' + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (var i = 1; i < 4; i++) {
		let name = prompt('имя сотрудника', '');
		mainList.employers[i] = name;
		}
	},
	checkoutString: function checkoutString(check) {
		if (check != null && check != '' && check != Number(check)) {
			return true;
		} else {
			return false;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите через запятую ваши товары:', '');
		if (mainList.checkoutString(items)) {
			mainList.shopItems = items.split(',');
			let twoQuest = prompt('Подождите, еще', "");
			while (mainList.checkoutString(twoQuest) == false) {
				twoQuest = prompt('Подождите, еще', "");
			}
			mainList.shopItems.push(twoQuest);
			mainList.shopItems.sort();
		} else {
			mainList.chooseShopItems();
		}
	},
	enterItems: function enterItems(arr) {
		arr.forEach( function(item, i, arr) {
			i = 1;
			console.log("У нас вы можете купить: " + item);
		});
	},
	allInClusive: function allInClusive(obj) {
		for (let key in obj) {
			console.log('Наш магазин включает в себя:');
			console.log(key + ' : ' +obj[key]);
		}
	}
}