import  React, {Component} from 'react';

export  default class ResolutionsForm extends Component {
    addResolution(event) {
        event.preventDefault();
        var text = this.refs.resolution.value.trim();

        Meteor.call('addResolution',text,()=> {
            this.refs.resolution.value = "";
        });

    }

    render() {
        return (
            <form className="new-resolutions" onSubmit={this.addResolution.bind(this)}>
                <input
                    className="form-control"
                    type="text"
                    ref="resolution"
                    placeholder="Finish React Meteor Series"
                />
            </form>
        )
    }
}