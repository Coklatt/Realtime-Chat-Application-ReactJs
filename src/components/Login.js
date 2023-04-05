import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../firebase';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2> Welcome to MyChat! </h2>
                <div
                    className="login-button google"
                    onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br /> <br />
                <div
                    className="login-button facebook"
                    onClick={() => signInWithPopup(auth, new FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h4>Design by Alan Binu 💝</h4>
            </div>
        </div>
    );
};

export default Login;
