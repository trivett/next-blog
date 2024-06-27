import { WorkExperience } from "./WorkExperience";
import { EducationExperience } from "./EducationExperience";
import { Company } from "./experience";
import { Institution } from "./experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold print:mb-4 print:text-2xl">
        Vincent Trivett
      </h1>

      <p className="mb-4 print:mb-2">
        I am a generalist full stack developer. I have about ten years of
        experience creating software for companies large and small.
      </p>

      <h2 className="text-3xl mb-4 print:mb-2 print:text-xl" font-semibold>
        Work experience
      </h2>
      <hr className="mb-6 mt-4 print:mb-3 print:mt-2" />

      {Object.values(Company).map((company) => (
        <WorkExperience company={company} key={company} />
      ))}

      <section className="mb-8 print:mb-4">
        <h3 className="text-3xl mb-4 print:mb-2 print:text-xl">Education</h3>
        <hr className="mb-6 mt-6 print:mb-3 print:mt-2" />
        {Object.values(Institution).map((institution) => (
          <EducationExperience institution={institution} key={institution} />
        ))}
      </section>
    </section>
  );
}
