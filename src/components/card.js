import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

const Report (handleExpandChange, expand, handleToggle, title, toggleLabel, newV, oldV) => {
  return (
    <Card expanded={expand.expand} onExpandChange={handleExpandChange.handleExpandChange}>
      <CardHeader
        title={title.title}
        subtitle="Campaign Comparison"
        actAsExpander
        showExpandableButton
      />
      <CardText>
        <Toggle
          toggled={expand.expand}
          onToggle={handleToggle.handleToggle}
          labelPosition="right"
          label={toggleLabel}
        />
      </CardText>
      <CardTitle title="Original Campaign" subtitle={oldV} expandable />
      <CardTitle title="Optimized Campaign" subtitle={newV} expandable />
      <CardText expandable>
        `Your optimized AdWords campaign improved by ${(newV - oldV)}%.`
      </CardText>
    </Card>
  );
};

export default Report;
