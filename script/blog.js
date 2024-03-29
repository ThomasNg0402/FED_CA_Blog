const countries = [
        "India",
        "China",
        "United States",
        "Indonesia",
        "Pakistan",
        "Nigeria",
        "Brazil",
        "Bangladesh",
        "Russia",
        "Mexico",
        "Ethiopia",
        "Japan",
        "Philippines",
        "Egypt",
        "DR Congo",
        "Vietnam",
        "Iran",
        "Turkey",
        "Germany",
        "Thailand",
        "United Kingdom",
        "Tanzania",
        "France",
        "South Africa",
        "Italy",
        "Kenya",
        "Myanmar",
        "Colombia",
        "South Korea",
        "Uganda",
        "Sudan",
        "Spain",
        "Argentina",
        "Algeria",
        "Iraq",
        "Afghanistan",
        "Poland",
        "Canada",
        "Morocco",
        "Saudi Arabia",
        "Ukraine",
        "Angola",
        "Uzbekistan",
        "Yemen",
        "Peru",
        "Malaysia",
        "Ghana",
        "Mozambique",
        "Nepal",
        "Madagascar",
        "Côte d'Ivoire",
        "Venezuela",
        "Cameroon",
        "Niger",
        "Australia",
        "North Korea",
        "Mali",
        "Burkina Faso",
        "Syria",
        "Sri Lanka",
        "Malawi",
        "Zambia",
        "Romania",
        "Chile",
        "Kazakhstan",
        "Chad",
        "Ecuador",
        "Somalia",
        "Guatemala",
        "Senegal",
        "Netherlands",
        "Cambodia",
        "Zimbabwe",
        "Guinea",
        "Rwanda",
        "Benin",
        "Burundi",
        "Tunisia",
        "Bolivia",
        "Haiti",
        "Belgium",
        "Jordan",
        "Dominican Republic",
        "Cuba",
        "South Sudan",
        "Sweden",
        "Honduras",
        "Czech Republic (Czechia)",
        "Azerbaijan",
        "Greece",
        "Papua New Guinea",
        "Portugal",
        "Hungary",
        "Tajikistan",
        "United Arab Emirates",
        "Belarus",
        "Israel",
        "Togo",
        "Austria",
        "Switzerland",
        "Sierra Leone",
        "Laos",
        "Serbia",
        "Nicaragua",
        "Libya",
        "Paraguay",
        "Kyrgyzstan",
        "Bulgaria",
        "Turkmenistan",
        "El Salvador",
        "Congo",
        "Singapore",
        "Denmark",
        "Slovakia",
        "Central African Republic",
        "Finland",
        "Norway",
        "Liberia",
        "State of Palestine",
        "Lebanon",
        "New Zealand",
        "Costa Rica",
        "Ireland",
        "Mauritania",
        "Oman",
        "Panama",
        "Kuwait",
        "Croatia",
        "Eritrea",
        "Georgia",
        "Mongolia",
        "Moldova",
        "Uruguay",
        "Bosnia and Herzegovina",
        "Albania",
        "Jamaica",
        "Armenia",
        "Gambia",
        "Lithuania",
        "Qatar",
        "Botswana",
        "Namibia",
        "Gabon",
        "Lesotho",
        "Guinea-Bissau",
        "Slovenia",
        "North Macedonia",
        "Latvia",
        "Equatorial Guinea",
        "Trinidad and Tobago",
        "Bahrain",
        "Timor-Leste",
        "Estonia",
        "Mauritius",
        "Cyprus",
        "Eswatini",
        "Djibouti",
        "Fiji",
        "Comoros",
        "Guyana",
        "Bhutan",
        "Solomon Islands",
        "Luxembourg",
        "Montenegro",
        "Suriname",
        "Cabo Verde",
        "Micronesia",
        "Malta",
        "Maldives",
        "Brunei",
        "Bahamas",
        "Belize",
        "Iceland",
        "Vanuatu",
        "Barbados",
        "Sao Tome & Principe",
        "Samoa",
        "Saint Lucia",
        "Kiribati",
        "Grenada",
        "Tonga",
        "Seychelles",
        "St. Vincent & Grenadines",
        "Antigua and Barbuda",
        "Andorra",
        "Dominica",
        "Saint Kitts & Nevis",
        "Marshall Islands",
        "Liechtenstein",
        "Monaco",
        "San Marino",
        "Palau",
        "Nauru",
        "Tuvalu",
        "Holy See"
];
function getCountryData(country) {
    const apiKey = 'CwcyKOR5lUGs6RTfUXNeHw==AfTraDK9OjymV4LP'; // Replace with your API key
    const apiUrl = `https://api.api-ninjas.com/v1/country?name=Malaysia`;
  
    $.ajax({
        method: 'GET',
        url: apiUrl,
        headers: { 'X-Api-Key': apiKey},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
//     $.ajax({
//       url: apiUrl,
//       type: 'GET',
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//       success: function(response) {
//         // Extract and display capital and GDP growth
//         console.log(response[0].capital, response[0].gpd_growth)
//         const capital = response[0].capital;
//         const gdpGrowth = response[0].gdp_growth;
  
//         // Display the information in the console
//         console.log(`Country: ${country}`);
//         console.log(`Capital: ${capital}`);
//         console.log(`GDP Growth: ${gdpGrowth}`);
  
//         // Display the information on the HTML page
//         displayResult(`Country: ${country}<br>Capital: ${capital}<br>GDP Growth: ${gdpGrowth}`);
//       },
//       error: function(error) {
//         console.error('Error:', error.statusText);
//       }
//     });
//   }
  
//   function displayResult(result) {
//     // Update the content of the 'result' div with the provided result
//     $('#result').html(result);
//   }
  
//   // Randomly select a country from the list
//   const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  
//   // Call the function with the random country
//   getCountryData(randomCountry);