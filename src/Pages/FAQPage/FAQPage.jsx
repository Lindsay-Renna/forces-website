/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "/icons/chevron-down.svg";
import "./FAQPage.scss";

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<img className="chevron-down" src={chevronDown} alt="Chevron Down" />
			</>
		}
	/>
);

function FAQPage() {
	return (
		<main>
			<div className="faq">
				<div className="faq__box">
					<h3 className="faq__section">General</h3>
					<Accordion transition transitionTimeout={250}>
						<AccordionItem header="How do I create and edit rosters?">
							<p className="faq__answer">
								Use BattleScribe for PC, Mac, Android or iOS. Alternately check
								out some browser based options like{" "}
								<Link
									to="https://war.cards/"
									target="_blank"
									className="faq__link"
								>
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
						</AccordionItem>
						<h3 className="faq__section">iOS</h3>
						<AccordionItem header="How do I get my rosters in Forces?">
							<p className="faq__answer">
								In BattleScribe press the share button, press Battlescribe
								Roster file, and select Forces.
							</p>

							<div className="faq__images">
								<img src="/images/IMG_7728.PNG" alt="iOS preview of the app" />
								<img src="/images/IMG_7727.PNG" alt="iOS preview of the app" />
								<img src="/images/IMG_7729.PNG" alt="iOS preview of the app" />

								<p className="faq__answer">
									Alternately import from within Forces from the Battlescribe
									folder in the On My iPhone section of the file picker. You can
									then import directly from BattleScribes rosters folder.
								</p>
								<div className="faq__images">
									<img
										src="/images/IMG_7730.PNG"
										alt="iOS preview of the app"
									/>
								</div>
							</div>
						</AccordionItem>
						<AccordionItem header="After I import a roster and go back to the main menu, I don't see it	in my `Imported` list, what's happening?">
							<p className="faq__answer">
								Forces uses iCloud storage to store all roster files, this way
								they are sinked between all iCloud devices you use. Ensure you
								have iCloud drive enabled otherwise the rosters will not be
								persisted.
							</p>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
}

export default FAQPage;
