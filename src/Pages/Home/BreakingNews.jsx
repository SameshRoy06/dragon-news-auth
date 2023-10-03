import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover ={true} speed={50}>
                I can be a React component, multiple React components, or just some text.
                <Link className='mr-12' to ={'/'}> can be a React component, multiple React components, or just some text.....
                </Link>
                <Link className='mr-12' to ={'/'}> can be a React component, multiple React components, or just some text.....
                </Link>
                <Link className='mr-12' to ={'/'}> can be a React component, multiple React components, or just some text.....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;