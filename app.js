const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    const iso3Coded = countries.find (element => element.iso3 == isoCode);
    return iso3Coded;
}


/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */

function getCountryTranslatedName(isoCode, language){
    const leng = countries.find (element => element.iso3 == isoCode);
    return leng.translations[language];
}

/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */

function getCountriesBySubregion(subregion){
    let subRegions = []; 
    for (let i = 0; i < countries.length; i++) {
        let region = countries[i].subregion
        if (region == subregion) {
            subRegions.push(countries[i].name);
        }
    }
    return subRegions;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();