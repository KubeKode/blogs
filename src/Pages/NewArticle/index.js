import MDEditor from "../../Components/MDEditor";
import { useState } from "react";

// Create NewArticlePage component
const NewArticlePage = () => {
  const [article, setArticle] = useState("");

  // Create handler function to update article state and log it to the console
  const handler = (data) => {
    setArticle(data);
    console.log(article);
  };

  // Render MDEditor component with handler function passed as a prop
  return (
    <div>
      <MDEditor passArticle={handler} />
    </div>
  );
};
export default NewArticlePage;
