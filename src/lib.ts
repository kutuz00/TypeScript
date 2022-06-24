export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}

function renderFavoriteBtn() {
  document.querySelectorAll('.favorites').forEach(el => el.addEventListener('click', toggleFavoriteItem));
}

export function toggleFavoriteItem(e) {
  console.log(e);
}

export function renderResultsBlock(elementId, html) {
  const element = document.getElementById(elementId);
  const ul = document.createElement('ul');
  ul.className = 'results-list';
  ul.innerHTML = html;
  element.append(ul);
  renderFavoriteBtn();
}

export function renderToast(message, action) {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, action);
    };
  }
}

