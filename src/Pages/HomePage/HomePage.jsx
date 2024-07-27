import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HomePage.scss";

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
				navigation={true}
				pagination={{
					clickable: true,
				}}
				keyboard={true}
				slidesPerView={"1"}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<SwiperSlide>
					<h3 className="mySwiper__title">MacOS</h3>
					<div className="mySwiper__image__wrapper">
						<img
							className="mySwiper__image"
							src="/images/desktop1.png"
							alt="MacOS"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<h3 className="mySwiper__title">iOS</h3>
					<img className="mySwiper__image" src="/images/web2.png" alt="MacOS" />
				</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
			<section className="features">
				<h1>some features</h1>
				<ul className="features__list">
					<li className="features__item">
						<h4>Supports all your favourite Game Systems</h4>
						<p>
							Warhammer 40K, Warhammer Age of Sigmar, Warhammer The Horus
							Heresy, Aeronautica Imperialis, Adeptus Titanicus, Middle-earth
							Strategy Battle Game, Kill Team, Warcry and more
						</p>
					</li>
					<li className="features__item"></li>
					<li className="features__item"></li>
					<li className="features__item"></li>
					<li className="features__item"></li>
				</ul>
			</section>
		</main>
	);
}

export default HomePage;
