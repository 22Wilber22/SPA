import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        // Redirigir al Home después de enviar el formulario
        navigate('/home');
    });

    return (
        <div>
            <form onSubmit={onSubmit} className='form-login'>
                <h1>Bienvenido</h1>

                <label htmlFor="name" id='lb-login'>Ingresa tu usuario: </label><br />
                <input 
                    type="text" 
                    placeholder='Ingresa tu nombre de usuario' 
                    {...register("name", { required: true })}
                />
                {errors.name && <span>Nombre requerido</span>} <br />

                <label htmlFor="pass" id='lb-login'>Ingresa tu password: </label><br />
                <input 
                    type="password" 
                    className='psw-login' 
                    placeholder='Ingresa tu password' 
                    {...register("pass", { required: true })} 
                />
                {errors.pass && <span>Password requerida</span>}<br />

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className='btn btn-success'>Ingresa</button>
                <small>
                    Si no tienes ninguna cuenta creada puedes registrarte dando 
                    <Link to="/registrar" > clic aqui</Link>
                </small>
            </form>
        </div>
    );
}
