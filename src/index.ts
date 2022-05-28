import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

const defaultCheckInDate = new Date();
defaultCheckInDate.setDate(new Date().getDate() + 1);

const defaultCheckIn = defaultCheckInDate.toISOString().split("T")[0]

const minStayDays = defaultCheckInDate;
minStayDays.setDate(minStayDays.getDate() + 2);

const minStay = minStayDays.toISOString().split("T")[0]

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('John Doe', '/img/avatar.png', 324);
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
