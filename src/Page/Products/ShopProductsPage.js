
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCountResult from "../../components/Utility/SearchCountResult";
import SideFilter from "../../components/Utility/SideFilter";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utility/Pagination";

function ShopProductsPage({ title, btntitle, pathText }) {
  return (
    <div style={{ minHeight: "570px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={"400 نتيجه بحث"} />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer title={""} btntitle={""} />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}

export default ShopProductsPage;
