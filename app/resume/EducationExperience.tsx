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
    <section className="mb-8">
      <h3 className="text-2xl mb-2 font-semibold">{schoolName}</h3>
      <h5 className="text-sm mb-6">{dates}</h5>

      <ul className="list-disc list-outside">
        {stuffLearned?.map((item) => {
          return (
            <li className="mb-3 ml-3 pl-2 leading-5" key={item}>
              {item}
            </li>
          );
        })}
      </ul>

      <hr className="mb-6 mt-6" />
    </section>
  );
};
