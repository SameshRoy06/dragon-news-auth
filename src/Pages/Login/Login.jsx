
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from 'react';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('hooooooo', location)

    const handleLogin =  (e) => {  
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

       signIn(email, password)
       .then(res=>{

        navigate(location?.state ?location.state : '/');

        console.log(res.user)
        .then(error=>{
            console.error(error)
        })
       })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center mt-8">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an Account <Link className="text-blue-600 fo" to={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;