import { experienceData, Company, WorkExperienceDatum } from "./experience";

interface WorkExperienceProps {
  company: Company;
  last: boolean;
}

export const WorkExperience = ({
  company,
  last,
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
    <section className="mb-8 print:mb-4">
      <h3 className="text-2xl mb-2 font-semibold print:text-lg print:mb-1">
        {headline}
      </h3>
      <h5 className="text-sm mb-6 print:text-xs print:mb-3">{dates}</h5>

      <ul className="list-disc list-outside">
        {workDelivered?.map((item) => {
          return (
            <li
              className="mb-3 ml-3 pl-2 leading-5 print:text-xs print:mb-2"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>

      {toolsUsed && (
        <h4 className="text-lg mt-1 font-medium print:text-base">Tools used</h4>
      )}
      <p className="inline">
        {toolsUsed?.map((item: String, i: Number) => {
          return (
            <span key="i">
              <span className="inline mb-1 pr-1 leading-5 print:text-xs">
                {item}
              </span>
              {i !== toolsUsed.length - 1 && (
                <span className="print:text-xs">&#x2022; </span>
              )}
            </span>
          );
        })}
      </p>
      {!last && <hr className="mb-6 mt-6 print:mb-3 print:mt-3" />}
    </section>
  );
};
