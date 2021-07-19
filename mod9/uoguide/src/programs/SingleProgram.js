import React from 'react';
import { Link, withRouter } from "react-router-dom";
import p1 from '../assets/img/p1.jpg'
import p2 from '../assets/img/p2.jpg'
import p3 from '../assets/img/p3.jpg'
import p4 from '../assets/img/p4.jpg'
import p5 from '../assets/img/p5.jpg'
import p6 from '../assets/img/p6.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';



class SingleProgram extends React.Component {

  images = [p1, p2, p3, p4, p5, p6];
 
  constructor(props) {
    super(props);
    this.state = {index: this.props.match.params.programId, programs:this.props.programs}
  }

  render() {
    
    let currentProgram = this.state.programs[this.state.index];

    return(
      <div>
        <h2>{currentProgram.name}</h2>
        <div className="row">
          <Container>
            <Row>
              <Col>
                <img src={this.images[currentProgram.index]} fluid />
              </Col>
              <Col>
                <h3>Faculty: {currentProgram.faculty}</h3>
                <p>{currentProgram.longDescription}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="row">
          <Container>
            <Row>
              <Link to="/programs"><Button variant="primary">See all programs</Button></Link>
            </Row>
          </Container>
        </div>
        
      </div>
    );
  }
}

export default withRouter(SingleProgram);