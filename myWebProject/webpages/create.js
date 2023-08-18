const Post = mongoose.model("Post", {
  title: String,
  content: String
});

app.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save((err, savedPost) => {
    if (err) {
      console.log("게시글 저장 실패:", err);
      return res.status(500).json({ message: "게시글을 저장할 수 없습니다." });
    }
    res.json(savedPost);
  });
});