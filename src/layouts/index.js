import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Layout = ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '1.25rem 1rem' }}>
    <MuiThemeProvider>
      <div>
        <AppBar
          title="AdWords Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {children()}
      </div>
    </MuiThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
