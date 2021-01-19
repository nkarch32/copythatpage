import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function Footer() {
    return (
      <Container>
        <Row>
          <Col className='md-6 text-center'>
            <footer className='siteFooter'>
              <a
                className='btn btn-social-icon btn-instagram text-white'
                href='http://instagram.com/'
              >
                <i className='fa fa-instagram' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-facebook text-white'
                href='http://www.facebook.com/'
              >
                <i className='fa fa-facebook' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-twitter text-white'
                href='http://twitter.com/'
              >
                <i className='fa fa-twitter' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-google text-white'
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube' />
              </a>
              
              <br /> <h7 text-white className='footer-copyright text-center py-3'>
                Made with <i className='fa fa-heart' /> in Zanesville,
                Ohio
              </h7>
            </footer>
          </Col>
        </Row>
      </Container>
    );

}

export default Footer;