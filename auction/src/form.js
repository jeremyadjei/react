import React, { useEffect,useState} from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A bid was submitted: ' + this.state.value);
        event.preventDefault();
    }

    useEffect(() =>{ console.log(bid) },[bid])

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="Bid Amount" type="text" value={this.state.value} onChange={(e) => {setBid(e.target.value) } } />
                </label>
                <input style={{ marginRight: "1rem" }} type="submit" value="Submit" />
                <input type="submit" value="View Details" />
            </form>
        );
    }
}

export default NameForm;





