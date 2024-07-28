import { Link } from "react-router-dom";
import "./SupportPage.scss";

function SupportPage() {
	return (
		<main className="support">
			<div className="support__card">
				<div className="support__text">
					<h3 className="support__title">Contact Us</h3>
					<p>
						Send us a shout at{" "}
						<Link to="mailto:support@forces.app">support@forces.app</Link>
					</p>
					<Link className="support__link" to="mailto:support@forces.app">
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="support__card">
				<div className="support__text">
					<h3 className="support__title">Join the Discord</h3>
					<p>Have suggestions or need help - our Discord server is open.</p>
					<Link
						target="_blank"
						className="support__link"
						to="https://discord.gg/MtNqZ5xqfA"
					>
						JOIN THE DISCORD
					</Link>
				</div>
			</div>
		</main>
	);
}

export default SupportPage;
