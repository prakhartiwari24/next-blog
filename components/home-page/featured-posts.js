import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";

function FeaturedPosts(props) {
	return (
		<section className={classes.latest}>
			<h2>Featured posts</h2>
			<PostGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
