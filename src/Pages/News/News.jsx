import { useParams } from "react-router-dom";
import Haeder from "../Shared/Header/Haeder";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();

    return (
        
        <div>
            <Haeder></Haeder>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    {id}
                </div>


                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;