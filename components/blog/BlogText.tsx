import BlogStyles from "../../styles/blog/BlogText.module.scss";

interface BlogContent {
  paragraph?: string | undefined;
  bulletList?: string[] | undefined;
}

export default function BlogText({
  paragraph = "İçerik girmeyi unuttun.",
  bulletList,
}: BlogContent) {
  //optional chaining operator -> props?
  //nullish coalescing operator -> ??

  return (
    <div>
      <p className={BlogStyles.boxShadow}>{paragraph}</p>
      {bulletList && (
        <ul className={BlogStyles.bullet + " " + BlogStyles.boxShadow}>
          {bulletList?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
