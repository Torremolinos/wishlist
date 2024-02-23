
import React from 'react';
import PropTypes from 'prop-types';


const WishInput = () => {
<fieldset className="wish-input">
    <legend className="wish-input__label">Add a new wish</legend>
    <input className="wish-input__field" placeholder="Enter your wish here" />
</fieldset>
};

WishInput.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

WishInput.defaultProps = {
    onNewWish: () => {},
};

export default WishInput;