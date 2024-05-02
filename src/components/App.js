import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const posts = [
    {
      id: 1,
      title: "Title 1",
      date: "April 20, 2022",
      preview: "Preview of article 1",
    },
    {
      id: 2,
      title: "Title 2",
      preview: "Preview of article 2",
    },
    {
      id: 3,
      title: "Title 3",
      preview: "Preview of article 3",
    },
  ];
  
  return (
    <div className="App">
     <Header name={blogData.name}/>
     <About image ={blogData.image}
     about={blogData.about}/>
     <ArticleList posts={posts} />
    </div>
  );
}

export default App;
