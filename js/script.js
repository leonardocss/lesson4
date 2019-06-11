let options = {
	name: "Vasya",
	width: 1024,
	height: 1280
}
//создаем свойство объекту
options.bool = false;
options.colors = {
	background: 'red',
	border: 'black'
}

delete options.bool;

console.log(options);

for (let key in options) {
	console.log('Свойство ' + key + " имеет значение: " + options[key])
}

//узнать кол-во свойств в объекте
console.log(Object.keys(options).length)


//операции с массивом 
let arr = [1,2,3,4,5];
//удаляет последний эелемент (возвращает удаленый эемент)
arr.pop();
console.log(arr.pop()) // получаем удаленный элемент))
arr.push(6) // добавляет элемент в конец массива - "шестерку"
console.log(arr + " добавили элемент 6")

arr.shift(); // удаляет элемент в начале массива
console.log(arr + " удалил 1й элемент в начале")
arr.unshift(0)
console.log(arr + " добавили элемент вначале 0")

let first = [1,'second',3,4,5]
first[99] = 99;
first.forEach(function(item,i,arr){
	console.log(i + ": " + item + "(array: " + arr +')')
})