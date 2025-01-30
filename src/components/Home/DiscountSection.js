import { Col, Container, Row } from "react-bootstrap";
import labtops from "../../images/laptops.png";
function DiscountSection() {
  return (
    <Container>

    <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center ">
      <Col sm="6">
        <div className="discount-title ">
          خصم يصل حتي ٣٠٪ علي اجهزه اللاب توب
        </div>
      </Col>
      <Col sm="6">
        <img src={labtops} alt="" className="discount-img" />
      </Col>
    </Row>
    </Container>
  ); 
}

export default DiscountSection;
