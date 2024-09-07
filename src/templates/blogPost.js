import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogPostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  p {
    color: #666;
    font-size: 1rem;
  }

  .post-content {
    margin-top: 2rem;
    line-height: 1.6;
  }
`;

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <BlogPostWrapper>
      <Helmet>
        <title>{frontmatter.title} | My Blog</title>
        <meta name="description" content={frontmatter.excerpt || frontmatter.title} />
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </BlogPostWrapper>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        excerpt: PropTypes.string,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        excerpt
      }
      html
    }
  }
`;

export default BlogPostTemplate;
