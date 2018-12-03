import React from "react";
import { Button } from "reactstrap";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import TitleSection from "../../components/title-section";
import TextSection from "../../components/text-section";

import PatternBlue from "../../assets/pattern_blue.svg";

const TheBoilerPage = ({ data, location }) => {
  const sections = [
    {
      title: "Applications are Open!",
      subheading: "Apply now to join our 2019 cohort",
      paragraphs: [
        <>
          The Boiler is a twelve-week startup accelerator program and
          competition hosted by The Anvil and open to Purdue students and alumni
          from the past two years.
        </>,
        <>
          You can apply to The Boiler today! Fill out the application below, and
          The Boiler team will get in touch soon. Applications are open until
          January 18.
        </>,
        <>
          <a href="https://anvilstartups1.typeform.com/to/JCALAB">
            <Button color="primary">Apply Now</Button>
          </a>
        </>
      ]
    },
    {
      title: "The Boiler History",
      subheading: "Propelling the Success of Students for Five Years Running",
      imageFluid: data.imageOne.childImageSharp.fluid,
      alt: "The Founders of Mimir",
      paragraphs: [
        <>
          In 2014,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mimirhq.com/"
          >
            Mimir
          </a>
          , a technology education company focused on a platform for managing
          computer science classrooms, won the first Boiler accelerator program.
          Soon after winning, the founders then took the company through Y
          Combinator, and moved to Indianapolis to raise multiple successful
          rounds of funding. Mimir’s founders have been featured in{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.forbes.com/30-under-30-2017/education/"
          >
            Forbes 30 under 30
          </a>
          .
        </>,
        <>
          The Boiler has continued for four years running, funding startups in
          the Purdue community with equity-free grants such as Explore
          Interactive, and Socio.
        </>
      ]
    },
    {
      title: "Programming",
      subheading:
        "Assisting startups with mentorship, workshops, and access to funding",
      imageFluid: data.imageTwo.childImageSharp.fluid,
      alt: "The Founders of Mimir",
      paragraphs: [
        <>
          Startups in our cohort will attend workshops every other week.
          Programming will be focused on giving startups the tools necessary to
          have revenue by the end of the program. In addition, startups attend
          office hours, where startup founders meet with student and
          professional mentors. In the past, these office hours have been the
          key to holding founders accountable and pushing them to develop their
          business.
        </>
      ]
    },
    {
      title: "Demo Day 2019",
      subheading:
        "Mark your calandars for a showcase of Purdue Student Entrepreneurship",
      imageFluid: data.imageThree.childImageSharp.fluid,
      alt: "Last year's Demo Day",
      paragraphs: [
        <>
          The Boiler Demo Day, held on <b>April 20, 2019</b>, will be showcase
          of our cohort's work. Each startup will present their final pitches to
          a panel of investors, entrepreneurs, and industry experts, and will
          have an opportunity to see detailed feedback on their pitches and
          business plan. The audience normally consists of angel investors,
          entrepreneurs, and more. Six judges will distribute equity-free
          funding to each of the top 5 teams.
        </>
      ]
    }
  ];

  return (
    <Layout location={location} pageTitle="The Boiler 2019">
      <TitleSection
        Pattern={PatternBlue}
        title="The Boiler 2019"
        theme="blue"
      />
      {sections.map((section, index) => (
        <TextSection
          Pattern={PatternBlue}
          {...section}
          index={index}
          key={index}
        />
      ))}
    </Layout>
  );
};

export default TheBoilerPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "img/mimir-under30.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "img/boilerWorkshops.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "img/boilerDemoDay.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
