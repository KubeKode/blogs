import MDEditor from "../../Components/MDEditor";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// Create NewArticlePage component
const NewArticlePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const [article, setArticle] = useState("");

  // Create handler function to update article state and log it to the console
  const handler = (data) => {
    setArticle(data);
    console.log(article);
  };

  // Render MDEditor component with handler function passed as a prop
  if (!isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate replace to="/login" />;
    
  } else {
    return (
      <div>
        <MDEditor passArticle={handler} />
      </div>
    );
  }
};
export default NewArticlePage;
