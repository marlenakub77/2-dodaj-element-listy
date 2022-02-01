

document.querySelector(`button`).addEventListener(`click`, function () {
  let counter = document.querySelectorAll(`.item`).length +1;
  console.log(counter);

let li = document.createElement(`li`);
li.setAttribute (`class`, `item`);
li.innerText = `Item ` + counter;
 
document.getElementById(`items`).appendChild(li);

})