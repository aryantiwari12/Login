import React from "react";
import IMAGE from "../IMG/logo.png";
import '../CSS/style.css';
import { Link } from 'react-router-dom';

const Home = () => {

   




    return (
        <div>

            <div className="container bg-white w-50 rounded">

                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
                </div>
                <div className="name mt-2">
                    <h1>Welcome to App</h1>
                </div>
                <div className="phone mt-5" >

                    <Link to={'/mobile'}>
                   
                        <button className="w-75 text-white rounded border-0 p-2"  style={{ backgroundColor: "#EB1D36" }}><i class="fa-solid fa-phone float-start mt-2"></i>Continue with Phone</button>
                    </Link>    
                    
                </div>
                <div className="google mt-2">
                    <button className="w-75 text-white rounded border-0 p-2" style={{ backgroundColor: "#EB4747" }}><i class="fa-brands fa-google float-start mt-2"></i>Continue with Google</button>
                </div>
                <div className="google mt-2">
                    <button className="w-75 text-white rounded border-0 p-2" style={{ backgroundColor: "#1F4690" }}><i class="fa-brands fa-facebook-f float-start mt-2"></i>Continue with Facebook</button>
                </div>
                <div className="already mt-5">
                    <p className="p-2">You have already account?<Link to={'/signin'}><a href="#"> Sign in</a></Link></p>
                </div>
            </div>




        </div>
    );

}
export default Home;