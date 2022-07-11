import React from "react";
import IMAGE from "../IMG/logo.png";
import { Link } from 'react-router-dom';
function Signin() {
    return (
        <div>
            <div className="container bg-white w-25 rounded">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
                </div>
                <div className="name mt-5">
                    <h4>Welcome to Back</h4>
                </div>
                <form class="mt-2">
                    <input type="text" className="form-control m-2 mt-2" placeholder="Email Address"/>
                    <input type="password" className="form-control m-2 " placeholder="password"/>
                    <h3 class="text-danger fs-6 text-end mt-2"><Link to={'/Forgetpass'}>Forget Password?</Link></h3>
                </form>

                <button class="w-100 rounded border-0 p-2 text-white" style={{ backgroundColor: "#EB1D36" }}>Sign in</button>


                <div className="already mt-5">
                    <p className="p-2">You have don't account then create?<Link to={'/Signup'}><a href="#">Sign Up</a></Link></p>
                </div>

            </div>
            
        </div>
    );
}
export default Signin;