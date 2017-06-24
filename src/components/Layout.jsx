import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <html lang="en">
    <head>
      <title>Group Radio</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired // eslint-disable-line
};

export default Layout;
