import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Usuario registrado:", data);
        navigate('/');
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-register">
                <h1>Crear cuenta</h1>
                
                <div className="form-group">
                    <label htmlFor="name">Nombre y apellido</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 3,
                                message: "El nombre debe tener al menos 3 caracteres"
                            }
                        })}
                        placeholder="Ej: Juan Pérez"
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Correo inválido"
                            }
                        })}
                        placeholder="tucorreo@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: "El nombre de usuario es obligatorio",
                            minLength: {
                                value: 4,
                                message: "El usuario debe tener al menos 4 caracteres"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: "Solo letras, números y guiones bajos"
                            }
                        })}
                        placeholder="Ej: juan_123"
                    />
                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Fecha de nacimiento</label>
                    <input
                        type="date"
                        id="dob"
                        {...register("dob", {
                            required: "La fecha de nacimiento es obligatoria",
                            validate: (value) => {
                                const date = new Date(value);
                                const today = new Date();
                                const age = today.getFullYear() - date.getFullYear();
                                return age >= 13 || "Debes tener al menos 13 años";
                            }
                        })}
                    />
                    {errors.dob && <span className="error-message">{errors.dob.message}</span>}
                </div>

                <button type="submit" className="register-button">
                    Registrarse
                </button>

                <p className="login-link">
                    ¿Ya tienes una cuenta? 
                    <span onClick={() => navigate('/login')} className="link">
                        Iniciar sesión
                    </span>
                </p>
            </form>
        </div>
    );
}