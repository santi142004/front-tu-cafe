import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUpBusiness = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    registered: false
  });

  useEffect(() => {
    if (formData.registered) {
      setTimeout(() => {
        window.location.href = '/loginBusiness';
      }, 2000); // Redirigir después de 2 segundos
    }
  }, [formData.registered]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/business/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Registro de negocio exitoso! Redirigiendo al inicio de sesión.',
          showConfirmButton: false,
          timer: 3000
        });
        setFormData({ ...formData, registered: true });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar el negocio.',
        text: 'Por favor, inténtalo de nuevo.'
      });
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Registrar Negocio</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="businessName" className="boxUS">
          Nombre del negocio:
          <input
            type="text"
            id="businessName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessEmail" className="boxUS">
          Correo electrónico del negocio:
          <input
            type="email"
            id="businessEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessPassword" className="boxUS">
          Contraseña del negocio:
          <input
            type="password"
            id="businessPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Registrar Negocio
        </button>
      </form>
      <div className='registro'>
        ¿Ya tienes una cuenta de negocio?{' '}
        <Link to="/loginBusiness">
          <u><b>Inicia sesión aquí</b></u>
        </Link>
      </div>
    </div>
  );
};

export default SignUpBusiness;
