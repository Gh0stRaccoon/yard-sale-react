import React from 'react';
import '@styles/ProductInfo.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

export function ProductInfo({ product }) {
	return (
		<>
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button">
					<img src={addToCartIcon} alt="add to cart" />
					Add to carte
				</button>
			</div>
		</>
	);
}
