import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";

const BuyNow = () => {

  const subtotal = useSelector((state) => state.cart.cartTotalAmount);

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  
  const handlePayment = () => {
    setPaymentCompleted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <Typography variant="h4" gutterBottom>
        Total Amount: ${subtotal}
      </Typography>
      {paymentCompleted ? (
        <Typography variant="h5" gutterBottom style={{ color: "green" }}>
          Payment Successful! Thank you for your purchase.
        </Typography>
      ) : (
        <Button variant="contained" color="primary" onClick={handlePayment}>
          Pay Now
        </Button>
      )}
    </div>
  );
};

export default BuyNow;
