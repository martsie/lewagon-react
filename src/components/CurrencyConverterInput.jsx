import React from 'react';
import PropTypes from 'prop-types';

const CurrencyConverterInput = (props) => {
  return (
    <div className="currency-converter-input">
      <input type="number" value={props.amount} onChange={props.onChange} /> {props.currencyCode}
    </div>
  );
}

CurrencyConverterInput.propTypes = {
  amount: PropTypes.number,
  onChange: PropTypes.func,
  currencyCode: PropTypes.string,
};

export default CurrencyConverterInput;
