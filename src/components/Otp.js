import React from "react";
import IMAGE1 from "../IMG/logo.png";
const Otp = () => {
    return (
        <div>
            <div className="container bg-white w-25 rounded">
                <div className="img2 ">
                    <img src={IMAGE1} alt="" className="mt-2" />
                </div>
                <div className="textdata mt-2">
                    <h3><i class="fa-solid fa-arrow-left-long float-start"></i>Confirm your number</h3>
                </div>
                <div className="phonecode mt-5">
                    <h4>Enter the code just send to<br/>
                        <p>+91:</p>
                    </h4>
                </div>
                <div class="box">
                    <input type="text" class="text-center" style={{ height: "80px", width: "80px" }}/>
                    <input type="text" class="text-center m-2" style={{ height: "80px", width: "80px" }}/>
                    <input type="text" class="text-center m-2" style={{ height: "80px", width: "80px" }}/>
                    <input type="text" class="text-center" style={{ height: "80px", width: "80px" }}/>
                </div>
                <div class="textdata mt-2">
                    <p>Didn't get text?<a href="#">Send again</a></p>
                </div>
            </div>
        </div>
    );
}
export default Otp;