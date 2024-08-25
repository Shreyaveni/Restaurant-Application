import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <section className="confirmation-page">
      <div className="container">
        <div className="confirmation-message">
          <h1>Reservation Done Successfully!</h1>
          <p>
            Your table has been successfully booked. We look forward to serving
            you!
          </p>
          <button className="back-to-home" onClick={handleHomeClick}>
            Go to Home
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationPage;
