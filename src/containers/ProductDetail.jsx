import React from 'react';
import { ProductInfo } from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import CloseIcon from '@icons/icon_close.png';

export function ProductDetail() {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={CloseIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}
