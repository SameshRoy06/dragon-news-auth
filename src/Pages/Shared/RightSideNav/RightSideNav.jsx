
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import { BsInstagram } from 'react-icons/bs';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                   Login Google
                </button>
                <button className="btn btn-outline w-full">
                   <SiGithub></SiGithub>
                   Login Github
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-2xl mb-4">Find Us On</h2>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex p-4 text-lg items-center border-x rounded-t-lg' href="">
                    <RxTwitterLogo className='mr-3'></RxTwitterLogo>
                    Twitter
                </a>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href="">
                    <BsInstagram className='mr-3'></BsInstagram>
                    Instagram
                </a>
            </div>

            {/* q zone  */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl">Q Zone </h2>
               <img src="/src/assets/qZone1.png" alt="" />
               <img src="/src/assets/qZone2.png" alt="" />
               <img src="/src/assets/qZone3.png" alt="" />
            </div>


        </div>
    );
};

export default RightSideNav;