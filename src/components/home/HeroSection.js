import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import basket from "../../images/hero-image.png";

const HeroSection = () => {
  return (
    <>
        <Container id="hero" className="my-5 d-flex flex-column gap-5">
          {/* HERO SECTION */}
          <Row className="py-5">
            <Col md={7} className="d-flex flex-column justify-content-center align-items-start gap-3">
              <p className="display-3 fw-semibold">Nature's Grocery Store at Your Doorstep</p>
              <p className="fs-4">Nature's grocery experience straight to your doorstep. Fresh produce on cheap prices, and a connection between you and the earth.</p>
              <Link to="/products" type="button" className="p-3 btn btn-dark rounded-4">Shop now</Link>
            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-center">
              <img src={basket} alt="shoe" className="hero_img" />
            </Col>
          </Row>
        </Container>

        <Container id="policy" className="p-5" fluid>
          <Row className="py-5 d-flex flex-column flex-md-row gap-5 gap-md-0">
            <Col md={3}>
              <div className="d-flex justify-content-start align-items-center gap-2 px-2">
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-seedling" className="p-2 display-3 primary rounded" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h4>Farm-Fresh</h4>
                  <small>Handpicked by local farmers</small>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-start align-items-center gap-2 px-2">
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-shield-halved" className=" p-2 display-3 primary rounded" />
                </div>
                <div className="d-flex flex-column justify-content-center" >
                  <h4>Secure Payment</h4>
                  <small>Safe online transactions</small>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-start align-items-center gap-2 px-2">
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-truck-fast" className="p-2 display-3 primary rounded" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h4>Fast Delivery</h4>
                  <small>Delivers on time</small>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-start align-items-center gap-2 px-2">
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-tags" className="p-2 display-3 primary rounded" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h4>Affordable Prices</h4>
                  <small>Low Price for quality products</small>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
    </>
  )
}

export default HeroSection;