const generateRandomNum = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const randomizeElements = (elements) => {
  elements.forEach((elem) => {
    //rotate the elements at a random deg
    elem.style.transform = `rotate(${generateRandomNum(-80, 80)}deg)`;

    //place elements to a random position
    //sets offset properties to random px values between the qiven range
    elem.style.top = `${generateRandomNum(100, 400)}px`;
    elem.style.left = `${generateRandomNum(100, 400)}px`;
  });
};

//DOMContentLoaded even is fired whet the HTML is completely
//loaded and parsed and the scripts are loaded
// css an images not necessarily loaded
// if css is in the top, it will be loaded than the dom element,
// than the scripts as it's at the bottom of the body
// this way you can be sure that the elements are at their places when the scripts run
document.addEventListener('DOMContentLoaded', () => {
  //get all the elements that are .draggable
  const elements = document.querySelectorAll('.draggable');

  randomizeElements(elements);

  //this will be the element that we will drag
  let draggingElem;

  //the position of the mouse
  let x = 0;
  let y = 0;

  console.log(elements);

  //handle mouse down event
  const mouseDownHandler = (e) => {
    // set dragging element to the target of the event
    draggingElem = e.target;

    // the chosen element will be rotated back to horizontal
    draggingElem.style.transform = 'rotate(0deg)';

    //get the current mouse position
    //the horizontal coordinate of the viewport
    x = e.clientX;
    //the vertical coordinate of the viewport
    y = e.clientY;

    //attach theese listeners to the document,
    //the event is fired when the cursor's hotspot is inside of the element
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  //handle the movement of the mouse and the element
  const mouseMoveHandler = (e) => {
    //calculates the difference between the previous coordinates
    // and the current coordinates
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    //set the dragged elements top an left offset properties
    //to the current top and left + the difference we calculated earlier

    draggingElem.style.top = `${draggingElem.offsetTop + dy}px`;
    draggingElem.style.left = `${draggingElem.offsetLeft + dx}px`;

    //reassign the positon of the mouse
    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = (e) => {
    // set the dragged element to null
    draggingElem = null;

    // remove handlers
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  //add evenet lsiteners to all the elements that have the draggable class
  //  nodelist so it has foreach function
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
