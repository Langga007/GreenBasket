import { useState, useEffect } from "react";
import { Container, Row, Image, Carousel, Col, ButtonGroup, Button } from "react-bootstrap";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";

export default function UserView({ productsData, fetchData }) {
    document.title = "Products"
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        const getProductCount = () => {
            setProductCount(productsData.length);
        }

        getProductCount()

    }, [productsData])

    return (
        <>
            <Container className="py-5" id="ads">
                <Row>
                    <Col md={3}>
                        <ButtonGroup className="btn-cat-group d-none d-md-block " vertical>
                            <Button className="btn-cat bg-light text-black border-0">Vegetables</Button>
                            <Button className="btn-cat bg-light text-black border-0">Fruits</Button>
                            <Button className="btn-cat bg-light text-black border-0">Dairy</Button>
                            <Button className="btn-cat bg-light text-black border-0">Meat</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={9} >
                        <Carousel id="carousel" className="flex-start">
                            <Carousel.Item id="sale" interval={1000}>
                                <Image className="img" src={"./images/voucher.jpg"} alt="" fluid/>
                            </Carousel.Item>
                            <Carousel.Item id="sale" interval={1000}>
                                <Image className="img" src={"./images/sale.jpg"} alt="" fluid/>
                            </Carousel.Item>
                            <Carousel.Item id="sale" interval={1000}>
                                <Image className="img" src={"./images/shipping.jpg"} alt="" fluid/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <ProductSearch fetchData= {fetchData} productsData = {productsData}/>
        </>
    );
}
