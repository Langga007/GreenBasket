import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FooterSection from "../components/home/FooterSection";

function ContactPage() {
  document.title = "Contact";
  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-4 px-5">
          <h1 className="mb-4">Contact Us</h1>
          <p>
            Thank you for reaching out to GreenBasket! Your feedback, questions,
            and suggestions are important to us. We value the opportunity to
            assist you in any way we can.
          </p>
          <strong>Customer Support:</strong>
          <p>
            If you have any inquiries about our products, orders, or need
            assistance with the app, our customer support team is here to help.
            Please feel free to contact us at [support@greenbasket.com] or call
            our helpline at [your phone number]. We strive to respond promptly
            and ensure your experience with GreenBasket is seamless.
          </p>
          <strong>Feedback and Suggestions:</strong>
          <p>
            Your input is invaluable to us. If you have feedback or suggestions
            on how we can improve our services or if there's something specific
            you'd like to share, please email us at [feedback@greenbasket.com].
            We appreciate your insights as we work continuously to enhance your
            shopping experience.
          </p>
          <p>
            <strong>Address:</strong> 123 Yggdrasil
            Street, Cityville, State, Zip
          </p>
          <p>
            <strong>Email:</strong> info@greenbasket.com
          </p>
          <p>
            <strong>Phone:</strong> 123-456-7890
          </p>
        </Col>
        <Col md={6}>
          <Form className="d-flex flex-column gap-3">
            <Form.Group controlId="formName">
              <Form.Label className="text-uppercase fw-bold">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="text-uppercase fw-bold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className="text-uppercase fw-bold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="text-uppercase">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      </Container>
      <FooterSection/>
</>
  );
}

export default ContactPage;
