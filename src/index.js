import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import {fetchCountries} from './js/fetchCountries'
import {countryСard, countryCardList} from './js/markUp'




const DEBOUNCE_DELAY = 300;

