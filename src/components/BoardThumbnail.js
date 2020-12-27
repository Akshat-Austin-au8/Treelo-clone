import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 80px;
  width: 280px;
  background: #516395;
  padding: 10px;
  margin: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #614385;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
