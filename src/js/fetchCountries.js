export function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1/name/';
  const fieldFilter = '?fields=name,capital,population,flags,languages';
  
 return fetch(`${url}${name}${fieldFilter}`).then(response => {
    return response.json();
  })
}