/* ДЗ 2 - работа с массивами и объектами */
/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
 */

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

forEach([11, 0, 13], (num) => {
  console.log(num);
});
// array.forEach((num) => {
//   console.log(num);
// });
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i, array));
  }
  return result;
}
const result = map([1, 2, 3], (el) => el ** 2);
// const array = [1,2,3];
// console.log(array.map((num) => num ** 2));
console.log(result);
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  let i;
  if (initial === undefined) {
    initial = array[0];
    i = 1;
  } else {
    i = 0;
  }
  let all = initial;
  for (; i < array.length; i++) {
    all = fn(all, array[i], i, array);
  }
  return all;
}
const array = [1, 2, 3];
console.log(reduce(array, (all, current) => all + current, 4));
// console.log(array.reduce(array, (all, current) => all + current), 10));
console.log(array);
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const newArray = [];
  for (const key in obj) {
    newArray.push(key.toUpperCase());
  }
  return newArray;
}
console.log(
  upperProps({ name: 'Сергей', lastName: 'Петров', old: 40, major: 'ingineer' })
);
/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
 */
function createProxy(obj) {
  const proxy = new Proxy(obj, {
    set(obj, property, val) {
      if (typeof val == 'number') {
        obj[property] = val ** 2;
        return true;
      } else {
        return false;
      }
    },
  });
  return proxy;
}
const obj = createProxy({});
obj.foo = 2;
console.log(obj);

export { forEach, map, reduce, upperProps, createProxy };
