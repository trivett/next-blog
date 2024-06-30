import { educationData, Institution, EducationDatum } from "./experience";

interface EducationExperienceProps {
  institution: Institution;
  last: boolean;
}

export const EducationExperience = ({
  institution,
  last,
}: EducationExperienceProps): JSX.Element => {
  const { schoolName, dates, stuffLearned }: EducationDatum =
    educationData[institution];

  return (
    <section className="mb-8 print:mb-4">
      <div className="flex mb-2 flex-row flex-wrap justify-between items-center">
        <h3 className="text-xl font-semibold print:text-base">{schoolName}</h3>
        <h5 className="text-sm print:text-xs">{dates}</h5>
      </div>

      <ul className="list-disc list-outside">
        {stuffLearned?.map((item) => {
          return (
            <li
              className="mb-3 ml-3 pl-2 leading-5 print:text-xs print:mb-1"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>

      {!last && <hr className="mb-6 mt-6 print:mb-1 print:mt-1" />}
    </section>
  );
};
