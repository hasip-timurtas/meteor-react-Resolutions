import React, {Component} from 'react';

export default class ResolutionSingle extends Component {

    toggleChecked(){
        Meteor.call('toggleResolution',this.props.resolution._id,this.props.resolution.complete);
    }

    deleteResolution(){
        Meteor.call('deleteResolution',this.props.resolution._id);
    }

    render() {
        return (
            <li className="list-group-item">
                <input type="checkbox"
                       readonly={true}
                       checked={this.props.resolution.complete}
                       onClick={this.toggleChecked.bind(this)}
                />

                {this.props.resolution.text}

                <button className="btn-cancel"
                        onClick={this.deleteResolution.bind(this)}>
                        X
                </button>
            </li>
        )
    }
}