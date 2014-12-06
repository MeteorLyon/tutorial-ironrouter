Meteor.publish('router-citations', function() {
    return Citations.find();
});