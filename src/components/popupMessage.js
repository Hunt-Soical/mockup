import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

export default class MessageDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }
  static propTypes = {
    message: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    currentStage: PropTypes.node.isRequired,
    stage: PropTypes.node.isRequired
  }
  handleClose() {
    this.setState({ open: false });
    this.props.update();
  }
  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.message}
          actions={actions}
          open={this.props.currentStage === this.props.stage}
        />
      </div>
    );
  }
}
