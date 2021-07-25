import React from 'react';
import './Tweetbox.css';
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetBox">
            
            <form>

                <div className="tweetBox__input">

                <Avatar src="https://lh3.googleusercontent.com/proxy/oQcBYm3EnnYVFhctP_s6inTxwEnj4k86acUF3WWPEpokuggC-DX-w53gv_kBNL2Eq9FjfG361uIXveOouUbMmPdAajuueVR1hXAMxjbPkXcd3r964hYPdg" />
                
                <input placeholder="Whats happening?" />

                </div>

                <input className="tweetBox__imageInput" placeholder="Enter image URL" />

                <Button className="tweetBox__tweetButton">Tweet</Button>

            </form>

        </div>
    )
}

export default Tweetbox
