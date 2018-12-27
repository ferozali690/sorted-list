const arrOfObj = [
  { title: "A", checked: false },
  { title: "B", checked: true },
  { title: "C", checked: false },
  { title: "D", checked: true },
  { title: "E", checked: false },
  { title: "F", checked: true }
];

/**
* returns array of sorted objects
*
* @param {*} arrOfObj
* @returns
*/
function getSortedList(arrOfObj) {
  let sortedList = [];
  const sortedTrue = [];
  const sortedFalse = [];

  arrOfObj.forEach((element) => {
    if (element.checked === true) sortedTrue.push(element);
    else sortedFalse.push(element);
  });

  sortedList = sortedTrue.concat(sortedFalse);
  return sortedList;
}

const sortedList = getSortedList(arrOfObj);

console.log('sortedList : ', sortedList);