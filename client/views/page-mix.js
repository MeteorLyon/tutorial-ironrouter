Template.fakeData1.created = function () {
  console.info('The template fakeData1 has been created.')  ;
};
Template.fakeData1.rendered = function () {
  console.info('The template fakeData1 has been rendered.')  ;
};
Template.fakeData1.destroyed = function () {
  console.info('The template fakeData1 has been destroyed.')  ;
};

Template.fakeData1.helpers({
    getData: function() {
        return FakeData1.find({});
    }
});

Template.fakeData2.created = function () {
  console.info('The template fakeData2 has been created.')  ;
};
Template.fakeData2.rendered = function () {
  console.info('The template fakeData2 has been rendered.')  ;
};
Template.fakeData2.destroyed = function () {
  console.info('The template fakeData2 has been destroyed.')  ;
};

Template.fakeData2.helpers({
    getData: function() {
        return FakeData2.find({});
    }
});