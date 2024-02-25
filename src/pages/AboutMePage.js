import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterSection from "../components/home/FooterSection";

function AboutMePage() {
  document.title = "About Us";
  const date = new Date();
    let year = date.getFullYear();
  return (
    <>
    <Container className="mt-5">
      <Row>
        {/* <Col md={4} className="d-flex justify-content-center align-items-center">
          <Image src="https://via.placeholder.com/150" roundedCircle />
        </Col> */}
        <Col md={12}>
          <div className="text-center text-md-start">
            <h1 className="mb-4">About GreenBasket</h1>
            <p>
              <p>
                Welcome to GreenBasket, where grocery shopping meets
                sustainability and convenience.
              </p>
              At GreenBasket, we believe that every choice we make has an
              impact, and that includes the food we bring into our homes. Our
              platform is not just an ordinary grocery e-commerce app; it's a
              commitment to a healthier lifestyle, a sustainable future, and a
              thriving community.
            </p>
            <p>
              Why Choose GreenBasket:
              <ul>
                <li>
                  Freshness Guaranteed: We source the freshest produce directly
                  from local farmers and trusted suppliers, ensuring that every
                  item in your basket is of the highest quality.
                </li>
                <li>
                  Sustainability at Heart: We are passionate about the
                  environment. GreenBasket is committed to reducing its carbon
                  footprint by promoting eco-friendly packaging, supporting
                  local and sustainable practices, and minimizing food waste.
                </li>
                <li>
                  Community Connection: GreenBasket is more than just a
                  marketplace. It's a community of like-minded individuals who
                  share a passion for healthy living and sustainable choices.
                  Connect with local producers, participate in events, and be
                  part of a growing movement towards a greener lifestyle.
                </li>
                <li>
                  Convenience Redefined: Say goodbye to long lines and heavy
                  bags. With our user-friendly app, you can shop for your
                  groceries from the comfort of your home and have them
                  delivered straight to your doorstep.
                </li>
                <li>
                  Personalized Experience: Tailor your shopping experience with
                  personalized recommendations based on your preferences.
                  Discover new, healthy options that align with your lifestyle.
                </li>
              </ul>
              Join us on this journey towards a greener, healthier, and more
              connected world. At GreenBasket, we're not just delivering
              groceries; we're delivering a vision of a better tomorrow—one
              basket at a time.
            </p>
            <h2 className="my-3">Mission</h2>
            <p className="mb-5">
            "At GreenBasket, our mission is to redefine the grocery shopping experience by providing a convenient, sustainable, and community-driven platform. We aim to empower our customers to make healthier choices for themselves and the planet while supporting local producers and reducing environmental impact. Through innovation and commitment, we strive to make fresh, high-quality groceries accessible to every doorstep, fostering a healthier and more sustainable future."
            </p>
            <h2 className="my-3">Vision</h2>
            <p className="mb-5">
            "Our vision at GreenBasket is to create a world where grocery shopping is not just a task but an enriching experience. We envision a platform that seamlessly connects consumers with local farmers and producers, promoting a circular economy and reducing food waste. By leveraging technology, sustainability, and community engagement, we aspire to be the preferred choice for individuals and families seeking fresh, ethically sourced, and eco-friendly groceries. Our commitment extends beyond commerce, aiming to build a greener and more connected world for generations to come."
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <FooterSection />
     </>
  );
}

export default AboutMePage;
