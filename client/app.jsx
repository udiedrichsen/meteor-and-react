import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
        <h1>My App</h1>
        <hr />
        <div>{content}</div>
    </div>
);

export const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
        <MyAwesomeReactComponent/>
    </div>
);
