import { Link, NavLink } from "react-router-dom";
import Hamburger from "../HamburgerMenu/Hamburger";
import "./NavBar.scss";
import { useState, useEffect, useRef } from "react";

const navListArr = [
	{ name: "Forces", path: "/", id: 0 },
	{ name: "Support", path: "/support", id: 1 },
	{ name: "Help", path: "/help", id: 2 },
];

function NavBar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const menuRef = useRef(null);
	const hamburgerRef = useRef(null);

	function toggleHamburger(event) {
		event.stopPropagation();
		setHamburgerOpen((prev) => !prev);
	}

	function handleClickOutside(event) {
		if (
			menuRef.current &&
			!menuRef.current.contains(event.target) &&
			hamburgerRef.current &&
			!hamburgerRef.current.contains(event.target)
		) {
			setHamburgerOpen(false);
		}
	}

	function handleScroll() {
		setHamburgerOpen(false);
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav>
			<div ref={hamburgerRef} className="hamburger" onClick={toggleHamburger}>
				<Hamburger />
			</div>
			<Link
				className="nav__logo__link"
				to="/"
				onClick={() => setHamburgerOpen(false)}
			>
				<img
					className="nav__logo"
					src="/icons/forces-badge.png"
					alt="forces logo"
				/>
			</Link>
			<ul
				ref={menuRef}
				className={
					hamburgerOpen ? "nav-list ham-nav" : "nav-list nav-list--closed"
				}
			>
				{navListArr.map((item) => (
					<NavLink
						key={item.id}
						to={item.path}
						className={({ isActive }) =>
							isActive
								? "nav-list__link nav-list__link--active"
								: "nav-list__link"
						}
						onClick={() => setHamburgerOpen(false)}
					>
						<li className="nav-list__item">{item.name}</li>
					</NavLink>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
