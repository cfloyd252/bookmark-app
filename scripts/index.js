import api from './api.js';
import STORE from './store.js';
import bookmark from './bookmark-app.js';

function main(){
  bookmark.render();
  bookmark.bindEventListeners();
  api.getBookmarks()
    .then(bookmarks => console.log(bookmarks));
}

$(main);