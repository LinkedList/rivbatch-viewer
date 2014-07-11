define('constants', [], function() {
	return {
		'dodavatel_subjekty': {
			'MO0': 'Ministerstvo obrany',
			'MV0': 'Ministerstvo vnitra',
			'MSM': 'Ministerstvo školství, mládeže a tělovýchovy'
		},
		'predkladatel_subjekty': {
			'MO0': {
				'nazev': 'Ministerstvo obrany',
				'ico': '60162694'
			}
		},
		'organizacni_jednotky': {
			'fvt':{
				'kod': 'G43',
				'nazev': 'Univerzita obrany - Fakulta vojenských technologií Brno'
			},
			'fem': {
				'kod': 'G42',
				'nazev': 'Univerzita obrany - Fakulta ekonomiky a managementu Brno'
			}
		},
		'encoding':'UTF-8',
		'people': {
			'bata': {
				'name': 'Ing. Tomáš Baťa',
				'tel': '111222333',
				'email': 'bata.tomas@example.com'
			}
		},
		'2014' : {
			'xmlns':'urn:CZ-RVV-IS-VaV-XML-NS:data-1.2.7',
			'struktura':'RIV14V',
			'informacni-oblast':'RIV',
			'obdobi-sberu':'2014'
		}
	};
});
