import Post from "./post";
import User from "./user";
import ui from "./ui";

Post.findAll()
    .then(ui.renderPosts)
    .catch( (error) => console.error(error) );

User.findRecent()
	.then(ui.renderUsers)
	.catch( (error) => console.error(error) );