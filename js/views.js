define('views', ['backbone', 'underscore'], function(Backbone, _) {
    var FileInputView = Backbone.View.extend({
	el: $("#file-input-container"),
	events: {
	    "change": "handleFiles"
	},

	initialize: function () {
	    this.render();
	},

	render: function () {
	    var template = _.template($('#file-input-template').html(), {});

	    this.$el.html(template);
	},

	handleFiles: function (e) {
	    // current target is file-input-container
	    // first element child is the file input
	    var files = e.currentTarget.firstElementChild.files;
	}
    });

    var FileNameHeader = Backbone.View.extend({
	el: $("#file-name-header-container"),

	initialize: function(model) {
	    this.model = model;
	    this.render();
	},

	render: function () {
	    var template = _.template($("#file-name-header-template").html(), {name: this.model.name});

	    this.$el.html(template);
	}
    });

    return {
	FileInputView : FileInputView,
	FileNameHeader : FileNameHeader
    };
});
