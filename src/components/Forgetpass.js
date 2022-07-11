import React from "react";
import IMAGE from "../IMG/logo.png";
function Forgetpass() {
    return (
        <div>
            <div className="container bg-white w-25 rounded">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
                </div>
                <div className="name mt-2">
                    <h4>Forgotten your password</h4>
                </div>
                <div class="text1 mt-2">
                    <input className="form-control mt-2" type="password" placeholder="old password" />
                </div>
            </div>
        </div>
    );
}
export default Forgetpass;