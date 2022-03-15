import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { primary: false};
    }

    onChangeClass = (e) => {
         const { primary } = this.state
        this.setState({ primary: !primary });
    };

    render() {
        const buttonClass = classNames([
            'btn btn-secondary',
            this.state.primary ? 'active' : null,
        ]);
        return (
            <div className="btn-group" role="group"
                 onClick={this.onChangeClass}>
                <button type="button" className={buttonClass}>Left</button>
                <button type="button" className={buttonClass}>Right</button>
            </div>
        );
    }
}

export default BtnGroup;