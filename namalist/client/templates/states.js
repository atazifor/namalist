/**
 * Created by atazifor on 9/9/2015.
 */
Template.states.helpers({
    states: function(){
        return States.find();
    },
    getCities: function(stateId){
        return Cities.find({stId: stateId});
    },
    sections: function(){
        return Sections.find();
    },
    getCategories: function(sectionId){
        return Categories.find({sectionId: sectionId});
    },
    getCategoriesForSale: function(sectionId){
        return Categories.find({sectionId: sectionId, forSale:1});
    },
    getCategoriesForRent: function(sectionId){
        return Categories.find({sectionId: sectionId, forRent:1});
    },
    getCategoriesForSaleCount: function(sectionId){
        return Categories.find({sectionId: sectionId, forSale:1}).count();
    },
    getCategoriesForRentCount: function(sectionId){
        return Categories.find({sectionId: sectionId, forRent:1}).count();
    }
});

Template.search.helpers({
    states: function(){
        return States.find();
    },
    sections: function(){
        return Sections.find();
    },
    sectionsCount: function(){
        return Sections.find().count();
    },
    getCategories: function(sectionId){
        return Categories.find({sectionId: sectionId});
    },
    getCategoriesForSale: function(sectionId){
        return Categories.find({sectionId: sectionId});
    },
    getCategoriesForSaleCount: function(sectionId){
        return Categories.find({sectionId: sectionId, forSale:1}).count();
    },
    getCategoriesForRentCount: function(sectionId){
        return Categories.find({sectionId: sectionId, forRent:1}).count();
    }
});