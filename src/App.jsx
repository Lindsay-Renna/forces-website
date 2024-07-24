import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/support" element={<SupportPage />} />
					<Route path="/help" element={<HelpPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
