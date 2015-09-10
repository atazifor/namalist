/**
 * Created by atazifor on 9/9/2015.
 */
Template.states.helpers({
    states: function(){
        return States.find();
    },
    sections: function(){
        return Sections.find();
    },
    getCategories: function(sectionId){
        return Categories.find({sectionId: sectionId});
    }
});

