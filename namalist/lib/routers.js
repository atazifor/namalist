
Router.configure({
    layoutTemplate: 'ApplicationLayout',
    waitOn: function(){
        return [Meteor.subscribe('states'), Meteor.subscribe('sections'), Meteor.subscribe('categories'), Meteor.subscribe('cities')];
    }
});

Router.route('/', {
    template: 'states',
    yieldRegions: {
        'footer': {to: 'footer'}
    },
    data: {title: 'States'}
});