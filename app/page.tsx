import Image from "next/image";
import BlogText from "../components/blog/BlogText";

export default function Home() {
  let bulletList: string[];
  bulletList = [
    "Proficient in designing micro service based REST APIs using Java with Spring MVC, Spring Boot frameworks and Golang with Gorilla Mux library and utilizing tools like Postman for API testing and documentation",
    "Developed reusable, high-quality, testable, and secure (using SonarLint) code. Documented the code and implemented unit tests.",
    "Created and managed containerized applications using Docker and Openshift.",
    "Deployed Kafka producer and consumer to micro service based applications in Java, enabling event bus system for resulting flexibility and fault tolerance.",
    "Developed and deployed multiple Hazelcast client applications in Java, reducing data access latency by 50% and database load by 20%.",
    "Managed and maintained JBoss and Apache web servers on Linux servers.",
    "Utilized React JS library to build scalable and performant web applications.",
    "Proficient in fundamental front-end languages such as HTML, CSS, and JS.",
    "Built and maintained pipelines for CI/CD using Jenkins, Git, Bitbucket.",
    " Monitored server status and application logs using Dynatrace, Instana, Splunk, and Elastic Search, troubleshooting and debugging bugs and problems in applications.",
    "Utilized Agile Scrum methodology to successfully manage projects and deliver high-quality products.",
    "Led the acquisition of a new PBI, improving story point estimation accuracy by 30% and increasing team efficiency by 50%.",
    "Collaborated with design and technical teams, IT teams, and stakeholders to develop new features, functionality, and applications and provide support.",
    "Utilized Confluence and SourceTree for collaboration.",
    "Coached and mentored developers and reviewed code of team members.",
    "Planned CMS integration, from architecture to development using Adobe Experience Manager.",
    "Developed and performs new CMS integration and led CMS transformation for 20 Agile teams across the company.",
    "Implemented a cache mechanism for the CMS, resulting in a 90% decrease in CPU usage.",
  ];

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
        <BlogText paragraph="As a 5 years experienced senior software engineer, my expertise in designing microservice-based REST APIs using Java with Spring MVC and Spring Boot frameworks, Golang with Gorilla Mux library, and tools like Postman has resulted in the deployment of efficient and fault-tolerant systems. I have a proven track record of developing reusable, high-quality, and secure code while implementing unit tests. I have successfully managed projects utilizing Agile Scrum methodology, leading to improved efficiency and estimation accuracy. My experience with technologies such as React JS, Docker, and Openshift has allowed me to build scalable and performant web applications while maintaining JBoss and Apache web servers on Linux. Additionally, I have mentored developers, reviewed code, and collaborated with teams to develop new features and functionality while using Confluence and SourceTree for collaboration."></BlogText>
        <h2>GarantiBBVA Technology</h2>
        <p>Expert Software Engineer - May, 2022 - Present</p>
        <BlogText
          paragraph="Responsible for project of development and maintaining garantibbva.com.tr, the
          website of Turkey's second largest private bank GarantiBBVA and CMS used
          throughout the company. My Responsibilities;"
          bulletList={bulletList}
        ></BlogText>
      </div>
    </main>
  );
}
