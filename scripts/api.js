const BASE_URL = 'https://thinkful-list-api.herokuapp.com/chris/bookmarks'

const getBookmarks = function () {
  fetch(`${BASE_URL}`)
    .then(promise => promise.json())
    .then(bookmarkArray => console.log(bookmarkArray));
};

const postBoomark = function(id, title, desc, url, rating) {
  let newBookmark = JSON.stringify({
    id, 
    title,
    desc,
    url,
    rating
  });

  fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newBookmark
  });
};

export default {
  getBookmarks,
  postBoomark
}