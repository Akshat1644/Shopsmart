import React, { useState } from 'react';
import './shop.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./Images/image-1.png";

function Shop() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='shop'>
            <Link to="/">
                <img
                    className="shop__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div className='shop__container'>
                <h1>Hello,Welcome to your shop</h1>
                <h2>Create your shop here</h2>

                <form>

                    <h5>Name of the shop</h5>
                    <input type="text" />

                    <h5>Location of the shop</h5>
                    <input type="text" />

                    <h5>Category of shop</h5>
                    <input type="text" />

                    <h5>Shop owner name</h5>
                    <input type="text" />

                    <h5>Pincode</h5>
                    <input type="number" />

                    <button type='submit' onClick={signIn} className='shop__signInButton'>Sign in to your shop</button>
                </form>

                <p>
                    By signing-in your shop is registered.
                </p>

                <button onClick={register} className='shop__registerButton'>Create Your Shop</button>
            </div>
        </div>
    )
}

export default Shop;