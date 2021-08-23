class Country {

	constructor(name, currency, capital, continent, language, iso, phone_code) {

		this.name = name;
		this.currency = currency;
		this.capital = capital;
		this.continent = continent;
		this.languages = languages;
		this.iso = iso;
		this.phone_code = phone_code;
	}
}

module.exports = {
	Country,
}