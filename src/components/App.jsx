import { Component } from "react";
import ContactForm from "./ContactForm";
import { nanoid } from 'nanoid';


export class App extends Component {
 state = {
  contacts: [],
  name: ''
 }
  
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();
    

  }

  
  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </>
    )
  }
};
