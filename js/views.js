define('views', ['backbone', 'underscore', 'vent'], function(Backbone, _, Vent) {
    var FileInputView = Backbone.View.extend({
	el: $("#file-input-container"),
	events: {
	    "change": "handleFiles"
	},

	initialize: function () {
	    this.model = {};
	    this.render();
	},

	render: function () {
	    var template = _.template($('#file-input-template').html(), this.model);

	    this.$el.html(template);
	},

	handleFiles: function (e) {
	    // current target is file-input-container
	    // first element child is the file input
	    var files = e.currentTarget.firstElementChild.files;

	    this.model = {};
	    this.model.name = files[0].name;
	    this.render();

	    // testing Event Aggregator
	    Vent.trigger('file:loaded', files[0].name);
	}
    });


    return {
	FileInputView : FileInputView,
    };
});
