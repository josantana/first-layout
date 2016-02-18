import React from 'react';
import classNames from 'classnames';

class Box extends React.Component {

    render () {

        const props = this.props;

        let classnames = [];

        // Process

        if (props.size) {
            classnames.push('size-' + props.size);
        }

        if (props.align) {
            classnames.push('align-' + props.align);
        }

        if (props.fit) {
            classnames.push('fit');
        }

        // Concat

        classnames = classNames(this.props.className, classnames);

        // Build

        return (
            <div {...props} className={classnames}>{props.children}</div>
        );
    }
};

export default Box;
