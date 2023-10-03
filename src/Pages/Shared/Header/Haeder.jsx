
import moment from 'moment';
const Haeder = () => {
    return (
        <div className="text-center mt-4">
            <img className='mx-auto p-2' src="/src/assets/logo.png" alt="" />
            <p className='p-1'>Journalism Without Fear or Favour</p>
            <p className="text-xl p-1">{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Haeder;