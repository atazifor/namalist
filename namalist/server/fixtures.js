/**
 * Insert provinces into the database
 */
if(Countries.find().count() == 0){
    var cId = Countries.insert({
        cnName: 'Cameroon'
    });

    var states = {
        "Adamawa":['Ngoundere'],
        "Centre":['Yaounde'],
        "East":['Bertoua'],
        "Far North":['Maroua'],
        "Littoral":['Douala'],
        "North": ['Garoua'],
        "Northwest":['Bamenda'],
        "West":['Bafoussam, Nkongsamba, Dschang'],
        "South":['Ebolowa'],
        "Southwest":['Buea', 'Kumba', 'Limbe', 'Tiko']
    };

    for (var state in states) {
        var stateId = States.insert({
            stName: state,
            cnId: cId
        });
        var citiesInState = states[state];
        citiesInState.forEach(function(element, index){
            Cities.insert({
                city: element,
                stId: stateId
            });
        });
    }

    var sections = ['Real Estate', 'Goods & Services'];
    var sectionId = Sections.insert({
        secName: sections[0],
        secDesc: 'Land, houses, apartments and business locations'
    });

    var categories = ['Houses', 'Apartments', 'Land', 'Commercial/Office'];
     categories.forEach(function(elt, index){
         Categories.insert({
             sectionId: sectionId,
             category: elt,
             forSale: 1 //is item for sale
         })
     });

    categories = ['Houses', 'Apartments', 'Commercial/Office'];
    categories.forEach(function(elt, index){
        Categories.insert({
            sectionId: sectionId,
            category: elt,
            forRent: 1 //is item for sale
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
            category: elt,
            forSale: 1 //is for sale
        })
    });

}
