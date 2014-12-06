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