import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { countryСard, countryCardList } from './js/markUp';

const DEBOUNCE_DELAY = 300;

const inputBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const name = inputBox.value;
  if (name === '') {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    return;
  }
  fetchCountries(name)
    .then(countrys => {
      if (countrys.length === 1) {
        const markup = countrys.map(country => countryСard(country));
        countryInfo.innerHTML = markup.join('');
        countryList.innerHTML = '';
      }

      if (countrys.length <= 10) {
        const listMarkup = countrys.map(country => countryCardList(country));
        countryList.innerHTML = listMarkup.join('');
        countryInfo.innerHTML = '';
      }

      if (countrys.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
        return;
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
      return error;
    });
}
