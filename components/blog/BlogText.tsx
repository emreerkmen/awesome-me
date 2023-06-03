import BlogStyles from "../../styles/blog/BlogText.module.scss";

interface BlogContent {
  date?: string | undefined;
  title?: string | undefined;
  contentHtml: string | TrustedHTML;
}

export default function BlogText({ date, title, contentHtml }: BlogContent) {
  //optional chaining operator -> props?
  //nullish coalescing operator -> ??

  if (title === "Summary") {
    return (
      <>
        <div className={BlogStyles.boxShadow}>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={BlogStyles.boxShadow + " " + BlogStyles.title}>
        <h2>{title}</h2>
        <div>{date}</div>
      </div>
      <div className={BlogStyles.boxShadow}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}
