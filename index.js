const generateRandomNum = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const randomizeElements = (elements) => {
  elements.forEach((elem) => {
    elem.style.transform = `rotate(${generateRandomNum(-80, 80)}deg)`;

    elem.style.top = `${generateRandomNum(100, 400)}px`;
    elem.style.left = `${generateRandomNum(100, 400)}px`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.draggable');

  randomizeElements(elements);

  let draggingElem;

  let x = 0;
  let y = 0;

  console.log(elements);

  const mouseDownHandler = (e) => {
    draggingElem = e.target;

    draggingElem.style.transform = 'rotate(0deg)';
    x = e.clientX;
    y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    draggingElem.style.top = `${draggingElem.offsetTop + dy}px`;
    draggingElem.style.left = `${draggingElem.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = (e) => {
    draggingElem = null;

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  elements.forEach((elem) =>
    elem.addEventListener('mousedown', mouseDownHandler)
  );
});

// const CorrectPosition = {
//   img1: {
//     top: 325,
//     left: 270,
//   },
//   img2: {
//     top: 325,
//     left: 480,
//   },
//   img3: {
//     top: 325,
//     left: 680,
//   },
//   img4: {
//     top: 554,
//     left: 270,
//   },
//   img5: {
//     top: 554,
//     left: 480,
//   },
//   img6: {
//     top: 554,
//     left: 680,
//   },
// };
