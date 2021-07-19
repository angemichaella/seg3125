import React from 'react';
import p1 from '../assets/img/p1.jpg'
import p2 from '../assets/img/p2.jpg'
import p3 from '../assets/img/p3.jpg'
import p4 from '../assets/img/p4.jpg'
import p5 from '../assets/img/p5.jpg'
import p6 from '../assets/img/p6.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from "react-router-dom";


class Programs extends React.Component {

  
  images = [p1, p2, p3, p4, p5, p6];

  constructor(props) {
    super(props);
    this.state = {programs: this.props.programs}
    console.log("lang: ", this.props.lang);
  }

  render() {
    return (
      <div>
        <h2>You can explore different programs here by clicking on the blue button to see more details about each program.</h2>
        <div className="grid">
          {this.state.programs.map(program => 
            <div className = "box">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.images[program.imageLink]}/>
                <Card.Body>
                  <Card.Title>{program.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{program.faculty}</Card.Subtitle>
                  <Card.Text>{program.shortDescription}</Card.Text>
                  <Link to={`/program/${program.index}`}><Button variant="primary">Go to program page</Button></Link>
                </Card.Body>
              </Card>
            </div>
            )}
        </div>
      </div>
    );
  }
}

export default withRouter(Programs);