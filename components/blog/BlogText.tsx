import BlogStyles from "../../styles/blog/BlogText.module.scss";

interface BlogContent {
  content?: string | undefined;
}

export default function BlogText({ content =  "İçerik girmeyi unuttun."}: BlogContent) {

  //optional chaining operator -> props?
  //nullish coalescing operator -> ??  

  return (
    <div>
      <p className={BlogStyles.boxShadow}>{content}</p>
    </div>
  );
}
