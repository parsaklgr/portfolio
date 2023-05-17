import WelcomeComponent from "../components/welcome/welcome_component";
import ProjectsComponent from "../components/projects/projects_component";
import EducationComponent from "../components/education/education_component";
import SkillsComponent from "../components/skills/Skills_component";
import ContactComponent from "../components/contact/contact_component";
import path from "path";
import { promises as fs } from "node:fs";

export default async function Home() {
  const dataDirectory = path.join(process.cwd(), "statics/data.json");
  const dataContent = await fs.readFile(dataDirectory, "utf-8");
  const data = JSON.parse(dataContent);
  return (
    <>
      <WelcomeComponent />
      <ProjectsComponent projects={data["projects"]} />
      <EducationComponent educations={data["educations"]} />
      <SkillsComponent skills={data["skills"]} />
      <ContactComponent />
    </>
  );
}
