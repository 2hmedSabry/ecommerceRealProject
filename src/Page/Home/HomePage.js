import Slider from "../../components/Home/Slider"
import HomeCategory from "../../components/Home/HomeCategory"
import CardProductsContainer from "../../components/Products/CardProductsContainer"
import DiscountSection from "../../components/Home/DiscountSection"
import BrandFeatured from "../../components/Brand/BrandFeatured."

function HomePage() {
    return (
        <div className="font" style={{minHeight : '670px'}}>
            <Slider />
            <HomeCategory />
            <CardProductsContainer title={"الاكثر مبيعا"} btntitle={"المزيد"} pathText={'/products'} />
            <DiscountSection /> 
            <CardProductsContainer title={"احدث الازياء"} btntitle={"المزيد"} pathText={'/products'}/>
            <BrandFeatured title={'اشهر الماركات'} btntitle={'المزيد'}/>
        </div>
    )
}

export default HomePage
 