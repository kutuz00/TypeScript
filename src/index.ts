import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock, getUserData } from './user.js';
import { renderToast } from './lib.js';

localStorage.setItem('user', JSON.stringify({
  username: 'John Doe',
  avatarUrl: '/img/avatar.png'
}))

localStorage.favoritesAmount = Number(localStorage.favoritesAmount) + 1
console.log(localStorage.favoritesAmount)

const defaultCheckInDate = new Date();
defaultCheckInDate.setDate(new Date().getDate() + 1);

const defaultCheckIn = defaultCheckInDate.toISOString().split("T")[0]

const minStayDays = defaultCheckInDate;
minStayDays.setDate(minStayDays.getDate() + 2);

const minStay = minStayDays.toISOString().split("T")[0]

//////////Lesson 2////////////////

const user = getUserData('user');




window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock(user.username, user.avatarUrl, Number(localStorage.getItem("favoritesAmount")));
  renderSearchFormBlock(defaultCheckIn, minStay);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
