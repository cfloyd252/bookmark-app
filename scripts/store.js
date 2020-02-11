const bookmarks = [];
let adding = false;
let error = null;
let rating = 0;

const addBookmark = function(bookmark) {
  this.bookmarks.push(bookmark);
};

const setError = function(err) {
  this.error = err;
}

export default {
  bookmarks,
  adding,
  error,
  rating,
  addBookmark,
  setError
};