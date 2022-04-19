import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting started with nextjs",
		image: "getting-started-nextjs.png",
		excerpt: "Nextjs is the react framework for prodcution",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting started with nextjs2",
		image: "getting-started-nextjs.png",
		excerpt: "Nextjs is the react framework for prodcution",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting started with nextjs3",
		image: "getting-started-nextjs.png",
		excerpt: "Nextjs is the react framework for prodcution",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting started with nextjs4",
		image: "getting-started-nextjs.png",
		excerpt: "Nextjs is the react framework for prodcution",
		date: "2022-02-10",
	},
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;
