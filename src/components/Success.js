
import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {


    next = (e) => {
        e.preventDefault();
        // process form, send data to api
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Confirm User Details"
                />
                    <h1>
                        Thank you for your submission.
                    </h1>
                    <p>
                        you will get an email with further instructions.
                    </p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    };
}

export default Success;
