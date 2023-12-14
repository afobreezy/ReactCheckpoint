import { Fragment, useState } from "react";
import MainNav from "./components/MainNav";
import ChatCard from "./components/ChatCard";
import { Container, Row, Col } from "react-bootstrap";
import BlogForm from "./components/BlogForm";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: "breezyfire",
      title: "first blog",
      description: "This is a new blog",
    },
  ]);

  const createNewBlog = (blogData) => {
    return console.log(blogData);
  };
  
  return (
    <Fragment>
      <MainNav />
      <Container className="mt-5">
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            {blogs.map((blog) => {
              return (
                <ChatCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
            <BlogForm createNewBlog={createNewBlog} />
          </Col>

          <Col lg={3}></Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
