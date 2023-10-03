import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import moment from 'moment';
import { BsCalendarDay } from 'react-icons/bs';


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <div className="space-y-6 p-4">
            <h2 className="text-2xl">All Categories{categories.length}</h2>
            <span className="mb-2"> <hr /></span>
            {
                categories.map(category => <Link className=" block ma-4 text-xl font-semibold "
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
            <div className='p-4 space-y-3 mb-6'>
                <div>
                    <img src="/src/assets/1.png" alt="" />
                    <p className="mt-4 text-1xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between p-2">
                        <h2>Sports</h2>
                        <BsCalendarDay className=" mt-1 ml-2"></BsCalendarDay>
                        <p>{moment().format("dddd d YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <div>
                    <img src="/src/assets/2.png" alt="" />
                    <p className="mt-4 text-1xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between p-2">
                        <h2>Sports</h2>
                        <BsCalendarDay className=" mt-1 ml-2"></BsCalendarDay>
                        <p>{moment().format("dddd d YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <div>
                    <img src="/src/assets/3.png" alt="" />
                    <p className="mt-4 text-1xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between p-2">
                        <h2>Sports</h2>
                        <BsCalendarDay className=" mt-1 ml-2"></BsCalendarDay>
                        <p>{moment().format("dddd d YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeftSideNav;