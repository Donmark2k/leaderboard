import './style.css';
import getScore from './modules/getScore.js';
import postScore from './modules/postScore.js';

window.onload = getScore();

const inputForm = document.getElementById('score-form');
const refreshButton = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');

refreshButton.addEventListener('click', () => {
  getScore();
});

inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = userName.value;
  const score = userScore.value;
  postScore(name, score);
  inputForm.reset();
});