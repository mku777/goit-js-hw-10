export function countryСard({ flags, name, capital, population, languages }) {
  return `
      <div class="country-card">
        <div>
          <img src="${flags.svg}" alt="${name.official}" width="230" />
          <h2 class="title-country">${name.official}</h2>
        </div>
        <p class="card-p"><span class="card-title">Capital:</span> ${capital}</p>
        <p class="card-p"><span class="card-title">Population:</span> ${population}</p>
        <p class="card-p"><span class="card-title">Languages:</span> ${Object.values(languages).join(', ')} </p>
      </div>
    `;
}

export function countryCardList({ flags, name }) {
  return `
  <div>
    <li class="card-list">
      <img class="card-list-image"
        src="${flags.svg}"
         alt="${name.official}"
         width="100"
         />
      <p class="card-list-p"><em>${name.official}</p>
    </li>
    </div>
    `;
}
