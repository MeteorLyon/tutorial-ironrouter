Template.cites.created = function () {
  console.info('The template cites has been created.')  ;
};
Template.cites.rendered = function () {
  console.info('The template cites has been rendered.')  ;
};
Template.cites.destroyed = function () {
  console.info('The template cites has been destroyed.')  ;
};

Template.cites.helpers({
    getCitations: function() {
        var cites = Citations.find({});
        console.log('getCitations', cites.count());
        return cites;
    },

    hasAuthor: function() {
        var has = false;

        if (this.author) {
            has = true;
        }

        return has;
    },

    hasSource: function() {
        var has = false;

        if (this.source) {
            has = true;
        }

        return has;
    },

    hasDate: function() {
        var has = false;

        if (this.date) {
            has = true;
        }

        return has;
    }
});