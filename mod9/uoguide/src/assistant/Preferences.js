import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, withRouter } from "react-router-dom";

class Preferences extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {preference: ""};
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(e) {
    this.setState({preference: e.target.value});
  }

  render() {
    return(
      <div>
        <h2>Nice! Now you are going to be able to select which type of programs you like the most!</h2>
        <h5>Choose your preferences for programs. You can always come back and modify your preferences</h5>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="userPreference">
              <Form.Check type="radio" label="Arts" name="arts" value="arts" onChange={this.handleCheck}/>
              <Form.Check type="radio" label="Sciences" name="arts" value="sciences" onChange={this.handleCheck}/>
            </Form.Group>
            <Link to={`/results/${this.state.preference}`}>
              <Button variant="primary" type="submit">
                View possible program choices
              </Button>
            </Link>
        </Form>
        </div>
      </div>
    ); 
  }
}

export default Preferences;