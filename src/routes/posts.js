const { findAllPosts, findPost, createPost, updatePost, deletePost } = require("../controllers/post");

const postRouter = (router)=>{
    router.get("/", findAllPosts);
    router.get("/:id", findPost);
    router.post("/", createPost);
    router.put("/:id", updatePost);
    router.delete("/:id", deletePost);
    return router;
}

module.exports = postRouter;