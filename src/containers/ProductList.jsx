import React from 'react';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
import { useProducts } from '@hooks/useProducts';

export function ProductList() {
	const API = 'https://api.escuelajs.co/api/v1/products';
	const { products } = useProducts({ API });

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
