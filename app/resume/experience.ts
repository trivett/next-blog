import { title } from "process";

export enum Company {
  careOf = "careOf",
  fabric = "fabric",
  google = "google",
  studyAbroadApartments = "studyAbroadApartments",
  generalAssembly = "generalAssembly",
  twoU = "twoU",
  journalism = "journalism",
  // teaching = "teaching",
}

export interface WorkExperienceDatum {
  companyName: String;
  title: String;
  dates: String;
  workDelivered: String[];
  toolsUsed?: String[];
}

export type WorkExperienceData = {
  [key in Company]: WorkExperienceDatum;
};

export const experienceData: WorkExperienceData = {
  careOf: {
    companyName: "Care/Of",
    title: "Senior Software Engineer",
    dates: "Oct 2020 - July 2024",
    workDelivered: [
      "Developed new features and maintained systems supporting customer retention at a direct-to-consumer health supplement delivery startup.",
      "Spearheaded design and planning of major greenfield projects such as the complete revamp of our mobile app.",
      "Built back end APIs servicing both mobile app and web.",
      "Proactively pushed for tech debt cleanup and refactoring, identified and deleted a lot of dead code.",
      "Leveraged database views and caching to improve performance.",
      "Found and addressed customer-facing accessibility issues.",
      "Integrated with analytics and other third party services.",
      "Fashioned a homespun first party analytics service using Kinesis, S3, and Redshift",
      "Built tools to streamline customer service.",
      "Implemented features to reduce churn and increase retention.",
      "Promoted to Senior level in Fall 2021. Proud (but not excessively proud apparently) three time recipient of the '#behumble' core value award.",
    ],

    toolsUsed: [
      "Ruby on Rails",
      "NextJS",
      "React",
      "PostgreSQL",
      "Redis",
      "RSpec",
      "Styled Components",
      "GraphQL",
      "Sidekiq",
      "Grape",
      "JSON:API",
      "Terraform",
      "Heroku",
      "AWS",
    ],
  },

  fabric: {
    companyName: "Fabric Technologies",
    title: "Senior Software Engineer",
    dates: "Jan 2019 - Oct 2020",
    workDelivered: [
      "Created customer-facing and back office software on a small fast paced team for a life insurance startup.",
      "Worked in a cutting edge serverless stack with no back end framework.",
      "Participated in the company-wide migration to TypeScript.",
      "Spearheaded projects focused on performance optimization, automation of manual tasks, and UX improvements.",
      "Collaborated closely with customer service to triage, debug, and eventually prevent bugs in production.",
    ],
    toolsUsed: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS Lambda",
      "Dynamo DB",
      "Jest",
      "React",
      "Redux",
      "Gatsby",
      "Java",
    ],
  },

  google: {
    companyName: "Google",
    title: "Software Engineering Contractor",
    dates: "Aug 2017 - Dec 2018",
    workDelivered: [
      "Delivered full stack features for the Local Guides web application, a program that encouraged users to add and update content in Google Maps.",
      "Created data visualization features for users to see how their contributions stack up.",
      "Worked on an internal tool automatically generating natural language for describing places on Maps based on metadata.",
    ],
    toolsUsed: [
      "AngularJS",
      "Angular",
      "JavaScript",
      "Python",
      "Google Cloud Platform",
      "Piper",
    ],
  },
  studyAbroadApartments: {
    companyName: "Study Abroad Apartments",
    title: "Lead Engineer",
    dates: "Jul 2016 - Aug 2017",
    workDelivered: [
      "Led all aspects of full-stack development and design for a small startup providing international accommodation for students.",
      "Made high-level decisions on product direction as lead (sole) developer.",
      "Interviewed, hired, and mentored a junior developer.",
      "Instituted agile practices and continuous integration to streamline and organize development processes.",
    ],
    toolsUsed: ["Ruby on Rails", "AngularJS", "PostgreSQL", "JavaScript"],
  },

  generalAssembly: {
    companyName: "General Assembly",
    title: "Part time instructor",
    dates: "Jul 2015 - May 2019",
    workDelivered: [
      "Developed curriculum and taught night classes on back end web development for students with various programming backgrounds.",
      "Held weekly mentoring sessions teaching Web Development Immersive graduates more advanced topics.",
      "Helped students with personal projects and interview preparation.",
      "Taught two day Programming for Non Programmers workshops which took users from their first line of HTML to building interactive data-driven applications with JavaScript.",
    ],
  },

  twoU: {
    companyName: "2U Inc",
    title: "Implementation engineer",
    dates: "Jun 2014 - Jul 2016",
    workDelivered: [
      "Built and deployed services such as college applications, marketing sites, and learning management systems for major U.S. universities' online graduage degree offerings.",
      "Worked with a complex tangle of microservices built by siloed teams using various frameworks and languages.",
      "Practiced agile methodologies in a deadline-driven environment.",
      "Worked with new and mature code bases.",
    ],
    toolsUsed: [
      "Python",
      "Salesforce",
      "Flask",
      "AngularJS",
      "jQuery",
      "Jenkins",
      "MongoDB",
      "JavaScript",
      "Node.js",
    ],
  },

  journalism: {
    companyName: "Freelance Journalism/Translation",
    title: "",
    dates: "Nov 2008 - Feb 2014",
    workDelivered: [
      "Helped start a company in Yokohama, Japan where I wrote, conducted interviews, translated, took photos, edited ,and sold ads for several arts and culture magazines.",
      "My work has also appeared in Quartz, Business Insider, City Limits, Skift, WNYC, and other outlets. Translated Japanese news for Nippon TV",
    ],
  },

  // teaching: {
  //   companyName: "Teaching English in Japan and the United States",
  //   title: "",
  //   dates: "Jan 2005 - Jul 2010",
  //   workDelivered: [
  //     "Tutored Expository Writing students at Rutgers University.",
  //     "Taught English grammar in part time courses in ",
  //   ],
  // },
};
