import { experienceData, Company, WorkExperienceDatum } from "./experience";

interface WorkExperienceProps {
  company: Company;
}

export const WorkExperience = ({
  company,
}: WorkExperienceProps): JSX.Element => {
  const {
    companyName,
    title,
    dates,
    workDelivered,
    toolsUsed,
  }: WorkExperienceDatum = experienceData[company];

  const headline = title ? `${companyName} - ${title}` : companyName;
  return (
    <section className="mb-8">
      <h3 className="text-2xl">{headline}</h3>
      <h5 className="text-sm mb-6">{dates}</h5>

      {/* <h4 className="text-xl mt-4 mb-4">Work delivered</h4> */}
      <ul className="list-disc list-outside">
        {workDelivered?.map((item) => {
          return <li className="mb-3 ml-3 pl-2 leading-5">{item}</li>;
        })}
      </ul>

      {toolsUsed && (
        <h4 className="text-lg mt-1 underline underline-offset-2">
          Tools used
        </h4>
      )}
      <p className="inline">
        {toolsUsed?.map((item: String, i: Number) => {
          return (
            <>
              <span className="inline mb-1 pr-1 leading-5">{item}</span>
              {i !== toolsUsed.length - 1 && <span>&#x2022; </span>}
            </>
          );
        })}
      </p>
      <hr className="mb-6 mt-6" />
    </section>
  );
};
