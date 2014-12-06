Meteor.startup(function () {
    if (Citations.find().count() === 0) {
        var datas = [{"author": "who", "cite": "la deprime c'est quand on se sent nul, et que les autres le sont encore plus"},
            {"author": "me", "cite": "certains projets sous PHP ne font que nuire au langage sur lequel ils reposent"},
            {"author": "ispum", "cite": "ispum lorem distri ud lars todomle"}
        ];

        for (var i=0 ; i<datas.length ; i++) {
            Citations.insert(datas[i]);
        }
    }
});