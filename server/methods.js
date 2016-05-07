Meteor.methods({
    addResolution(resolution){
        Resolutions.insert({
            text: resolution,
            complete: false,
            createdAt: new Date()
        });
    },

    toggleResolution(id,status){
        Resolutions.update(id,{
           $set:{complete:!status}
        });
    },

    deleteResolution(id){
        Resolutions.remove(id);
    }
});
