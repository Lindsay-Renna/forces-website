import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import FAQPage from "./Pages/FAQPage/FAQPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/support" element={<SupportPage />} />
					<Route path="/faq" element={<FAQPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
