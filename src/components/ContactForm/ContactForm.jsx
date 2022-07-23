import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';



class ContactForm extends Component  {
    
  

    state = {
        name: '',
        number: '',
    };

   handleChange = event => {
            const { name, value } = event.currentTarget;

            this.setState({ [name]: value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
       })
   }


    render() {
        const { name, number } = this.state;

        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {'Name'}
               <input
              type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required/>
                </label>
          <button type="submit">Add contact</button>
        </form>
    )
}


}

export default ContactForm;