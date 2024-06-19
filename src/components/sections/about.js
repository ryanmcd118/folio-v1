import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  #my-tech {
    color: var(--primary-orange);
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      color: var(--soft-green);
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--primary-orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-strawberry);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--secondary-light-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-orange);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript/TypeScript',
    'HTML/CSS',
    'Node.js/Express',
    'GraphQL',
    'React',
    'Redux',
    'Cypress',
    'Jest',
    'Docker',
    'GitHub Actions',
    'SQL/NoSQL',
    'OAuth 2.0',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}
              Hi! My name is Ryan and I enjoy building things that make a difference. My interest in
              software engineering started back in 2008 when I learned to build custom MySpace
              themes using HTML & CSS. From there, however, much of my early professional career was
              in agriculture. Here's a bit of my story:
            </p>

            <p>
              Throughout college, I worked on organic vegetable farms, where I fell in love with
              farming. After graduating with a Bachelor of Technology in Plant Science in 2017, I
              worked at <a href="https://cornell.edu/">Cornell University</a> conducting industrial
              hemp research. Before long, I went on to start several small businesses and managed
              industrial hemp and CBD oil production throughout NY &amp; PA.
            </p>

            <p>
              During this time, I was able to grow my technical, analytical, and leadership skills,
              and by the time I started to transition to software engineering in 2020, I had nearly
              six years of management experience under my belt. My career pivot into the tech
              industry felt very natural - turns out farming and software engineering are a lot
              alike: they're both about collaborating to solve problems and growing things
              organically!
            </p>

            <p>
              Fast-forward to today, and I’ve had the pleasure of building out cool new features in
              several enterprise codebases &amp; working on a number of open-source products, as
              well as the privilege of mentoring junior developers, giving public technical
              workshops and Lunch &amp; Learns (KTs), and contributing to web development courses
              for aspiring engineers.
            </p>

            <p id="my-tech">Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
