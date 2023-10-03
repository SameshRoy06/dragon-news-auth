import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import moment from 'moment';
import { BsBookmark } from 'react-icons/bs';
import { BsFillShareFill } from 'react-icons/bs';
import Haeder from '../../Pages/Shared/Header/Haeder';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import BreakingNews from '../../Pages/Home/BreakingNews';


const Home = () => {
    return (
        <div>
            <Haeder></Haeder>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 border">
                <div><LeftSideNav></LeftSideNav></div>



                <div className="col-span-2 border"><h2 className="text-4xl p-4 mt-1 ">Dragon News Home</h2>
                    <div className="flex justify-between p-6">
                        <div className="flex">
                            <img className="w-12 rounded-full" src="/src/assets/user.png" alt="" />
                            <div className="ml-4">
                                <p>Awlad Hossain</p>
                                <p className="text-xl p-1">{moment([2012, 0, 31]).month(1).format("YYYY-MM-DD")}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <BsBookmark></BsBookmark>
                            <BsFillShareFill></BsFillShareFill>

                        </div>
                    </div>





                </div>










                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;
