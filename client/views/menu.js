Template.menu.helpers({
    isActive: function(url) {
        if (Router.current().url == url) return ['active'];

        return [''];
    },

    getClickCount: function() {
        return Session.get('clickCount');
    }
});

Template.menu.events({
    'click ul.nav li a': function() {
        var count = Session.get('clickCount');
        count++;
        Session.set('clickCount', count);
    }
});