import "./App.css";
import { HeaderMenu } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/products/Products";
import { Home } from "./components/home/Home";
import { Pricing } from "./components/pricing/Pricing";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<HeaderMenu />
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/products" Component={Products} />
					<Route path="/pricing" Component={Pricing} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
