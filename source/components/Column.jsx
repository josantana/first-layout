import React from 'react';
import Box from './Box';

class Column extends React.Component {

    render () {
        return (
            <Box {...this.props} />
        );
    }
};

export default Column;
