import express from "express"
import bodyParser from "body-parser"


const app = express()
const port = 3000

let data = []
let post = {}

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))
app.get("/", (req, res) => {

    res.render("index.ejs", { posts: data })
})
app.get("/create", (req, res) => {
    res.render("post.ejs")
})
app.post("/submit", (req, res) => {

    post = { title: req.body["title-post"], blogPost: req.body["post-blog"] }

    data.push(post)

    res.render("post.ejs")
})

app.listen(port, () => {
    console.log("Listening to port: " + port)

})