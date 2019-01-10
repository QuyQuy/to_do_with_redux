import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux'
import {addNewItem} from '../../actions'
import { withRouter } from 'react-router-dom'

class AdditemForm extends Component {

    renderInput(props){
        console.log('render input args:', props);
        return (
            <div className={`col ${props.size || 's12'}`}>
                <div className='input-field'>
                    <input {...props.input} type='text/' autoComplete='off'/>
                    <label htmlFor={props.id}>{props.label}</label>
                </div>
                <p className='red-text text-darken-2'>{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    handleAddItem = async (values) => {
        console.log('add item form values:',values);
         await this.props.addNewItem(values);
        this.props.reset();
        this.props.history.push('/')
    }

    render() {
        console.log('add item form props:', this.props);
        const { handleSubmit, reset } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleAddItem)}>
                <div className='row'>
                    <Field size='s12 m8 offset-m2' name='title' component={this.renderInput} id='title' label='Title'/>
                </div>
                <div className='row'>
                    <Field size='s12 m8 offset-m2' name='details' component={this.renderInput} id='details' label='Details'/>
                </div>

                <div className='row'>
                    <div className='col s6 center'>
                        <button onClick={reset} type='button' className='btn grey darken-2'> reset</button>
                    </div>
                    <div className='col s6 center'>
                        <button className='btn grey darken-2'> Add Item</button>
                    </div>

                </div>
            </form>
        )
    }

}
function validate(values) {
    const {title, details} = values;
    const errors = {};
    if(!title) {
        errors.title = 'please enter a title;'
    }
    if(!details) {
        errors.details = 'please enter some details';
    }
    return errors;
}

function mapStateToProps(state) {
    console.log('state:', state);
    return {}
}

AdditemForm = connect(mapStateToProps, {
    addNewItem: addNewItem
 })(withRouter(AdditemForm));

export default reduxForm({
    form: 'add-item-form',
    validate: validate,
})(AdditemForm);

