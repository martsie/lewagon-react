import React from 'react';
import PropTypes from 'prop-types';
import CurrencyConverterInput from './CurrencyConverterInput';
import './currency-converter.css';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amountOfHomeCurrency: 1,
      amountOfConvertedCurrency: 1 * props.conversionRate,
      color: 'green',
    };
    
    this.onHomeAmountChange = this.onHomeAmountChange.bind(this);
    this.onLocaleAmountChange = this.onLocaleAmountChange.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.amountOfHomeCurrency > 100) {
      alert('whoah big spender');
    }
  }
  
  onHomeAmountChange(event) {
    const homeAmountValue = parseFloat(event.target.value, 10);
    const localeAmount = homeAmountValue * this.props.conversionRate;

    this.setState({
      amountOfHomeCurrency: homeAmountValue,
      amountOfConvertedCurrency: localeAmount,
      color: (localeAmount > 100 || homeAmountValue > 100) ? 'red' : 'green',
    })
  }
  
  onLocaleAmountChange(event) {
    const localeAmount = parseFloat(event.target.value, 10);
    const homeAmountValue = localeAmount / this.props.conversionRate;
    
    this.setState({
      amountOfConvertedCurrency: localeAmount,
      amountOfHomeCurrency: homeAmountValue,
      color: (localeAmount > 100 || homeAmountValue > 100) ? 'red' : 'green',
    });
  }

  render() {
    const amountOfHomeCurrency = this.state.amountOfHomeCurrency;
    const amountOfConvertedCurrency = this.state.amountOfConvertedCurrency;
    return (
      <div className="currency-converter" style={{ backgroundColor: this.state.color }}>
        <CurrencyConverterInput
          amount={amountOfHomeCurrency}
          onChange={this.onHomeAmountChange}
          currencyCode={this.props.homeCurrencyCode}
        />
        <CurrencyConverterInput
          amount={amountOfConvertedCurrency}
          onChange={this.onLocaleAmountChange}
          currencyCode={this.props.convertedCurrencyCode}
        />
      </div>
    );
  }
}

CurrencyConverter.propTypes = {
  conversionRate: PropTypes.number.isRequired,
  homeCurrencyCode: PropTypes.string.isRequired,
  convertedCurrencyCode: PropTypes.string.isRequired,
};

export default CurrencyConverter;
