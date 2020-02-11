import api from './api.js';
import STORE from './store.js';
import app from './bookmark-app.js';
import store from './store.js';

function main(){
  api.getBookmarks()
    .then(bookmarks => {
      bookmarks.forEach(bookmark => store.addBookmark(bookmark));
      app.render();
      app.bindEventListeners();
    })
    .catch(error => {
      store.setError(error.message);
      app.render();
      app.bindEventListeners();
    });
}

$(main);