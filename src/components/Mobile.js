import React from "react";
import IMAGE1 from "../IMG/logo.png";
import { Link } from 'react-router-dom';

const Mobile = () => {
    return (
        <div>
            <div className="container bg-white w-25 rounded">
                <div className="img2 ">
                    <img src={IMAGE1} alt="" className="mt-2" />
                </div>
                <div className="Signuppage mt-2">
                    <h4>Sign up</h4>
                </div>
                <div className="phonenumber">
                    <form>
                        <div className="">

                            <select class="form-control">
                                <option>Country/Region</option>
                                <option>India(+91)</option>

                            </select>
                            <input class="form-control" type="tel" placeholder="Mobile Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

                        </div>
                    </form>
                </div>
                <div className="continue mt-5">
                    <Link to={'/otp'}>
                        <button class="w-100 rounded border-0 p-2 text-white" style={{ backgroundColor: "#EB1D36" }}>Continue</button>
                    </Link>
                </div>
                <div className="already mt-5">
                    <p className="p-2">You have don't account then create?<Link to={'/Signup'}><a href="#">Sign Up</a></Link></p>
                </div>
               
            </div>
        </div>
    );
}
export default Mobile;