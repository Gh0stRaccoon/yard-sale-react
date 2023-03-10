import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import CloseIcon from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

export function OrderItem({ product }) {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (payload) => {
		removeFromCart(payload);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={CloseIcon} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}
