'use strict';

{
  const userForm = document.querySelector('.form');
  const addBtn = document.querySelector('.btn1');
  // const removeBtn = document.querySelector('.btn2');
  
  addBtn.addEventListener('click', e => {
    e.preventDefault();
  
  let userTable = document.querySelector('table');
  let userTbody = userTable.tBodies;
  let userTbodys = userTbody[0].rows; 
  console.log(userTbodys.innerText);
  });
}
