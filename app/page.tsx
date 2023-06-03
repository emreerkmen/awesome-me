import Image from "next/image";
import BlogText from "../components/blog/BlogText";
import { ExperienceData, getSortedExperiencesData } from "../utils/experiences";

export default async function Home() {

  const experiences: ExperienceData | ExperienceData[] =
    await getSortedExperiencesData().then((data) => data);

  return (
    <main className="flex-container">
      <div className="">
        <p className="">
          Welcome To My&nbsp;
          <code className="">Space</code>
        </p>
      </div>

      <div className="">
        <Image
          src="./profile/picture.jpg"
          width={80}
          height={100}
          alt="Picture of the author"
          loading="lazy"
          className="profil-pic"
        ></Image>
      </div>
      <div className="flex-container center">
        <h1 className="">Here is my resume</h1>
        <h2>Summary</h2>
        {experiences.map(({ id, content, ...data }: ExperienceData) => (
          <div key={id}>
            <BlogText date={data.date} title={data.title} contentHtml={content}></BlogText>
          </div>
        ))}
      </div>
    </main>
  );
}
