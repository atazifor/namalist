/**
 * Insert provinces into the database
 */
if(Countries.find().count() == 0){
    var cId = Countries.insert({
        cnName: 'Cameroon'
    });

    var states = new Array("Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest");
    states.forEach(function(element, index){
        States.insert({
            stName: element,
            cnId: cId
        });
    });

}
