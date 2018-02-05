import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }
    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };
    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const campaigns = [
  {
    id: '19826235',
    name: 'Campaign 1'
  },
  {
    id: '782937452',
    name: 'Campaign 2'
  },
  {
    id: '123971644',
    name: 'Campaign 3'
  },
  {
    id: '23143124',
    name: 'Campaign 4'
  },
  {
    id: '981374790',
    name: 'Campaign 5'
  }
];

const style = {
  margin: 12,
};

const ListExampleSelectable = (update) => (
    <div>
      <SelectableList defaultValue={3}>
        <Subheader inset>Selectable Campaigns</Subheader>
        {campaigns.map(campaign => <ListItem key={campaign.id} value={campaign.id} primaryText={campaign.name} />)}
      </SelectableList>
      <RaisedButton label="Optimize Campaign" primary style={style} onClick={() => (update.update())} />
    </div>
);

export default ListExampleSelectable;
