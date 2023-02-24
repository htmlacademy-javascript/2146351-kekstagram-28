// Функция для проверки длины строки.
const checkLength = (string, number) => string.length <= number;
checkLength ('проверяемая строка', 18);

// Cтрока короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом.
function palindrome(String) {
  String = String.toLowerCase();
  return String === String.split('').reverse().join('');
}

palindrome('топот');// true
palindrome('ДовОд');// true
palindrome('Кекс');// false


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');// 2023
extractNumber('ECMAScript 2022');// 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат');// NaN


// Функция, которая принимает три параметра

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

// Добавочный символ использован один раз
myPadStart('1', 2, '0');// '01'

// Добавочный символ использован три раза
myPadStart('1', 4, '0');// '0001'

// Добавочные символы обрезаны с конца
myPadStart('q', 4, 'werty');// 'werq'

// Добавочные символы использованы полтора раза
myPadStart('q', 4, 'we');// 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
myPadStart('qwerty', 4, '0'); // 'qwerty'

