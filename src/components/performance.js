import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

const stats = {
  roi: {
    old: '24%',
    new: '36%'
  },
  ctr: {
    old: '22%',
    new: '76%'
  },
  con: {
    old: '14%',
    new: '56%'
  }
};

class Performance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailable: false,
      title: 'We will provide you the compaign performance 7 days later',
      roiExpand: false,
      ctrExpand: false,
      conExpand: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.displayStatistics = this.displayStatistics.bind(this);
    this.handleRoiToggle = this.handleRoiToggle.bind(this);
    this.handleRoiExpandChange = this.handleRoiExpandChange.bind(this);
    this.handleCtrToggle = this.handleCtrToggle.bind(this);
    this.handleCtrExpandChange = this.handleCtrExpandChange.bind(this);
    this.handleConToggle = this.handleConToggle.bind(this);
    this.handleConExpandChange = this.handleConExpandChange.bind(this);
  }
  handleClose() {
    this.setState({ isAvailable: true });
  }
  handleRoiToggle() {
    this.setState({ roiExpand: !this.state.roiExpand });
  }
  handleRoiExpandChange(expanded) {
    this.setState({ roiExpand: expanded });
  }
  handleConToggle() {
    this.setState({ conExpand: !this.state.conExpand });
  }
  handleConExpandChange(expanded) {
    this.setState({ conExpand: expanded });
  }
  handleCtrToggle() {
    this.setState({ ctrExpand: !this.state.ctrExpand });
  }
  handleCtrExpandChange(expanded) {
    this.setState({ ctrExpand: expanded });
  }
  displayStatistics() {
    if (this.state.isAvailable) {
      return (
        <div>
          <Card expanded={this.state.roiExpand} onExpandChange={this.handleRoiExpandChange}>
            <CardHeader
              title="Return on Investment"
              subtitle="Campaign Comparison"
              actAsExpander
              showExpandableButton
            />
            <CardText>
              <Toggle
                toggled={this.state.roiExpand}
                onToggle={this.handleRoiToggle}
                labelPosition="right"
                label="Toggle ROI Statistics"
              />
            </CardText>
            <CardTitle title="Original Campaign" subtitle={stats.roi.old} expandable />
            <CardTitle title="Optimized Campaign" subtitle={stats.roi.new} expandable />
            <CardText expandable>
              {'Your optimized AdWords campaign improved by 12%.'}
            </CardText>
          </Card>
          <Card expanded={this.state.ctrExpand} onExpandChange={this.handleCtrExpandChange}>
            <CardHeader
              title="Click Through Rate"
              subtitle="Campaign Comparison"
              actAsExpander
              showExpandableButton
            />
            <CardText>
              <Toggle
                toggled={this.state.ctrExpand}
                onToggle={this.handleCtrToggle}
                labelPosition="right"
                label="Toogle CTR Statistics"
              />
            </CardText>
            <CardTitle title="Original Campaign" subtitle={stats.ctr.old} expandable />
            <CardTitle title="Optimized Campaign" subtitle={stats.ctr.new} expandable />
            <CardText expandable>
              {'Your optimized AdWords campaign improved by 54%.'}
            </CardText>
          </Card>
          <Card expanded={this.state.conExpand} onExpandChange={this.handleConExpandChange}>
            <CardHeader
              title="Conversion Rate"
              subtitle="Campaign Comparison"
              actAsExpander
              showExpandableButton
            />
            <CardText>
              <Toggle
                toggled={this.state.conExpand}
                onToggle={this.handleConToggle}
                labelPosition="right"
                label="Toggle Conversion Statistics"
              />
            </CardText>
            <CardTitle title="Original Campaign" subtitle={stats.con.old} expandable />
            <CardTitle title="Optimized Campaign" subtitle={stats.con.new} expandable />
            <CardText expandable>
              {'Your optimized AdWords campaign improved by 42%.'}
            </CardText>
          </Card>
        </div>
      );
    }
    const actions = [
      <FlatButton
        label="Refresh Performance"
        primary
        onClick={this.handleClose}
      />
    ];
    return (
      <Dialog
        title={this.state.title}
        actions={actions}
        open
      />
    );
  }
  render() {
    return (
      <div>
        {this.displayStatistics()}
      </div>
    );
  }
}

export default Performance;
