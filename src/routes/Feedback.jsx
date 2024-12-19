import React, { useState } from 'react';
import Star from '../images/icon-star.svg'; // Assuming you have the star icon
import { useNavigate } from 'react-router-dom';
import  './Feedbackstyle.css';

const Feedback = () => {
    const [selectedRating, setSelectedrating] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (selectedRating) {
            navigate('/submit', { state: { rating: selectedRating } });
        } else {
            alert('Please select a rating before submitting!');
        }
    };

    return (
        <div className="feedback-container">
            <div className="star-container">
                <div className='star-wrapper'>
                <img src={Star} alt="Star" className="star-image" />
                </div>
            </div>
            
            <div className="title-1">
                <b>How did we do?</b>
            </div>
            
            <div className="content-1">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </div>
            
            <div className="rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <div className="rating-wrapper" key={rating}>
                        <button
                            onClick={() => setSelectedrating(rating)}
                            className={`rating-button ${selectedRating === rating ? 'selected' : ''}`}
                        >
                            {rating}
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="submit">
                <button onClick={handleSubmit} className="submit-button">
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default Feedback;
