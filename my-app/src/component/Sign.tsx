import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sign() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!isSignIn && !formData.name) newErrors.name = 'Name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (isSignIn) {
        // Sign In logic
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (storedUser.email === formData.email && storedUser.password === formData.password) {
          toast.success('Welcome back! Sign In Successful!');
          setTimeout(() => {
            navigate('/');
          }, 2000); // Show the toast for 2 seconds before navigating
        } else {
          toast.error('Invalid credentials');
        }
      } else {
        // Sign Up logic
        localStorage.setItem('user', JSON.stringify(formData));
        toast.success('Welcome! Sign Up Successful!');
        setTimeout(() => {
          navigate('/');
        }, 2000); // Show the toast for 2 seconds before navigating
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mt-20 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Form Section */}
          <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            <h2 className="text-center text-gray-800 text-3xl mb-6">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {!isSignIn && (
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-lg">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`p-3 border rounded-md text-lg w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <div className="text-red-500 text-lg">{errors.name}</div>}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 border rounded-md text-lg w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <div className="text-red-500 text-lg">{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 text-lg">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`p-3 border rounded-md text-lg w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.password && <div className="text-red-500 text-lg">{errors.password}</div>}
              </div>
              <button
                type="submit"
                className="bg-indigo-700 text-white py-3 px-6 rounded-md hover:bg-gray-700 text-lg"
              >
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <div className="flex justify-between mt-6">
              <button className="flex items-center bg-indigo-700 text-white py-3 px-6 rounded-md hover:bg-gray-700">
                <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
                Facebook
              </button>
              <button className="flex items-center bg-indigo-700 text-white py-3 px-6 rounded-md hover:bg-gray-700">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                X
              </button>
            </div>
            <p
              onClick={toggleForm}
              className="text-center text-gray-800 mt-6 cursor-pointer hover:underline text-lg"
            >
              {isSignIn ? 'Don’t have an account? Sign Up' : 'Already have an account? Sign In'}
            </p>
          </div>

          {/* Product Builder Section */}
          <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-center text-indigo-800 text-3xl mb-6">Product Builder</h2>
            <p className="text-gray-700 text-lg">
              Our Product Builder allows you to create customized products easily. With a user-friendly interface, you can choose from a variety of options and see your product come to life. Whether you're looking to build a unique item for personal use or for business, our tool offers flexibility and precision.
            </p>
          </div>
        </div>
      </div>

      

      <ToastContainer />
    </div>
  );
}
