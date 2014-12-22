Meteor.methods({
  "addCites": function(cites) {
    var citesList = [];
    if (!_.isArray(cites)) {
      citesList.push(cites);
    } else {
      citesList = cites;
    }

    _.each(citesList, function(item) {
      if (!_.isObject(item)) throw new Meteor.Error(420, 'Bad argument', item);

      var cleanItem = _.pick(item, "cite", "author");

      if (cleanItem.cite
          && !Citations.findOne({cite: cleanItem.cite})) {
        Citations.insert(cleanItem);
      }
    });
  }
});