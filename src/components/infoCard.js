import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col, CardDeck } from 'reactstrap';
import SERVICES from '../shared/services';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    };

    render() {
        return (
          <Card>
            <CardBody>
              <CardImg
                top
                width='100%'
                src='/assets/318x180.svg'
                alt='Card image cap'
              />

              <CardTitle tag='h5'>{this.props.service.name}</CardTitle>
              <CardText>{this.props.service.description}</CardText>
            </CardBody>
          </Card>
        );
    }
}
            
        


export default InfoCard;

