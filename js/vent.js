define(['backbone', 'underscore'], function(Backbone, _){
    var vent = {};

    _.extend(vent, Backbone.Events);

    vent.on('file:loaded', function(msg){
	console.log('File was loaded:', msg);
    });

    return vent;
});
