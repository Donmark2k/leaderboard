import displayScores from './displayScores.js';
import url from './api.js';

const getScore = async () => {
  await fetch(
    url,
  )
    .then((response) => response.json())
    .then((json) => displayScores(json));
};

export default getScore;