import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { primary: false};
    }

    onChangeClass = () => {
        this.setState(({ primary }) => ({ primary: !primary }));
    };

    render() {
        const buttonClass = classNames([
            'btn btn-secondary',
            this.state.primary ? 'active' : null
        ]);
        return (
            <div className="btn-group" role="group">
                <button type="button" className={buttonClass}
                        onClick={this.onChangeClass}>Left</button>
                <button type="button" className={buttonClass}>Right</button>
            </div>
        );
    }
}

export default BtnGroup;