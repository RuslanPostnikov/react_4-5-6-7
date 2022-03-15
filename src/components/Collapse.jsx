import React from "react";
import classNames from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: this.props.opened };
    }

    toggleText = () => {
        const { isOpened } = this.state;
        this.setState({ isOpened: !isOpened });
    };


    render() {
        const { text } = this.props;
        const { isOpened } = this.state;
        const collapseClass = classNames('collapse', {'show': isOpened});

        return (
            <div>
                <p onClick={this.toggleText}>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={isOpened}>Link with href</a>
                </p>
                <div className={collapseClass}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }

}

export default Collapse;
