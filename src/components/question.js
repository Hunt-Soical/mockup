import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class MyDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.textField = this.textField.bind(this);
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    hintText: PropTypes.string,
    update: PropTypes.func.isRequired,
    currentStage: PropTypes.node.isRequired,
    stage: PropTypes.node.isRequired,
    negButtonLabel: PropTypes.string,
    posButtonLabel: PropTypes.string,
  }
  handleOpen() {
    this.setState({ open: true });
    this.props.update();
  }
  handleClose() {
    this.setState({ open: false });
    this.props.update();
  }
  textField() {
    if (this.props.hintText) {
      return (
        <TextField
          hintText={this.props.hintText}
          floatingLabelText="Insert your URL list here"
          multiLine={true}
          rows={2}
        />
      );
    }
  }
  render() {
    const actions = [
      <FlatButton
        label={this.props.negButtonLabel || "Cancel"}
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.props.posButtonLabel || "Submit"}
        primary
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          open={this.props.currentStage === this.props.stage}
        >
        {this.textField()}
        </Dialog>
      </div>
    );
  }
}
