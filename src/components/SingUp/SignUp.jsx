import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";


const SignUp = () => {

    const [success, setSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // reser error messege 
        setErrorMessage('');
        setSuccess(false);

        if(password.length <6 ){
            setErrorMessage('Password should be 6 characters of logner');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true);
        })
        .catch(error =>{
            console.log('ERROR', error.message);
            setErrorMessage(error.message);
            setSuccess(false);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
             
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center pt-8 font-bold">Sign Up Now!</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-red-800 text-center">{errorMessage}</p>
                },
                {
                    success && <p className="text-green-700 ml-8 text-xl">Success you Account</p>
                }
            </div>

        </div>
    );
};

export default SignUp;