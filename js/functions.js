/* eslint-disable no-console */

// Функция проверки на соответствие длины строки заданным условиям
const isStringLengthValid = function (stringValue, maxLength) {
  return stringValue.toString().length <= maxLength;
};

// Функция проверки строки на палиндром
const isPalindrome = function (stringValue) {
  const stringWithoutSpaces = stringValue.replaceAll(' ', '').toUpperCase();
  const reversedStringArray = [];
  const stringLength = stringWithoutSpaces.length;

  for (let i = 0; i < stringLength; i++) {
    reversedStringArray[i] = stringWithoutSpaces[stringLength - i - 1];
  }

  return (
    reversedStringArray.join().replaceAll(',', '') === stringWithoutSpaces
  );
};

// Функция извлечения числа из строки
const extractNumber = function (stringValue) {
  const trueString = String(stringValue);
  let extractedValue = '';

  for (let i = 0; i < trueString.length; i++) {
    if (!Number.isNaN(parseInt(trueString[i], 10))) {
      extractedValue += trueString[i];
    }
  }

  return parseInt(extractedValue, 10);
};

// Примеры использования функций
console.log(isStringLengthValid('Привет разработчикам!', 10)); // false
console.log(isStringLengthValid('Привет разработчикам!', 100)); // true
console.log(isStringLengthValid('Привет разработчикам!', 21)); // true

console.log(isPalindrome('Привет разработчикам!')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

console.log(extractNumber('2023 год')); // 2023
console.log(extractNumber('ECMAScript 2022')); // 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // 105
console.log(extractNumber('агент 007')); // 7
console.log(extractNumber('а я томат')); // NaN
console.log(extractNumber(2023)); // 2023
console.log(extractNumber(-1)); // 1
console.log(extractNumber(1.5)); // 15
