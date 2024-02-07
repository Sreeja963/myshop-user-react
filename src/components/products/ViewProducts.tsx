import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import APIService from "../../ApiService";
import image from '../../images/testimg.jpg'
const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gap: "20px",
		justifyContent: "center",
		padding: "20px", 
	},
};

export function ViewProducts() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		APIService.get("home/view_product/").then((response: any) => {
			setProducts(response);
		});
	}, []);

	return (
		<div style={styles.container}>
			{products.map((product: any, index: number) => (
				<Card key={index} sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={image}
						title={product.item_name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.item_name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{product.item_quantity}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Add to cart</Button>
						<Button size="small">Book Now</Button>
					</CardActions>
				</Card>
			))}
		</div>
	);
}
