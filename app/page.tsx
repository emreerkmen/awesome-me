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
      <div className="container">
        <div className="name">
          <h1>
            Hi! I am <br></br>
            <span className="highlight">Emre Erkmen</span>
          </h1>
          <p>
            I am a Software Engineer I am a Software Engineer I am a Software
            Engineer I am a Software Engineer I am a Software Engineer
          </p>
        </div>
        <div className="image">
          <Image
            src="./profile/blue_blob.svg"
            width={80}
            height={100}
            alt="blob"
            loading="lazy"
            className="blob-one"
          ></Image>
          <Image
            src="./profile/orange_blob.svg"
            width={80}
            height={100}
            alt="blob second"
            loading="lazy"
            className="blob-second"
          ></Image>
          <Image
            src="./profile/pic.svg"
            width={80}
            height={100}
            alt="Picture of the author"
            loading="lazy"
            className="profil-pic"
          ></Image>
        </div>
      </div>
      <div className="flex-container center">
        <div>
        <h1 className="resume">Here is my resume</h1>
        <h2>Summary</h2>
        </div>
        {experiences.map(({ id, content, ...data }: ExperienceData) => (
          <div key={id}>
            <BlogText
              date={data.date}
              title={data.title}
              contentHtml={content}
            ></BlogText>
          </div>
        ))}
      </div>
    </main>
  );
}
