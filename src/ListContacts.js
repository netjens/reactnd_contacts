import React, {Component} from 'react'

class ListContacts extends Component{
    render(){
        console.log('Props',this.props);
        return (
            <ol className='contact-List'>

            </ol>
        )
    }
}

export default ListContacts