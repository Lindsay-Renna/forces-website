import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
	return (
		<footer>
			<div className="footer">
				<div className="footer__socials">
					<Link to="https://mstdn.social/@offblastsoftworks">
						<img src="/icons/mastodon-logo.svg" alt="mastodon icon" />
					</Link>
					<Link to="https://x.com/OffblastSW/?prefetchTimestamp=1722128338645">
						<img src="/icons/x-logo.svg" alt="x icon" />
					</Link>
					<Link to="https://www.instagram.com/offblastsoftworks/">
						<img src="/icons/instagram-logo.svg" alt="instagram icon" />
					</Link>
					<Link to="https://discord.gg/MtNqZ5xqfA">
						<img src="/icons/discord-logo.svg" alt="discord icon" />
					</Link>
				</div>
				<div className="footer__copyright">
					<p>© 2024 Copyright Offblast Softworks</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
