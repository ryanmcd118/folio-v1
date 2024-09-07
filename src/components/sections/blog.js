import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const StyledBlogSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .post {
    padding: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

    h3 {
      margin-bottom: 10px;
      color: var(--primary-color);
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        limit: 5
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <StyledBlogSection id="blog">
      <h2>Latest Blog Posts</h2>
      <div className="posts-grid">
        {posts.map(({ node }) => (
          <div className="post" key={node.frontmatter.title}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
            <p>{node.frontmatter.excerpt}</p>
            <Link to={`/blog/${node.frontmatter.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </StyledBlogSection>
  );
};

export default Blog;
