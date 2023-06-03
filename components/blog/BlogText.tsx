import BlogStyles from "../../styles/blog/BlogText.module.scss";

interface BlogContent {
  date?: string | undefined;
  title?: string[] | undefined;
  contentHtml: string | TrustedHTML;
}

export default function BlogText({ date, title, contentHtml }: BlogContent) {
  //optional chaining operator -> props?
  //nullish coalescing operator -> ??
  console.log(contentHtml);

  return (
    <>
      <div className={BlogStyles.boxShadow}>{title}</div>
      <div className={BlogStyles.boxShadow}>{date}</div>
      <div className={BlogStyles.boxShadow}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}
