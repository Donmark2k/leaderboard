const scoreSheet = document.querySelector('.scores-list');

const eachScore = (item, index) => {
  scoreSheet.innerHTML += `
    <li>
      <span>${index + 1} - ${item.user}</span>
      <span>${item.score} points</span>
    </li>
  
  `;
};

const displayScores = (object) => {
  scoreSheet.innerHTML = '';
  const scores = object.result;
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(eachScore);
};

export default displayScores;