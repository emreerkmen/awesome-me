import BlogStyles from "../../styles/blog/BlogText.module.scss";
import {
  ExperienceData,
  getSortedExperiencesData,
} from "../../utils/experiences";

export default async function BlogTextTest() {
  //optional chaining operator -> props?
  //nullish coalescing operator -> ??

  const experiences: ExperienceData | ExperienceData[] =
    await getSortedExperiencesData().then((data) => data);

  return (
    <div>
      <p className={BlogStyles.boxShadow}>Burda Garanti Olması</p>
      <section>
        {experiences.map(({ id, date, title }: ExperienceData) => (
          <div key={id}>
            <p>{id}</p>
            <p>{date}</p>
            <p>{title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
