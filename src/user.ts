import { renderBlock } from './lib.js';


export function getUserData(user: string) {
  const storageData: unknown = localStorage.getItem(user)
  if (typeof storageData === 'string') {
    try {
      return JSON.parse(storageData);
    } catch (error) {
      return null;
    }
  }
  return null;
}
export function getFavoritesAmount(favoritesAmount) {
  const storageData: unknown = localStorage.getItem(favoritesAmount);
  if (typeof storageData === 'string') {
    return Number.parseInt(storageData);
  }
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
