import React, { useEffect, useState } from "react";
import APIService from "../../ApiService";
import { ViewProducts } from "./ViewProducts";
export function Products() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		APIService.get("home/view_product/").then((response: any) => {
			setProducts(response);
		});
		// axios
		// 	.get("http://127.0.0.1:8000/home/view_product/", {
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			Accept: "application/json",
		// 		},
		// 	})
		// 	.then((res) => {
		// 		setProducts(res.data);
		// 		console.log(res,"pppppppppppppppp")
		// 	})
		// 	.catch((error) => {
		// 		// Handle error
		// 	});
	}, []);
	return (
		// <div>
		<ViewProducts />
		// </div>
	);
}