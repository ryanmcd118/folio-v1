import React from 'react';
import { Link } from 'gatsby';
import { useScrollTo } from '../hooks';
import { MdArrowDropUp } from 'react-icons/md';
import styled from 'styled-components';

const StyledScrollToTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
    height: 30px;
    color: var(--dark-blue);
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--dark-blue);
    transition: var(--transition);
    margin: 0 auto;
    text-decoration: none;
    font-size: var(--fz-sm);
    position: relative;
    font-family: var(--font-mono);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--dark-blue);
      transform: translate(-5px, -5px);
    }

    &:hover svg {
      color: var(--primary-orange);
    }

    span {
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      font-size: 12px;
      margin-top: 10px;
      white-space: nowrap;
    }

    &:hover span,
    &:focus-visible span {
      opacity: 1;
    }
  }
`;

function ScrollToTop() {
  const { scrollToEl } = useScrollTo();

  const onClick = e => {
    scrollToEl(e);
  };

  return (
    <StyledScrollToTopContainer>
      <Link to="#intro" onClick={onClick} aria-label="Scroll to top">
        <MdArrowDropUp size={28} />
        <span>Scroll to top</span>
      </Link>
    </StyledScrollToTopContainer>
  );
}

export default ScrollToTop;
