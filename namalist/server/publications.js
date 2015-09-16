
Meteor.publish('states', function(){
    return States.find();
});

Meteor.publish('cities', function(){
    return Cities.find();
});

Meteor.publish('sections', function(){
    return Sections.find();
});

Meteor.publish('categories', function(){
    return Categories.find();
});