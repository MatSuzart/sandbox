import React from 'react';



import './styles.css';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                        <h1>Register</h1>
                        <p> This is It </p>
                    <form>
                        <input placeholder="" />
                        <input placeholder="" />
                        <input placeholder="" />

                        <button className="button" type="submit">Register</button>
                    </form>

                </section>
            </div>
        </div>
    );
}