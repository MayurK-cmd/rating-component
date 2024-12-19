import React from 'react';
import { useLocation } from 'react-router-dom';
import Thankyou from '../images/illustration-thank-you.svg';
import './Submitstyle.css';

const Submit = () => {
  const location = useLocation();
  const selectedRating = location.state?.rating;

  return (
    <div className="submit-container">
      <div className="thank-you-container">
        <img src={Thankyou} alt="Thank you illustration" className="thank-you-image" />
      </div>
      <div className="title">
        You selected {selectedRating} out of 5
      </div>
      <div className="text">
        <b>Thank you!</b>
      </div>
      <div className="content">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </div>
    </div>
  );
};

export default Submit;
