import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Navigation  from './components/Navbar';
import Hero from './components/Hero';
import InfoCard from './components/infoCard';
import SERVICES from './shared/services';
import Footer from './components/Footer';
import './components/Navbar';
import './components/Hero';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      services: SERVICES
    }
  }

  render() {

    let servicesCards = this.state.services.map(service => {
      return (
        <Container fluid>
          <Row>
            <Col>
              <InfoCard service={service} />
            </Col>
          </Row>
        </Container>
      );
    })

    return (
      <div className='App'>
        <Navigation />
        <Hero />
        <h3 className='text-center'>Our Services</h3>
        <br />
        {servicesCards}
        <Footer />
      </div>
    );
  };
}

export default App;
