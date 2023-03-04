import './style.css';
import getScore from './modules/getScore.js';
import postScore from './modules/postScore.js';

window.onload = getScore();

const inputForm = document.getElementById('score-form');
const refreshButton = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const error = document.getElementById('error-message');

refreshButton.addEventListener('click', () => {
  getScore();
});


inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const  nameRegex = /^[A-Za-z ]*$/;
  const scoreRegex = /^[0-9]*$/;
  
  const name = userName.value;
  const score = userScore.value;
  let validateScore =scoreRegex.test(score);
  let validateName = nameRegex.test(name);

  setTimeout(() => {
    error.style.display = "none";
  }, 7000);

  if (name !== '' && score !== '') {
    if (validateName && validateScore) {
      postData(name, score);
      inputForm.reset();
    } else {
      error.innerHTML = 'Please your name should contain only alphabet and your score only numbers'; 
       }
  } else {
    error.innerHTML = 'Please enter your name and score'; 
    }
});