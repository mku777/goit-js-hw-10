export function countryСard({ flags, name, capital, population, languages }) {
  return `
      <div>
        <div>
          <imgsrc="${flags.svg}" alt="${name.official}" width="50" />
          <h2>${name.official}</h2>
        </div>
        <p><span>Capital:</span> ${capital}</p>
        <p><span>Population:</span> ${population}</p>
        <p><span>Languages:</span> ${Object.values(languages)}</p>
      </div>
    `;
}

export function countryCardList({ flags, name }) {
  return `
    <li>
      <img
        src="${flags.svg}"
         alt="${name.official}"
         width="30" 
         />
      <p>${name.official}</p>
    </li>
    `;
}
