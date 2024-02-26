import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';
import classNames from 'classnames';

/*hacemos una instalacion npm install classnames*/

const WishItem = ({done, text, id, onDoneChange}) => {
    return(
<li key={text} className={`wish-list__item ${done ? 'wish-list__item--done': ''}`}>
<input id={`wish${i}`} type="checkbox" checked ={done}/>
<label htmlFor={`wish${i}`}>{text}</label>
</li> 

    );
};