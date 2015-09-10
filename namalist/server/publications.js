
Meteor.publish('states', function(){
    return States.find();
});

Meteor.publish('sections', function(){
    return Sections.find();
});

Meteor.publish('categories', function(){
    return Categories.find();
});