import { WorkExperience } from "./WorkExperience";
import { EducationExperience } from "./EducationExperience";
import { Company } from "./experience";
import { Institution } from "./experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold">Vincent Trivett</h1>

      <p className="mb-4">
        I am a generalist full stack developer. I have about ten years of
        experience creating software for companies large and small.
      </p>

      <h2 className="text-3xl mb-4" font-semibold>
        Work experience
      </h2>
      <hr className="mb-6 mt-4" />

      {Object.values(Company).map((company) => (
        <WorkExperience company={company} key={company} />
      ))}

      <section className="mb-8">
        <h3 className="text-3xl mb-4">Education</h3>
        <hr className="mb-6 mt-6" />
        {Object.values(Institution).map((institution) => (
          <EducationExperience institution={institution} key={institution} />
        ))}
      </section>
    </section>
  );
}
