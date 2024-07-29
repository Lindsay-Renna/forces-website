import { Link } from "react-router-dom";
import "./FAQPage.scss";

function FAQPage() {
	return (
		<main>
			<div className="faq">
				<div className="faq__box">
					<h3 className="faq__question">How do I create and edit rosters?</h3>
					<p className="faq__answer">
						Use BattleScribe for PC, Mac, Android or iOS. Alternately check out
						some browser based options like{" "}
						<Link to="https://war.cards/" target="_blank" className="faq__link">
							war.cards
						</Link>{" "}
						or{" "}
						<Link
							to="https://www.newrecruit.eu/"
							target="_blank"
							className="faq__link"
						>
							new recruit
						</Link>
						.
					</p>
				</div>
				<h3 className="faq__section">iOS</h3>
				<div className="faq__box">
					<h3 className="faq__question">How do I get my rosters in Forces?</h3>
					<p className="faq__answer">
						In BattleScribe press the share button, press Battlescribe Roster
						file, and select Forces.
					</p>
					<div className="faq__images">
						<img src="/images/IMG_7728.PNG" alt="iOS preview of the app" />
						<img src="/images/IMG_7727.PNG" alt="iOS preview of the app" />
						<img src="/images/IMG_7729.PNG" alt="iOS preview of the app" />
					</div>
					<p className="faq__answer">
						Alternately import from within Forces from the Battlescribe folder
						in the On My iPhone section of the file picker. You can then import
						directly from BattleScribes rosters folder.
					</p>
					<div className="faq__images">
						<img src="/images/IMG_7730.PNG" alt="iOS preview of the app" />
					</div>
				</div>
				<div className="faq__box">
					<h3 className="faq__question">
						After I import a roster and go back to the main menu, I don't see it
						in my `Imported` list, what's happening?
					</h3>
					<p className="faq__answer">
						Forces uses iCloud storage to store all roster files, this way they
						are sinked between all iCloud devices you use. Ensure you have
						iCloud drive enabled otherwise the rosters will not be persisted.
					</p>
				</div>
			</div>
		</main>
	);
}

export default FAQPage;
