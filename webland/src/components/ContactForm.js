import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ContactForm.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string()
    .email('Please fill in a valid email format')
    .required('Email is required'),
  phone: yup.string()
    .matches(/^\d{10}$/, 'Please fill in a valid phone number format')
    .required('Phone number is required'),
  message: yup.string().required('Message is required')
});

const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
    // Implement actual form submission logic
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label>Name*</label>
            <input 
              {...register('name')}
              placeholder="Your Name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input 
              {...register('email')}
              placeholder="example@domain.com"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Phone*</label>
            <input 
              {...register('phone')}
              placeholder="10 digit phone number"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div className="form-group">
            <label>Message*</label>
            <textarea 
              {...register('message')}
              placeholder="Your message here"
            />
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={!isValid}
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;