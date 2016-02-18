import React from 'react';
import Box from './Box';

class Row extends React.Component {

    render () {
        return (
            <Box {...this.props} />
        );
    }
};

export default Row;
