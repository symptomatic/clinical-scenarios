Meteor.methods({
    createScenarios: function(text){
        check(text, String);        
        console.log('createScenarios()', text);


    }
});