import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Register(){
    const [name, SetName] = useState('');
    const [valor, SetValor] = useState('');

   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            valor,
        };
try {
      const response = await api.post('cadastrar',data);

      alert('sucess');
    }catch(err){
        alert('erro');
    }

}

    return (
        <div className="register-container">
            <div className="content">
                <section>
                        <h1>Register</h1>
                        <p> This is It </p>
                    <form onSubmit={handleRegister}>
                        <input placeholder="name"
                            value={name}
                            
                            onChange={e=> SetName(e.target.value)}
                        />
                        <input placeholder="valor" 
                                value={valor}
                               
                                onChange={e=> SetValor(e.target.value)}
                        />

                        <button className="button" type="submit">Register</button>
                    </form>

                </section>
            </div>
        </div>
    );
}