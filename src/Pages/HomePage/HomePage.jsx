/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HomePage.scss";

const swiperImages = [
	{ title: "MacOS", image: "/images/desktop1.png", alt: "MacOS" },
	{ title: "iOS", image: "/images/web2.png", alt: "forces screenshot iOS" },
	{
		title: "At a glance overview of your lists",
		image: "/images/One.png",
		alt: "forces screenshot android",
	},
	{
		title: " Detailed unit breakdown for all popular game systems",
		image: "/images/Two.png",
		alt: "forces screenshot",
	},
	{
		title: "Mathhammer charts",
		image: "/images/Three.png",
		alt: "forces screenshot",
	},
	{
		title: "Run unit match up experiments",
		image: "/images/Four.png",
		alt: "forces screenshot",
	},
	{
		title: "Customize units with names & notes",
		image: "/images/Five.png",
		alt: "forces screenshot",
	},
	{
		title: "Meta breakdowns",
		image: "/images/Six.png",
		alt: "forces screenshot",
	},
];

function HomePage() {
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
			<Swiper
				centeredSlides={true}
				loop={true}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				keyboard={true}
				slidesPerView={"1"}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				{swiperImages.map((image, index) => {
					return (
						<SwiperSlide key={index}>
							<h3 className="mySwiper__title">{image.title}</h3>
							<div className="mySwiper__image__wrapper">
								<img
									className="mySwiper__image"
									src={image.image}
									alt={image.alt}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<section className="features">
				<div className="features__card">
					<img
						className="features__bullet"
						src="/icons/check-circle.svg"
						alt="checkmark circle"
					/>
					<div className="features__text">
						<p className="features__title">
							Supports all your favourite Game Systems
						</p>
						<p>
							Warhammer 40K, Warhammer Age of Sigmar, Warhammer The Horus
							Heresy, Aeronautica Imperialis, Adeptus Titanicus, Middle-earth
							Strategy Battle Game, Kill Team, Warcry and <strong>more</strong>{" "}
						</p>
					</div>
				</div>
				<div className="features__card">
					<img
						className="features__bullet"
						src="/icons/check-circle.svg"
						alt="checkmark circle"
					/>
					<div className="features__text">
						<p className="features__title">Mathhammer</p>
						<p>
							How much damage will 40{" "}
							<Link
								className="features__link"
								target="_blank"
								to="https://www.games-workshop.com/en-CA/orruk-warclans-hobgrot-slittas-2021"
							>
								Hobgrots
							</Link>{" "}
							do to a{" "}
							<Link
								className="features__link"
								target="_blank"
								to="https://www.warhammer.com/en-CA/shop/gatebreaker-mega-gargant-2022?queryID=578c13789e36abff64a1aeecdd5362ce"
							>
								Mega-Gargant?
							</Link>
						</p>
					</div>
				</div>
				<div className="features__card">
					<img
						className="features__bullet"
						src="/icons/check-circle.svg"
						alt="checkmark circle"
					/>
					<div className="features__text">
						<p className="features__title">Meta</p>
						<p>
							Generate game system meta reports - which army is being used most
							these days? What are the top units for my faction and how many do
							people take?
						</p>
					</div>
				</div>
				<div className="features__card">
					<img
						className="features__bullet"
						src="/icons/check-circle.svg"
						alt="checkmark circle"
					/>
					<div className="features__text">
						<p className="features__title">
							Made for all your portable devices
						</p>
						<p>
							Forces is written natively to run smoothly on the mobile device of
							your choice. Whether you're rocking an Android tablet or an Apple
							iPhone to the gaming table Forces will run and look great on it.
						</p>
					</div>
				</div>
				<div className="features__card">
					<img
						className="features__bullet"
						src="/icons/check-circle.svg"
						alt="checkmark circle"
					/>
					<div className="features__text">
						<p className="features__title">Alerts</p>
						<p>
							Forces uses push notifications to alert you to the changes you
							care about. Subscribe to be alerted when a specific Battlescribe
							dataset are updated, or when a specific topic is posted about on
							Warhammer Community.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default HomePage;
