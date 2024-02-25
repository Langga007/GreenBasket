import { Container, Row, Col } from "react-bootstrap";

const PromoSection = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="py-5">
          <h2 className="d-block display-4 text-center fw-bold">Promos</h2>
        </Row>
        <Row>
          {/* <div className="promo_box rounded-4">
                    <div className="faded"></div>
                    <img alt="shoes background" className="promo_img rounded-top-4" />
                    <Container>
                        <Row className="justify-content-center">
                            <Col sm={9} className="m-5 p-5 text-center">
                                <h1 className="mb-4">Exclusive Discounts for Members</h1>
                                <p className="lead mb-sm-5 px-md-8">The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.</p>
                                <button className="btn btn-dark btn-lg d-flex align-items-center mx-auto">Get your code</button>
                            </Col>
                        </Row>
                    </Container>
                </div> */}

          <Container>
            <Row className="d-flex justify-content-between">
              <Col md={7} className="py-5 border rounded-4 bg-light-subtle shadow">
                <div className="p-5 text-center">
                  <h1 className="mb-4">Exclusive Discounts for Members</h1>
                  <p className="lead mb-sm-5 px-md-8">
                    Subscribe to GreenBasket Elite to unlock various exclusive
                    discounts and unlimited free shipping no minimum spend.
                    Explore other GreenBasket Elite benefits for this limited
                    time promo.
                  </p>
                  <button
                    id="btn-promo"
                    className="btn btn-lg d-flex align-items-center mx-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </Col>
              <Col md={4} className="p-4 border rounded-4 bg-light-subtle shadow">
                <div className="p-5 text-center">
                  <h1 className="mb-4">Latest Deals</h1>
                  <p className="lead mb-sm-5 px-md-8">
                  Subscribe to our newsletter to get updated with us! Receive the latest updates, news, promos and giveaways straight to your email.
                  </p>
                  <div className="d-flex gap-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="default input example"
                  />
                  <button type="button" className="btn btn-dark">
                    Subscribe
                  </button>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default PromoSection;
