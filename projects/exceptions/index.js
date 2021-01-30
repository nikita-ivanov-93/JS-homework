/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* ДЗ 3 - работа с исключениями и отладчиком */


/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую функцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
//  */
function isAllTrue(array, fn) {
  if (array.length === undefined || array.length === 0 || typeof(array) === 'string') {
    throw new Error('empty array');
  }
  
  if (array.length === undefined || array.length === 0 || typeof(array) === 'string') {
    throw new Error('empty array');
  }
  
  let trueNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      trueNum++;
    }
  }
  return trueNum === array.length;
}
/*
Задание 2:

2.1: Функция принимает массив и фильтрующую функцию и должна вернуть true или false
Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
  if (array.length === undefined || array.length === 0 || typeof(array) === 'string') {
    throw new Error('empty array')
  } else if (typeof(fn) != 'function') {
    throw new Error('fn is not a function')
  } else {
    let trueNum = 0;
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i]) === true) {
        trueNum++;
      }
    }
    return trueNum >= 1;
  } 
}

/*
 Задание 3:

 3.1: Функция принимает заранее неизвестное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn, ...args) {
  if (typeof(fn) != 'function') {
    throw new Error('fn is not a function')
  } else {
    const extNum = [];
    for (const arg of args) {
      try {
        fn(arg);
      } catch {
        extNum.push(arg);
      }
    }
    return extNum
  } 
}
/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
   */
  function calculator(number = 0) {
    if (isFinite(number)) {
      return {
        sum,
        dif,
        div,
        mul
      };
    } else {
      throw new Error('number is not a number')
    }
    function sum() {
      for (let i = 0; i < arguments.length; i++) {
        number += arguments[i];
      }
    return number;
    }
    function dif() {
      for (let i = 0; i < arguments.length; i++) {
        number -= arguments[i];
      }
      return number;
    }
    function div() {
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === 0) {
          throw new Error('division by 0');
        } else {
          number /= arguments[i];
        }
      }
      return number;
    }
    function mul() {
      for (let i = 0; i < arguments.length; i++) {
        number *= arguments[i];
      }
      return number;
    }
}

// const result = calculator(';').div(3,1,5,5);
// console.log(result); 
/* При решении задач, постарайтесь использовать отладчик */

export {isAllTrue, isSomeTrue, returnBadArguments, calculator};
