import { Container, Row } from "react-bootstrap"
import SubTitle from "../Utility/SubTitle"
import BrandCard from "./BrandCard"

import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"

 function BrandFeatured({title, btntitle}) {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle} pathText={'/allbrand'}/>
            <Row className='my-2 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2}/>
                <BrandCard img={brand3}/>
            </Row>
        </Container>
    )
 }
 
 export default BrandFeatured
 