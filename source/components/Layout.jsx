import React from 'react';
import classNames from 'classnames';

class Layout extends React.Component {

    render () {

        const props = this.props;

        let classnames = [ 'layout' ];

        // Process

        if (props.orientation) {
            classnames.push('layout-' + props.orientation);
        }

        if (props.reverse) {
            classnames.push('layout-reverse');
        }

        if (props.wrap) {
            classnames.push('layout-wrap');
        }

        if (props.limited) {
            classnames.push('layout-limited');
        }

        if (props.spaced) {
            classnames.push('layout-spaced');
        }

        if (props.surrounded) {
            classnames.push('layout-surrounded');
        }

        // Concat

        classnames = classNames(classnames, this.props.className);

        // Build

        return (
            <div {...props} className={classnames}>{props.children}</div>
        );
    }
};

export default Layout;
