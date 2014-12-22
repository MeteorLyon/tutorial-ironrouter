Template.marvel_characters.created = function () {
  console.info('The template marvel_characters has been created.')  ;
};
Template.marvel_characters.rendered = function () {
  console.info('The template marvel_characters has been rendered.')  ;
};
Template.marvel_characters.destroyed = function () {
  console.info('The template marvel_characters has been destroyed.')  ;
};

Template.marvel_characters.helpers({
    getCharacters: function() {
        var chars = Characters.find({});
        return chars;
    },
  
  getThumb: function(format) {
    var availableFormat = ["portrait_small", "portrait_medium", "portrait_xlarge", "portrait_fantastic", "portrait_uncanny", "portrait_incredible"],
        defaultFormat = _.first(availableFormat),
        selectedFormat = _.contains(availableFormat, format) ? format : defaultFormat,
        imgSrc;
    
    // @TODO finish it iqwth a real blank image
    if ((typeof this.thumbnail != undefined && this.thumbnail != null) 
        && (typeof this.thumbnail.path != undefined && this.thumbnail.path != null)) {
      imgSrc = this.thumbnail.path + "/" + selectedFormat +  "." + this.thumbnail.extension;
    } else {
      imgSrc = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/" + selectedFormat + ".jpg";
    }
    
    return imgSrc;
  }
});