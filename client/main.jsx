import React from 'react';
import { Meteor } from 'meteor/meteor';
import App from '../imports/App.jsx';

Meteor.startup(function () {
   React.render(<App />, document.getElementById("render-target"));
});