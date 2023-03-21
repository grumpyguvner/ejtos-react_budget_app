import React, { useContext } from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const CurrencySelect = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    function handleCurrencyChange(value) {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    const currencyDescription = (value) => {
        switch (value) {
            case "$":
                return "$ Dollar";
            case "€":
                return "€ Euro";
            case "₹":
                return "₹ Ruppee";
            default:
                return "£ Pound";
        }
    }

    return (
        <Container className='alert-success'>
            <DropdownButton size='lg' className='m-2' variant="success" id="dropdown-currency-button" title={"Currency (" + currencyDescription(currency) + ")"} drop="down">
                <Dropdown.Item onClick={() => handleCurrencyChange("$")}>$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange("£")}>£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange("€")}>€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange("₹")}>₹ Ruppee</Dropdown.Item>
            </DropdownButton>
        </Container>
    );
};

export default CurrencySelect;