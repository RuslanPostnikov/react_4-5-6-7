import React from "react";
import classNames from 'classnames';

class Alert extends React.Component {
    TYPES = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    render() {
        const { type, text } = this.props;
        const typeIsValid = this.TYPES.find(t => t === type);
        const alertClass = classNames([
            'alert',
            typeIsValid ? `alert-${type}` : null
        ]);
        return (
            <div className={alertClass} role="alert">{text}</div>
        );
    }
}

export default Alert;