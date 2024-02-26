import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';


const WishList = ({wishes , onWishesChange}) => (
<ul className="wish-list">
{wishes.map(({text, done}, i) => (
 <WishItem
    text={text} /*esto son promp*/
    done={done}
    id={`wish${i}`}
    key={text}
    onDoneChange={(value) => {
    const updatedWishes = [...wishes];
    updatedWishes[i].done = value;
    onWishesChange(updatedWishes);
}}
/>
))}
</ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf( //esto es un array de objetos 
        PropTypes.shape(WishItem.propTypes) //esto es un objeto con las propiedades de WishItem
    ),
    onWishesChange: PropTypes.func.isRequired,

};
WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => {},
};

export default WishList;
