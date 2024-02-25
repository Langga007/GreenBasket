import { Form, Button, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddProduct = ({ fetchData }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState(0);

    const createProduct = (e) => {
        e.preventDefault();

        let token = localStorage.getItem("token");

        fetch(`${process.env.REACT_APP_API_BASE_URL}/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                category: category,
                description: description,
                price: price,
                images: images
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.message) {
                    Swal.fire({
                        icon: "success",
                        title: "Product Added",
                        text: data.message,
                    });
                    fetchData();
                    setImages([]);
                    setName("");
                    setQuantity("");
                    setCategory("");
                    setDescription("");
                    setPrice("");
                    setShowModal(false);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Unsuccessful Product Creation",
                        text: data.error,
                    });
                }
            });
    };

    const convertToBase64 = (e) => {
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);

            reader.onload = () => {
                setImages(prevImages => [...prevImages, reader.result]);
            };

            reader.onerror = (error) => {
                console.error('Error reading file:', error);
            };
        }
    };
    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };
    return (
        user.isAdmin === true ?
            <>
                <div className="d-flex justify-content-end">
                    <Button variant="success" onClick={() => setShowModal(true)} className="my-3">
                        <FontAwesomeIcon icon="fa-solid fa-circle-plus" /> Add New Product
                    </Button>

                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => createProduct(e)}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => { setName(e.target.value) }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Quantity:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Quantity" required value={quantity} onChange={e => { setQuantity(e.target.value) }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category" required value={category} onChange={e => { setCategory(e.target.value) }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => { setDescription(e.target.value) }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price:</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => { setPrice(e.target.value) }} />
                            </Form.Group>
                            <div>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <Form.Group>
                                            <Form.Label>{`Image ${index + 1}:`}</Form.Label>
                                            <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                            <Button variant="danger" onClick={() => removeImage(index)}>Remove</Button>
                                        </Form.Group>
                                    </div>
                                ))}

                                <Form.Group>
                                    <Form.Label>Choose Images:</Form.Label>
                                    <Form.Control
                                        id="custom-files"
                                        type="file"
                                        label="Choose Images"
                                        accept="image/*"
                                        multiple
                                        onChange={(e) => convertToBase64(e)}
                                    />
                                </Form.Group>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={createProduct}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* <h1 className="my-5 text-center">Add Product</h1>
                <Form onSubmit={e => createProduct(e)}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => { setName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => { setDescription(e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => { setPrice(e.target.value) }} />
                    </Form.Group>
                    <div>
                        {images.map((image, index) => (
                            <div key={index}>
                                <Form.Group>
                                    <Form.Label>{`Image ${index + 1}:`}</Form.Label>
                                    <img src={image} alt={`Image ${index + 1}`} />
                                    <Button variant="danger" onClick={() => removeImage(index)}>Remove</Button>
                                </Form.Group>
                            </div>
                        ))}

                        <Form.Group>
                            <Form.Label>Choose Images:</Form.Label>
                            <Form.Control
                                id="custom-files"
                                type="file"
                                label="Choose Images"
                                accept="image/*"
                                multiple
                                onChange={(e) => convertToBase64(e)}
                            />
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit" className="my-5">Submit</Button>
                </Form> */}

            </>
            :
            <Navigate to="/" />

    );
}

export default AddProduct;