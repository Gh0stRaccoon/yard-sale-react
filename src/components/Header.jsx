import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@icons/icon_shopping_cart.svg';
import YardSaleLogo from '@logos/logo_yard_sale.svg';
import MenuIcon from '@icons/icon_menu.svg';
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import '@styles/Header.scss';
import { AppContext } from '../context/AppContext';

export function Header() {
	const { cartLength } = useContext(AppContext);
	const [toggle, setToggle] = useState(false);
	const [toggleCart, setToggleCart] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	const handleToggleCart = () => {
		setToggleCart(!toggleCart);
	};

	return (
		<nav>
			<img src={MenuIcon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={YardSaleLogo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggleCart}>
						<img src={ShoppingCartIcon} alt="shopping cart" />
						{cartLength ? <div>{cartLength}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleCart && <MyOrder />}
		</nav>
	);
}
