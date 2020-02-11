const bookmarks = [];
let adding = false;
let error = null;
let filter = 0;

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
  filter,
  addBookmark,
  setError
};