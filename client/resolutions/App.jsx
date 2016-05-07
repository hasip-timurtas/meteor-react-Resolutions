import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import Deneme from './Deneme.jsx';

import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {
    constructor(){
        super();
        this.state={
                subscription:{
                    resolutions:Meteor.subscribe('allResolutions')
                }
        }
    }

    componentWillUnmount(){
        this.state.subscription.resolutions.stop();
    }

    resolutions() {
        return Resolutions.find({},{sort: {createdAt:-11}});
    }
    
    render() {
        let res = this.resolutions();
        if (res.length < 1) {
            return <div> Loading</div>
        }

        return (
            <div>
                <h1> My Resolutions</h1>
                <ResolutionsForm />
                <Deneme />
                <ul className="list-group">
                    {this.resolutions().map(resolution =>{
                        return  <ResolutionSingle key={resolution._id} resolution={resolution} />
                    })}

                </ul>

            </div>

        )
    }
};
