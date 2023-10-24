---
Title: test 
Summary: Add YAML metadata to the document
Date: Oct 7, 2023
Categories:
    - markdown
    - test 
---

# test
```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

## titulo secundario
Salve salve:
- teste
- teste 2


```go

const (
    LAYOUT string = "./views/layouts/main.html"
    POSTS_DIR string = "./views/partials/posts/"
    PARTIALS_DIR string = "./views/partials/"
    NOT_FOUND string = "./views/partials/404.html"
)

type Post struct {
    Title string
    Summary string
    Path string
    Date string
    Categories []string
}
var PostsByTitle map[string]*Post
var PostsByCategory map[string][]*Post
var Posts []*Post

func RegisterPost(post *Post) {
    if PostsByTitle == nil {
        PostsByTitle = make(map[string]*Post)
    }
    if PostsByCategory == nil {
        PostsByCategory = make(map[string][]*Post)
    }
    Posts = append(Posts, post)
    PostsByTitle[post.Title] = post
    
    for _, c := range(post.Categories) {
        PostsByCategory[c] = append(PostsByCategory[c], post)
    }
}

//TODO parse all templates at startup
func main() {
    //get markdown
    clearGeneratedContent()
    //parse content and metadata
    generatePostFromMd()
    generateHomePage()
    //store html in ./public folder (will be used as submodule in github pages repo)
}

type HomeData struct {
    Css string
    Posts []*Post
}

func generateHomePage() {
    //parse hero + generatedContent from metadata collected by posts
    t, err := template.New("main").ParseFiles(
        LAYOUT,
        PARTIALS_DIR + "hero.html", 
    )
    if err != nil {
        log.Fatal("Error parsing home page:\n" + err.Error())
    }

    filePath := GENERATED_CONTENT_DIR + "home.html"
    f, err := os.Create(filePath)
    defer f.Close()
    if err != nil {
        log.Fatal(err.Error())
    }

    err = t.ExecuteTemplate(f, "main", struct{
        Css string
        Posts []*Post 
    }{
        Css: cssPath(),
        Posts: Posts, 
    })
    if err != nil {
        log.Println("error while executing template:\n\n\n" + err.Error())
    }
}
```
