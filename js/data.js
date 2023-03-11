import {getRandomArrayElement} from './util.js';

const NUMBER = [
  '1','2','3','4','5','6','7','8','9','10','11','12','13','14',
  '15','16','17','18','19','20','21','22','23','24','25',
];

const LINK = [
  'photos/1.jpg','photos/2.jpg','photos/3.jpg','photos/4.jpg',
  'photos/5.jpg','photos/6.jpg','photos/7.jpg','photos/8.jpg',
  'photos/9.jpg','photos/10.jpg','photos/11.jpg','photos/12.jpg',
  'photos/13.jpg','photos/14.jpg','photos/15.jpg','photos/16.jpg',
  'photos/17.jpg','photos/18.jpg','photos/19.jpg','photos/20.jpg',
  'photos/21.jpg','photos/22.jpg','photos/23.jpg','photos/24.jpg',
  'photos/25.jpg',
];

const COMMENTARY = [
  'Пляж','Пляж там','Залив','Фотограф','Еда','Автомобиль','Перекус','Компот',
  'Кукурузник','Обувница','Дорога к пляжу','Ауди','Овощной перекус','СушеКекс',
  'Топатухи','Выше неба','Хор','Ретро автомобиль','Ночные тапки','Гостиница',
  'ПП обед','Закат','Краб','Концерт','Экскурсия',
];

const LIKES = [
  '15','20','32','35','47','50','55','66','73','82','90','98','112','124',
  '135','144','156','161','170','178','181','184','191','199','200',
];

const IDENTIFIER = [
  '1','3','6','8','10','12','13','17','20','35','69','73','88','99','101',
  '113','115','130','145','166','170','179','190','199','202',
];

const IMAGES = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Анатолий','Виталий','Пиопий','Семен','Екатерина','Нина','Светлана','Оксана',
  'Антонина','Татьяна','Владимир','Олег','Александр','Григорий','Эпалит',
];

const SIMILAR_DESCRIPTIONS_COUNT = 25;


const createDescriptions = () => ({
  id: getRandomArrayElement(NUMBER),
  url: getRandomArrayElement(LINK),
  description: getRandomArrayElement(COMMENTARY),
  likes: getRandomArrayElement(LIKES),
  comment: {
    id: getRandomArrayElement(IDENTIFIER),
    avatar: getRandomArrayElement(IMAGES),
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  }
});

const similarDescriptions = () => Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createDescriptions);


export {similarDescriptions};
