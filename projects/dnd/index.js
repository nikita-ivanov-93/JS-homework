/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

export function createDiv() {
  const createdDiv = document.createElement('div');
  createdDiv.classList.add('draggable-div');
  const randNumIn16 = (num) => {
    num = Math.floor(Math.random() * 256).toString(16);
    return num;
  };
  function randomColor() {
    const r = randNumIn16(),
      g = randNumIn16(),
      b = randNumIn16();
    return `#${r}${g}${b}`;
  }
  homeworkContainer.style.height = '100vh';
  createdDiv.style.backgroundColor = randomColor();
  createdDiv.style.width = `${Math.random() * 50}%`;
  createdDiv.style.height = createdDiv.style.width;
  createdDiv.style.top = `${Math.random() * 50}%`;
  createdDiv.style.left = `${Math.random() * 50}%`;
  return createdDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');
console.log(addDivButton);

addDivButton.addEventListener('click', function () {
  console.log('click');
  const div = createDiv();
  homeworkContainer.appendChild(div);
});

function move(div, pageX, pageY) {
  div.style.left = pageX - div.offsetWidth / 2 + 'px';
  div.style.top = pageY - div.offsetHeight / 2 + 'px';
}
function onMouseMove(event) {
  console.log('mousemove');
  move(event.target, event.pageX, event.pageY);
}
document.addEventListener('mousedown', function (event) {
  if (event.target.classList.contains('draggable-div')) {
    console.log('mousedown');
    move(event.target, event.pageX, event.pageY);
    document.addEventListener('mousemove', onMouseMove);
  }
});
document.addEventListener('mouseup', function () {
  console.log('mouseup');
  document.removeEventListener('mousemove', onMouseMove);
  event.target.onmouseup = null;
});
