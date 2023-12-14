import { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";

const BlogForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onCreateNewBlog = (event) => {
    event.preventDefault();
    if (!title || !description) {
      return setErrorMessage("All input fields are required");
    }

    return props.createNewBlog({ 
      title,
      description,
      id: Math.floor(Math.random() * 10000) + "badnboujie",
    });
  };

  return (
    <Fragment>
        <h2 className="mt-5 mb-3">Create New Blog</h2>

        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

    <Form onSubmit={onCreateNewBlog}>
        <Form.Group className="mb-3">
            <Form.Control
             placeholder="Title" 
             onChange={(event) => setTitle(event.target.value)}
             />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
             placeholder="Description" 
             onChange={(event) => setDescription(event.target.value)}
             />
            </Form.Group>

            <Button type="submit" style={{ width: "100%"}}>
              Submit
              </Button>
    </Form>
    </Fragment>
  );
};

export default BlogForm;