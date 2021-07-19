import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Results extends React.Component {

  programsToDisplay = [];

  constructor(props){
    super(props);
    this.state = {preference: this.props.match.params.preference, programs:this.props.programs}
    this.calculateProgramstoDisplay();
  }

  calculateProgramstoDisplay() {
    this.state.programs.forEach(program => {
      if (program.keywords.indexOf(this.state.preference) > -1) {
        this.programsToDisplay.push(program);
      }
    });
  }

  render() {
    return(
      <div>
        <h2>We have found some interesting programs for you!</h2>
        <h3>Showing results for: "{this.state.preference}"</h3>
        <div>
          {this.programsToDisplay.map(program => 
            <div class="box">
              <Card>
                <Card.Header>{program.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{program.faculty}</Card.Title>
                  <Card.Text>{program.longDescription}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            )}
        </div>
        <div>
          <Link to="/assistant"><Button variant="primary">Modify preference</Button></Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Results);