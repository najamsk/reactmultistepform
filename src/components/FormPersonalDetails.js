import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {


    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values, handleChange} = this.props;

        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Enter User Details"
                    />
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}/> <br/>

                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="city"
                        onChange={handleChange('city')}
                        defaultValue={values.city}/> <br/>

                    <TextField
                        hintText="Enter your bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}/> <br/>

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                    onClick={this.next}
                    />
                    <RaisedButton
                        label="Previous"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    };
}
const styles = {
    button: {
        margin: 15
    }
};
export default FormPersonalDetails;
