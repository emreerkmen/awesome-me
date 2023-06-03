import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import { remark } from "remark";

const experiencesDirectory = path.join(process.cwd(), "experiences");

export interface ExperienceData {
  id: string;
  content: string;
  [key: string]: any;
}

export async function getSortedExperiencesData(): Promise<ExperienceData[]> {
  const test: string = "content";
  // Get file names under /experiences
  const fileNames = fs.readdirSync(experiencesDirectory);
  const allExperiencesData: Promise<ExperienceData[]> = Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(experiencesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the experience metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(remarkHtml)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id
      return {
        id,
        content: contentHtml,
        ...matterResult.data,
      };
    })
  );

  // Sort experiences by date
  return Promise.resolve(
    (await allExperiencesData).sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
  );
}
