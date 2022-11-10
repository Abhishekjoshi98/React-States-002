import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Screen = (props) => {
 const markdown = props.markupdata
  return (
    <div className="Ankur">
     
      <ReactMarkdown  children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Screen;
