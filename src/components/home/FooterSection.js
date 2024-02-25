import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Container className="mt-5" fluid>
        <Row id="footer" className="p-3 px-5 pt-4 border">
          <Col md={6}>
            <span id="first-footer">Green</span>
            <span id="second-footer">Basket</span>
            <h5>Nature's Grocery Store at Your Doorstep</h5>
            <p className="text-secondary">&#169; {year} GreenBasket Inc.</p>
          </Col>
          <Col md={6} id="socmed" className="d-flex justify-content-center">
            <div className="d-flex gap-5 gap-md-4 fs-2">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-square-x-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="d-flex gap-2 gap-md-5 pt-3 text-secondary">
              <p>Terms of Service</p>
              <p>|</p>
              <p>Privacy Policy</p>
              <p>|</p>
              <p>Cookies</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterSection;
