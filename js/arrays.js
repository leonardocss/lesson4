let array = [[1,2,3,4,5],[35,6,8,4,2,2,556,3],[3,5,6,33,3333,2]];
let summ = 0;
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array[i].length; j++) {
		summ += array[i][j];
	}
}
console.log(summ);