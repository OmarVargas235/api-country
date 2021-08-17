// A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
const regions = [
	{
		"country": "Afghanistan",
		"regions": [ "Badahsan", "Badgis", "Baglan", "Balh", "Bamiyan", "Daikondi", "Farah",
		"Faryab", "Gazni", "Gawr", "Helmand", "Herat", "Jawzjan", "Kabul", "Kandahar",
			"Kunar", "Qunduz", "Lagman", "Lawgar", "Nangarhar", "Nimruz", "Nuristān", "Uruzgan",
			"Paktiya", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pul", "Tahār", 
			"Vardak", "Zābul" ]
	},
	{
		"country": "Albania",
		"regions": [ "Berat", "Diber", "Durres", "Elbasan", "Fier", "Gjrokastra", "Korca", "Kukes",
		"Lezha", "Shkodra", "Tirana", "Vlora" ]
	},
	{
		"country": "Algeria",
		"regions": [ "Adrar", "Annaba", "El Bayadh", "El Oued", "El Tarf", "ILLizi", "Oran",
		"Oum El Bouaghi", "Wilaya d' Alger", "Wilaya de Ain Defla", "Wilaya de Ain Temouchent",
		"Wilaya de Batna", "Wilaya de Bechar", "Wilaya de Biskra", "Wilaya de Bordj Bou Arreidj",
		"Wilaya de Bouira", "Wilaya de Boumerdes", "Wilaya de Chlef", "Wilaya de Constantine",
		"Wilaya de Djelfa", "Wilaya de Ghardaia",
		"Wilaya de Guelma", "Wilaya de jijel", "Wilaya de Khenchela", "Wilaya de Laghouat",
		"Wilaya de M'Sila", "Wilaya de Mascara", "Wilaya de Madea", "Wilaya de Mila",
		"Wilaya de Mostaganem", "Wilaya de Naama", "Wilaya de Ouargla", "Wilaya de Relizane",
		"Wilaya de Saida", "Wilaya de Setif", "Wilaya de Sidi bel Abbes", "Wilaya de Skikda",
		"Wilaya de Souk Ahras", "Wilaya de Souk Ahras", "Wilaya de Tamanrasset",
		"Wilaya de Tebessa", "Wilaya de Tiaret", "Wilaya de Tindouf", "Wilaya de Tipaza",
		"Wilaya de Tissemsilt", "Wilaya de Tizi Ouzou", "Wilaya de Tlemcen" ]
	},
	{
		"country": "Andorra",
		"regions": [ "Andorra la vella", "Canillo", "Encamp", "Escaldes-Engordany",
		"La Massana", "Ordino", "Sant Julia de loria" ]
	},
	{
		"country": "Angola",
		"regions": [ "Bengo Province", "Benguela", "Cabinda", "Cuanza Norte Province",
		"Cunene Province", "Huambo", "Huila Province", "Kuando Kubango", "Kwanza Sul",
		"Luanda Province", "Lunda Norte Province", "Lunda Sul", "Malanje Province", "Moxico",
		"Namibe Province", "Provincia do Bie", "Provincia do Uige", "Zaire" ]
	},
	{
		"country": "Angilla",
		"regions": [ "Blowing Point", "East End", "george Hill", "Island Harbour", "North Hill",
		"North Side", "Sandy Ground", "Sandy Hill", "South Ground", "Stoney Ground",
		"The Farrington", "The Quarter", "The Valley", "West End" ]
	},
	{
		"country": "Antigua and Barbuda",
		"regions": [ "Barbuda", "Parish of Saint George", "Parish of Saint John",
		"Parish of Saint Mary", "Parish of Saint Paul", "Parish of Saint Peter",
		"Parish of Saint Philip", "Redonda" ]
	},
	{
		"country": "Argentina",
		"regions": [ "Provincia de Buenos Aires", "Provincia de Catamarca", "Provincia del Chaco",
		"Provincia del Chubut", "Provincia de Córdoba", "Provincia de Corrientes",
		"Provincia de Entre Rios", "Provincia de Formosa", "Provincia de Jujuy",
		"Provincia de La Pampa", "Provincia de La Rioja", "Provincia de Mendoza",
		"Provincia de Misiones", "Provincia del Neuquén", "Provincia de Río Negro",
		"Provincia de Salta", "Provincia de San Juan", "Provincia de San Luis",
		"Provincia de Santa Cruz", "Provincia de Santa Fe", "Provincia de Santiago del Estero",
		"Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur",
		"Provincia de Tucumán" ]
	},
	{
		"country": "Armenia",
		"regions": [ "Aragatsotni Marz", "Ararati Marz", "Armaviri Marz", "Geghark'unik'i Marz",
		"Kotayk'i Marz", "Lorru Marz", "Shiraki Marz", "Syunik'i Marz", "Tavushi Marz",
		"Vayots' Dzor", "Yerevan" ]
	},
	{
		"country": "Australia",
		"regions": [ "Australian Capital Territoty", "Northern Territoty",
		"State of New South Wales", "State of Queensland", "State of South Australia",
		"State of Tasmania", "State of Victoria", "State of Western Australia" ]
	},
	{
		"country": "Austria",
		"regions": [ "Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg",
		 "Steiermark", "Tirol", "Vorarlberg", "Wien" ]
	},
	{
		"country": "Azerbaijan",
		"regions": [ "Absheron Rayon", "Aghdam Rayon", "Aghdash Rayon", "Aghjabadi Rayon",
			"Aghstafa Rayon", "Aghsu Rayon", "Astara District", "Baku City", "Balakan Rayon",
			"Barda Rayon", "Beylagan Rayon", "Bilasuvar Rayon", "Dashkasan Rayon", "Fizuli Rayon",
			"Gadaby Rayon", "Ganja City", "Gobustan Rayon", "Goranboy Rayon", "Goychay Rayon",
			"Goygol Rayon", "Hajigabul Rayon", "Imishli Rayon", "Ismayilli Rayon", "Jabrayil Rayon",
			"Jalilabad", "Kalbajar District", "Khachmaz Rayon", "Khizi Rayon", "khojavend District",
			"Kurdamir Rayon", "Lacin Rayon", "Lankaran Rayon", "Lankaran Sahari", "Lerik Rayon",
			"Masally District", "Mingacevir City", "Naftalan City", "Nakhchivan",
			"Nakhchivan Autonomous Republic", "Neftchala Rayon", "Oghuz Rayon", "Qabala Rayon",
			"Qakh Rayon", "Qazakh Rayon", "Quba Rayon", "Qubadli Rayon", "Qusar Rayon",
			"Saatly Rayon", "Sabirabad Rayon", "Salyan Rayon", "Samukh Rayon", "Shabran Rayon",
			"Shaki City", "Shaki Rayon", "Shamakhi Rayon", "Shamkir Rayon", "Shirvan", "Shusha",
			"Siazan Rayon", "Sumqayit City", "Susa Rayonu", "Tartar Rayon", "Tovuz Rayon",
			"Ujar Rayon", "Xankandi Sahari", "Xocali Rayonu", "Yardymli Rayonu",
			"Yevlakh City", "Yevlakh Rayon", "Zangilan Rayon", "Zaqatala Rayon", "Zardab Rayon",
		]
	},
	{
		"country": "Venezuela",
		"regions": [ "Delta Amacuro", "Distrito Capital", "Estado Amazonas", "Estado Anzoategui",
		"Estado Apure", "Estado Aragua", "Estado Barinas", "Estado Bolivar", "Estado Carabobo",
		"Estado Cojedes", "Estado Falcon", "Estado Guarico", "Estado Lara", "Estado Merida",
		"Estado Monagas", "Estado Nueva Esparta", "Estado Portuguesa", "Estado Sucre",
		"Estado Tachira", "Estado Trujillo", "Estado Vargas", "Estado Yaracuy",
		"Estado Zulia", "Estado Miranda" ]
	},
]

module.exports = {
	regions,
}