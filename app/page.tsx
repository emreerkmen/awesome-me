import Image from 'next/image'
import BlogText from "../components/blog/BlogText"

export default function Home() {
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
          loading='lazy'
          className="profil-pic">
        </Image>
      </div>
      <div className="flex-container center">
        <h1 className='' >Here is my resume</h1>
        <h2>Summary</h2>
        <p className="box-shadow">As a 5 years experienced senior software engineer, my expertise in designing microservice-based REST APIs using Java with Spring MVC and Spring Boot frameworks, Golang with Gorilla Mux library, and tools like Postman has resulted in the deployment of efficient and fault-tolerant systems. I have a proven track record of developing reusable, high-quality, and secure code while implementing unit tests. I have successfully managed projects utilizing Agile Scrum methodology, leading to improved efficiency and estimation accuracy. My experience with technologies such as React JS, Docker, and Openshift has allowed me to build scalable and performant web applications while maintaining JBoss and Apache web servers on Linux. Additionally, I have mentored developers, reviewed code, and collaborated with teams to develop new features and functionality while using Confluence and SourceTree for collaboration.</p>
        <h2>GarantiBBVA Technology</h2>
        <p >Expert Software Engineer - May, 2022 - Present</p>

        <p className="box-shadow">Responsible for project of development and maintaining garantibbva.com.tr, the
          website of Turkey&apos;s second largest private bank GarantiBBVA and CMS used
          throughout the company. My Responsibilities;</p>
        <ul className='bullet box-shadow'>
          <li>Proficient in designing micro service based REST APIs using Java with Spring MVC, Spring Boot frameworks and Golang with Gorilla Mux library and utilizing tools like Postman for API testing and documentation.</li>
          <li>Developed reusable, high-quality, testable, and secure (using SonarLint) code. Documented the code and implemented unit tests.</li>
          <li>Created and managed containerized applications using Docker and Openshift.</li>

          <li>Deployed Kafka producer and consumer to micro service based applications in Java, enabling event bus system for resulting flexibility and fault tolerance.</li>
          <li>Developed and deployed multiple Hazelcast client applications in Java, reducing data access latency by 50% and database load by 20%.</li>
          <li>Managed and maintained JBoss and Apache web servers on Linux servers.</li>
          <li>Utilized React JS library to build scalable and performant web applications.</li>
          <li>Proficient in fundamental front-end languages such as HTML, CSS, and JS.</li>
          <li>Built and maintained pipelines for CI/CD using Jenkins, Git, Bitbucket.</li>
          <li> Monitored server status and application logs using Dynatrace, Instana, Splunk, and Elastic Search, troubleshooting and debugging bugs and problems in applications.</li>
          <li>Utilized Agile Scrum methodology to successfully manage projects and deliver high-quality products.</li>
          <li>Led the acquisition of a new PBI, improving story point estimation accuracy by 30% and increasing team efficiency by 50%.</li>
          <li>Collaborated with design and technical teams, IT teams, and stakeholders to develop new features, functionality, and applications and provide support.</li>
          <li>Utilized Confluence and SourceTree for collaboration.</li>
          <li>Coached and mentored developers and reviewed code of team members.</li>
          <li>Planned CMS integration, from architecture to development using Adobe Experience Manager.</li>
          <li>Developed and performs new CMS integration and led CMS transformation for 20 Agile teams across the company.</li>
          <li>Implemented a cache mechanism for the CMS, resulting in a 90% decrease in CPU usage.</li>
        </ul>
      </div>
      <BlogText></BlogText>
    </main>
  )
}
