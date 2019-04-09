import React, { Component } from 'react';

class NewRsvp extends Component{
    submitAllData=(e)=>{
        e.preventDefault();
        fetch('/rsvp/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rsvp_person: e.target.rsvp_person.value,
                    rsvp_going: e.target.rsvp_going.value,
                }),
            }

        )
    };


    render(){
        return(
            <div>
                <form onSubmit={this.submitAllData}>
                    <p>
                        <label htmlFor='rsvp_person'>NAME:</label>
                        <input type="text" id='rsvp_person' name='rsvp_person'/>
                    </p>
                    <p>
                        <label htmlFor='rsvp_going'>IS DONE:</label>
                        <input type="text" id='rsvp_going' name='rsvp_going'/>
                    </p>
                    <p>
                        <input type="submit" value='CREATE'/>
                    </p>
                </form>
            </div>
        );
    }
}

export default NewRsvp;