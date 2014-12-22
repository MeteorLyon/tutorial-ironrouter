// Router
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('Home');
});

Router.route('/one', function () {
    this.render('page_1');
});

Router.route('/two', function () {
    this.render('page_2');
});

Router.route('/subs', {
    subscriptions: function() {
        console.info('%c subscriptions - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        return Meteor.subscribe('router-citations', Session.get('clickCount'), function() {console.warn('%c data loaded - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());});
    },
    // why onRun is never called, or only sometimes ?
    onRun: function () {
        console.info('%c onRun - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onRerun: function () {
        console.info('%c onRerun - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onBeforeAction: function () {
        console.info('%c onBeforeAction - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onAfterAction: function () {
        console.info('%c onAfterAction - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
    },
    onStop: function () {
        console.info('%c onStop - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
    },
    data: function() {
        console.info('%c data - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        return Citations.find();
    },
    action: function() {
        console.info('%c action - citations: %s, characters: %s', 'background: #999; color: #222', Citations.find().count(), Characters.find().count());
        this.render('subs');
        this.render('cites_footer', {to: 'footer'});
    }
});

Router.route('/waiton', {
     waitOn: function() {
         console.info('%c waitOn - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
         return Meteor.subscribe('router-citations-for-waiton', Session.get('clickCount'), function() {console.warn('%c data loaded %s %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());});
     },
    onRun: function () {
        console.info('%c onRun - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onRerun: function () {
        console.info('%c onRerun - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
	      this.next();
    },
    onBeforeAction: function () {
        console.info('%c onBeforeAction - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onAfterAction: function () {
        console.info('%c onAfterAction - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
    },
    onStop: function () {
        console.info('%c onStop - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
    },
    data: function() {
        console.info('%c data - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
        return Characters.find();
    },
    action: function() {
        console.info('%c action - citations: %s, characters: %s', 'background: #222; color: #bada55', Citations.find().count(), Characters.find().count());
        this.render('waiton');
        this.render('marvel_footer', {to: 'footer'});
    }
});

Router.route('/subsonbefore', {
    // why onRun is never called, or only sometimes ?
    onRun: function () {
        console.info('%c onRun - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onRerun: function () {
        console.info('%c onRerun - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
        this.next();
    },
    onBeforeAction: function () {
        console.info('%c onBeforeAction - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
        Meteor.subscribe('router-citations-onbefore', Session.get('clickCount'), function() {console.warn('%c data loaded - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());});
        this.next();
    },
    onAfterAction: function () {
        console.info('%c onAfterAction - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
    },
    onStop: function () {
        console.info('%c onStop - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
    },
    data: function() {
        console.info('%c data - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
        return Citations.find();
    },
    action: function() {
      console.info('%c action - citations: %s, characters: %s', 'background: #bada55; color: #222', Citations.find().count(), Characters.find().count());
        this.render('subsonbefore');
        this.render('cites_footer', {to: 'footer'});
    }
});

Router.route('/mix', {
    subscriptions: function() {
        console.info('%c subscriptions - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
        return Meteor.subscribe('router-fake-1', Session.get('clickCount'), function() {console.warn('%c data loaded - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());});
    },
    // why onRun is never called, or only sometimes ?
    onRun: function () {
        console.info('%c onRun - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
        this.next();
    },
    onRerun: function () {
        console.info('%c onRerun - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
        this.next();
    },
    onBeforeAction: function () {
        console.info('%c onBeforeAction - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
        Meteor.subscribe('router-fake-2', Session.get('clickCount'), function() {console.warn('%c data loaded - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());});
        this.next();
    },
    onAfterAction: function () {
        console.info('%c onAfterAction - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
    },
    onStop: function () {
        console.info('%c onStop - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
    },
    action: function() {
        console.info('%c action - data1: %s, data2: %s', 'background: #a00387; color: #eee', FakeData1.find().count(), FakeData2.find().count());
        this.render('mix');
        this.render('cites_footer', {to: 'footer'});
    }
});

Router.route('/api/citations', {where: 'server'})
    .get(function () {
        var data = Citations.find().fetch(),
            body = JSON.stringify(data);

        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "application/javascript");
        this.response.write(body);
        this.response.end();
    });

Router.route('/api/citations/:_id', {where: 'server'})
    .get(function () {
        var id = this.params._id,
            data = Citations.findOne(id),
            body = JSON.stringify(data);

        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "application/javascript");
        this.response.write(body);
        this.response.end();
    });