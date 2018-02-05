import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import List from '../components/selectableCampaigns';
import InteractiveDialog from '../components/question';
import MessageDialog from '../components/popupMessage';
import PerformanceReport from '../components/performance';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1
    };
    this.content = this.content.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }
  updateProgress() {
    this.setState({
      stage: this.state.stage + 1
    });
  }
  content() {
    switch (this.state.stage) {
      case 1:
        return (<List update={this.updateProgress} />);
      case 2: {
        const title = 'Any Company Website you want us to Consider?';
        const hintText = 'Please insert comma seperated url e.g. abc.com,efg.com';
        return (
          <InteractiveDialog
            update={this.updateProgress}
            title={title}
            hintText={hintText}
            currentStage={this.state.stage}
            stage={2}
          />);
      }
      case 3: {
        const title = 'Any Facebook Pages you want us to Consider?';
        const hintText = 'Please insert comma seperated url e.g. abc.com,efg.com';
        return (
          <InteractiveDialog
            update={this.updateProgress}
            title={title}
            hintText={hintText}
            currentStage={this.state.stage}
            stage={3}
          />);
      }
      case 4: {
        const title = 'Any Competitor Websites you want us to Consider?';
        const hintText = 'Please insert comma seperated url e.g. abc.com,efg.com';
        return (
          <InteractiveDialog
            update={this.updateProgress}
            title={title}
            hintText={hintText}
            currentStage={this.state.stage}
            stage={4}
          />);
      }
      case 5: {
        const message = 'Analysis is in progress. This might take 30 minutes; '
                      + 'we will notify you to come back once the analysis is complete.';
        return (
          <MessageDialog
            update={this.updateProgress}
            message={message}
            currentStage={this.state.stage}
            stage={5}
          />);
      }
      case 6: {
        const message = 'Optimization is Completed. We have created a optimized campaign '
                      + 'called Campaign 2_optimized for your selected campaign - Campaign 2. '
                      + 'Be aware that the campaign will become active once you accept.';
        return (
          <InteractiveDialog
            update={this.updateProgress}
            title={message}
            currentStage={this.state.stage}
            negButtonLabel="Decline"
            posButtonLabel="Accept"
            stage={6}
          />);
      }
      default:
        return (<PerformanceReport />);
    }
  }
  render() {
    return (
      <div>
        <br />
        <LinearProgress mode="determinate" value={(this.state.stage / 7) * 100} />
        {this.content()}
      </div>
    );
  }
}

export default Main;
