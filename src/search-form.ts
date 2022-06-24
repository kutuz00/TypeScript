import { renderBlock } from './lib.js';
import { SearchFormData } from "./interfaces.js";
import { renderAPISearchResultsBlock } from "./search-results.js";

export const searchQuary = (formData: SearchFormData): void => {
  document.querySelector('.before-results-block')
    .parentNode.removeChild(document.querySelector('.before-results-block'))
  renderAPISearchResultsBlock(formData);
}

export const search = () => {
  const city = document.getElementById('city') as HTMLInputElement;
  const checkin = document.getElementById('check-in-date') as HTMLInputElement;
  const checkout = document.getElementById('check-out-date') as HTMLInputElement
  const price = document.getElementById('max-price') as HTMLInputElement
  const form = document.querySelector("form");

  const searchForm: SearchFormData = {
    place: city.defaultValue,
    checkInDate: new Date(checkin.defaultValue),
    checkOutDate: new Date(checkout.defaultValue),
    maxPrice: Number.parseInt(price.defaultValue)
  };
  checkin.addEventListener('change', (e) => {
    checkin.value = (e.target as HTMLInputElement).value
    searchForm.checkInDate = new Date((e.target as HTMLInputElement).value)
  })
  checkout.addEventListener('change', (e) => {
    checkout.value = (e.target as HTMLInputElement).value;
    searchForm.checkOutDate = new Date((e.target as HTMLInputElement).value)
  })
  price.addEventListener('change', (e) => {
    price.value = (e.target as HTMLInputElement).value;
    searchForm.maxPrice = Number.parseInt((e.target as HTMLInputElement).value) | NaN
  })
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuary(searchForm);
  })

}



export function renderSearchFormBlock(checkInDate: string, checkOutDate: string) {

  const minCheckInDate = new Date(Date.now()).toISOString().split("T")[0];
  const maxDate = new Date();

  maxDate.setFullYear(maxDate.getFullYear(), maxDate.getMonth() + 2, 0);
  const maxCheckInOutDate = maxDate.toISOString().split("T")[0]



  renderBlock(
    'search-form-block',
    `
    <form action="#">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${checkInDate} min="${minCheckInDate}" max="${maxCheckInOutDate}" name="checkin" >
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate}" min="${checkOutDate}" max="${maxCheckInOutDate}" name="checkout">
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price"/>
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

}

