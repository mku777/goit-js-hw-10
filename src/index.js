import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { countryСard, countryCardList } from './js/markUp';

const DEBOUNCE_DELAY = 300;

const inputBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const name = inputBox.value;

inputBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  if (name === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(name)
    .then(countries => {
      if (countries.length === 1) {
        let mark = countries.map(country => countryСard(country));
        countryInfo.innerHTML = mark.join('');
        countryList.innerHTML = '';
      } else if (countries.length <= 10) {
        const list = countries.map(country => countryCardList(country));
        countryList.innerHTML = list.join('');
        countryInfo.innerHTML = '';
      } else if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
      }
    })
    .catch(err => {
      Notify.failure('Oops, there is no country with that name');
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
    });
}


