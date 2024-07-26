import { Link } from "react-router-dom";
import "./HomePage.scss";
import Carousel from "../../Components/Carousel/Carousel";

function HomePage() {
	const images = ["/images/desktop1.png", "/images/web2.png"];

	return (
		<main className="home">
			<section className="hero">
				<h1 className="hero__header">
					Don't print out an army list
					<span className="hero__header--teal"> EVER AGAIN</span>
				</h1>
				<p>
					View and organize your BattleScribe army lists with Forces, designed
					to give the at-a-glance information you need to in the heat of battle.
					Never print out an army list again!
				</p>
				<div className="app-stores">
					<Link to="https://apps.apple.com/app/id1613459703">
						<img
							className="app-stores__badge"
							src="/icons/app-store-badge.svg"
							alt="apple app store icon"
						/>
					</Link>
					<Link to="https://play.google.com/store/apps/details?id=com.offblastsoftworks.forces">
						<img
							className="app-stores__badge"
							src="/icons/google-play-badge.svg"
							alt="google play icon"
						/>
					</Link>
				</div>
			</section>
			<Carousel images={images} />
		</main>
	);
}

export default HomePage;
