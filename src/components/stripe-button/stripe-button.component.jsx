import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HLAO5IgbZNFyXDmF9E1bfCuu0zl7IBAC0XMwRYY4K2opfcaPuPEPrp8qXLfg9Az6g6oHKejcl0JJrD7bKQfx1uZ00TdIMBSbT';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ROPA XERWEDSD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
