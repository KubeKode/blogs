import MDEditor from "../../Components/MDEditor";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../util/auth";

const NewArticlePage = () => {
  const [article, setArticle] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (isLoggedIn()) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);
  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  const handleArticleChange = (data) => {
    setArticle(data);
    console.log(article);
  };

  return <MDEditor passArticle={handleArticleChange} />;
};
export default NewArticlePage;
