import CategoryContainer from "../../components/Category/CategoryContainer"
import Pagination from "../../components/Utility/Pagination"

function AllCategoryPage() {
    return (
        <div  style={{minHeight : '570px'}}>
        <CategoryContainer />
        <Pagination />
        </div>
    )
}

export default AllCategoryPage
