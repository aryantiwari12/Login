import React from "react";
import IMAGE from "../IMG/logo.png";
import { useState } from 'react';
import axios from "axios";
function Reset(){

    const [oldpassword,setoldpassword]=useState("");
    const [newpassword,setnewpassword]=useState("");


    const submitdata=()=>{

        axios.post("http://139.59.47.49:4004/api/account/reset/password",{
            token:oldpassword,
            password:newpassword
        }).then((res)=>{
            console.log(res);
        })
    }




   return(
    <div>
        <div className="container bg-white w-25 rounded p-2">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
                </div>
                <h3>Reset your password</h3>
                <form>
                    <div className="mt-2">
                        <input type="text" className="form-control" placeholder="old Password" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)} />
                        <input type="text" className="form-control mt-2" placeholder="new password" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} />
                    </div>
                    <input type="submit" className="w-100 bg-danger mt-2 rounded border-0 text-white p-2" onSubmit={()=>submitdata()}/>
                </form>
        </div>
    </div>
   );
}
export default Reset;