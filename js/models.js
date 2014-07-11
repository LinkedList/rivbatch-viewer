define('models', ['backbone', 'underscore', 'constants'], function(Backbone, _, constants) {
	var Header = Backbone.Model.extend({
		initialize: function (args) {
			if(typeof args.year == 'undefined')	{
				var year = new Date().getFullYear();
				this.set('year', year);
				_this = this;
				_(constants[year]).forEach(function(value, key) {
					_this.set(key, value);
				});
			}
		}
	});

	return {
		Header : Header
	};
});
