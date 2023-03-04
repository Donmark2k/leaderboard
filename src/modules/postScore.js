import getScore from './getScore.js';
import url from './api.js';

const postScore = async (name, score) => {
  await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then(() => getScore());
};

export default postScore;