/**
 * Insert provinces into the database
 */
if(Countries.find().count() == 0){
    var cId = Countries.insert({
        cnName: 'Cameroon'
    });

    var states = ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"];
    states.forEach(function(element, index){
        States.insert({
            stName: element,
            cnId: cId
        });
    });

    var sections = ['Real Estate', 'Goods & Services'];
    var sectionId = Sections.insert({
        secName: sections[0],
        secDesc: 'Land, houses, apartments and business locations'
    });

    var categories = ['Houses', 'Apartments', 'Land', 'Business Unit'];
     categories.forEach(function(elt, index){
         Categories.insert({
             sectionId: sectionId,
             category: elt
         })
     });

    sectionId = Sections.insert({
        secName: sections[1],
        secDesc: 'Cars, Computers, Appliances, Electronics, etc mostly for sale'
    });

    categories = ['Appliances', 'Cars', 'Computers', 'Electronics', 'General'];
    categories.forEach(function(elt, index){
        Categories.insert({
            sectionId: sectionId,
            category: elt
        })
    });

}
