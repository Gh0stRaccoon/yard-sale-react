import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import '@styles/MyOrder.scss';
import ArrowIcon from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';

export function MyOrder() {
	const {
		state: { cart },
		cartLength,
	} = useContext(AppContext);

	const reduceTotal = () => cart.reduce((acc, cur) => acc + cur.price, 0);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={ArrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cartLength ? (
					<>
						<div className="my-order-items">
							{cart.map((product) => (
								<OrderItem product={product} key={`orderItem-${product.id}`} />
							))}
						</div>
						<div className="order">
							<p>
								<span>Total</span>
							</p>
							<p>${reduceTotal()}</p>
						</div>
						<button className="primary-button">Checkout</button>{' '}
					</>
				) : (
					<>
						<div className="my-order-empty">
							<p>¡UPS!</p>
							<span>There's nothing to see</span>
						</div>
					</>
				)}
			</div>
		</aside>
	);
}
