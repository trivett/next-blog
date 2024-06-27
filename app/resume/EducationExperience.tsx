import { educationData, Institution, EducationDatum } from "./experience";

interface EducationExperienceProps {
  institution: Institution;
}

export const EducationExperience = ({
  institution,
}: EducationExperienceProps): JSX.Element => {
  const { schoolName, dates, stuffLearned }: EducationDatum =
    educationData[institution];

  return (
    <section className="mb-8 print:mb-4">
      <h3 className="text-2xl mb-2 font-semibold print:text-xl print:mb-1">
        {schoolName}
      </h3>
      <h5 className="text-sm mb-6 print:text-xs print:mb-3">{dates}</h5>

      <ul className="list-disc list-outside">
        {stuffLearned?.map((item) => {
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

      <hr className="mb-6 mt-6 print:mb-3 print:mt-3" />
    </section>
  );
};
