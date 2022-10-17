export function countryСard({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `
          <img src="${flags.svg}" alt="${name.official}" width="40" />
          <h2>${name.official}</h2>
        <p><span>Capital:</span> ${capital}</p>
        <p><span>Population:</span> ${population}</p>
        <p><span>Languages:</span> ${Object.values(languages)}</p>
    `;
}

