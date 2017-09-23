import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'



class App extends Component {

  state = {
    screen: 'list',
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  navigateToCreate = () => {
    this.setState({screen: 'create'})
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}
          onNavigate={this.navigateToCreate} />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />)}
      </div>


    )
  }
}

export default App;
