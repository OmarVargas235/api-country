const { Country } = require('../classes/country');

module.exports.getRegion = (req, res) => {

	const { country } = req.params;
	console.log(country);
}