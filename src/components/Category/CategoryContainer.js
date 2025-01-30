import { Container, Row } from "react-bootstrap"
import CategoryCard from "./CategoryCard"

import clothe from "../../images/clothe.png"
import cat2 from "../../images/cat2.png"
import labtop from "../../images/labtop.png"
import sale from "../../images/sale.png"
import pic from "../../images/pic.png"

function CategoryContainer() {
    return (
        <Container>
            <div className="admin-content-text mt-2">كل التصنيفات</div>
        <Row className="my-2 d-flex justify-content-between">  
            <CategoryCard   
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={clothe}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={cat2}
            />
        <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={labtop}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={sale}
            />
             <CategoryCard   
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={clothe}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={pic}
            />  
                 <CategoryCard   
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={clothe}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={cat2}
            />
        <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={labtop}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={sale}
            />
             <CategoryCard   
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={clothe}
            />
            <CategoryCard
            title={"اجهزه كهربائيه"}
            background={"#F4DBA5"}
            img={pic}
            />  
        </Row>
        </Container>
    )
}

export default CategoryContainer

