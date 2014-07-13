define(['backbone', 'views'], function (Backbone, views) {
    var AppRouter = Backbone.Router.extend({
	routes: {
	    '*actions': 'defaultRoute'
	}
    });

    var initialize = function () {
	var appRouter = new AppRouter;

	appRouter.on('route:defaultRoute', function (actions) {
	    var fileInputView = new views.FileInputView();
	    var fileNameHeader = new views.FileNameHeader({name: 'File'});
	});

	Backbone.history.start();
    }

    return {
	initialize : initialize
    }
});
