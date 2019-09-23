import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';

const CurrencyConversionScreen = (props) => {
  console.log(props);

  return (
    <div>
    <h2>writing html inside javascript??!!?!</h2>
    <CurrencyConverter
      conversionRate={0.68}
      homeCurrencyCode={props.match.params.currencyCode}
      convertedCurrencyCode={props.match.params.currencyCode2}
    />
    <CurrencyConverter
      conversionRate={15708.21}
      homeCurrencyCode="AUD"
      convertedCurrencyCode="VND"
    />
  </div>
  );
}

export default CurrencyConversionScreen;
