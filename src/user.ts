import { renderBlock } from './lib.js';


export function getUserData(user): unknown {
  let userData = JSON.parse(localStorage.getItem(user));
  let userParams: object = { username: "undefined", avatarUrl: "undefined" };
  if (typeof userData.username === 'string' && typeof userData.avatarUrl === 'string') {
    return userData;
  }
  return userParams;
}
export function getFavoritesAmount(favoritesAmount?): unknown {
  return localStorage.getItem(favoritesAmount)
}

export function renderUserBlock(userName: string, avatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;


  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''
    }"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
