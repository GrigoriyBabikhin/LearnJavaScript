//Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.
// Выведите на экран все его элементы.
/* let obj = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Субота",
  7: "Воскресение",
};
console.log(obj[1], obj[2], obj[3], obj[4], obj[5], obj[6], obj[7]); //Понедельник Вторник Среда Четверг Пятница Субота Воскресение */

//Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями.
//Выведите на экран фамилию, имя и отчество через пробел.
/* let user = {
  surname: "Кузнецов",
  name: "Алексей",
  patronymic: "Сергеевич",
};
console.log(user["surname"], user["name"], user["patronymic"]);//Кузнецов Алексей Сергеевич */

//Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню.
//Выведите созданную дату на экран в формате год-месяц-день.
/* let date = {
  year: "2023",
  month: "Март",
  day: "02",
};
console.log(date.day, date.month, date.year);//02 Март 2023 */

//Для каких ключей данного объекта кавычки обязательны, а для каких нет?
/* let obj = {
  "1a": 1,
  b2: 2,
  "с-с": 3,
  "d 4": 4,
  e5: 5,
};
console.log(obj);//{ '1a': 1, b2: 2, 'с-с': 3, 'd 4': 4, e5: 5 } */

//Исправьте ошибки, допущенные в следующем коде:
/* let obj = {
  "1a": 1,
  b2: 2,
  "c-c": 3,
  "d 4": 4,
  e5: 5,
};
console.log(obj["1a"]);//1
console.log(obj.b2);//2
console.log(obj["c-c"]);//3
console.log(obj["d 4"]);//4
console.log(obj.e5);//5 */

//Возведите в квадрат каждый элемент этого объекта.
/* let obj = {x:2, y:3, z:4};
obj.x = obj.x**2;
obj.y = obj.y**2;
obj.z = obj.z**2;
console.log(obj);//{ x: 4, y: 9, z: 16 } */

//Создайте пустой объект, а затем заполните его значениями.
/* let obj = {};
obj.a = 1;
obj.b = 2;
obj.c = 3;
obj.d = 4;
console.log(obj);//{ a: 1, b: 2, c: 3, d: 4 } */

/* let obj = { 3: "c", 1: "a", 2: "b" };
console.log(obj);//{ 1: 'a', 2: 'b', 3: 'c' } */

//Получите массив ключей следующего объекта:
/* let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj));//[ 'x', 'y', 'z' ] */

//Найдите количество элементов в следующем объекте:
/* let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);//3 */

// /Дана переменная key, в которой хранится один из ключей нашего объекта.
//Выведите с помощью этой переменной соответствующий элемент объекта.
/* let obj = { x: 1, y: 2, z: 3 };
let key = "y";
console.log(obj[key]);// */

//Исправьте ошибку, допущенную в следующем коде:
/* let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);//1 */

/* let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);//1 */

//Ошибка обращения к свойству объекта в JavaScript
/* let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);//1 */

//В следующем коде ключ должен был взяться из переменной.
//Исправьте допущенную ошибку:
/* let key = 'x';

let obj = {
	[key]: 1,
	y: 2,
	z: 3
};
console.log(obj);//{ x: 1, y: 2, z: 3 } */

//Сделайте так, чтобы ключи объекта
//брались из этих переменных.
/* let obj = {
  x: 1,
  y: 2,
  z: 3,
};
let key1 = "x";
let key2 = "y";
let key3 = "z";
console.log(obj[key1], obj[key2], obj[key3]);//123 */

//Скажите, что выведется в консоль в результате выполнения следующего кода:

/* let obj = {x: 1, y: 2, z: 3};

console.log('x' in obj);//true
console.log('w' in obj);//false
 */

//Скажите, что выведется в консоль в результате выполнения следующего кода:
/* let obj = { x: 1, y: 2, z: 3 };
delete obj.x;
console.log("x" in obj); //false
console.log(Object.keys(obj).length); //2 */

//Типизация объектов в JavaScript
/* console.log( typeof {x: 1, y: 2, z: 3} );//object */
/* console.log( typeof {} );//object */
/* console.log( typeof obj );//undefined */
/* let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );//number */

//Массивы как объекты в JavaScript
/* console.log( typeof {x: 1, y: 2, z: 3} );//object */
/* console.log( typeof [1, 2, 3] );//object */

/* let arr = [1, 2, 3];
console.log( typeof arr );//object */

/* let arr = [1, 2, 3];
console.log( typeof arr[0] );//number */

/* let arr = ['1', '2', '3'];
console.log( typeof arr[0] );//string */

//Отличаем массивы от объектов в JavaScript
/* console.log(Array.isArray([1,2,3]));//true */
/* console.log( Array.isArray({x: 1, y: 2, z: 3}) );//false */

//Объекты и примитивы в JavaScript.
//string, number, boolean, null, undefined, symbol, bigint.всё что не объект это примитив.
/* let test = {x: 1, y: 2, z: 3};
console.log(typeof test);//{ x: 1, y: 2, z: 3 } object */
/* let test = {x: 1, y: 2, z: 3};
console.log(typeof test.x);//1 number */
/* let test = [1, 2, 3];
console.log(typeof test);//[ 1, 2, 3 ] object */
/* let test = [1, 2, 3];
console.log(typeof test[1]);//2 number */
/* let test1 = [1, 2, 3];
let test2 = 1;
console.log(typeof test1);//[ 1, 2, 3 ] object */
/* let test1 = [1, 2, 3];
let test2 = 1;
console.log(typeof test1[test2]);//2 number */

//Передача объектов по ссылке в JavaScript
