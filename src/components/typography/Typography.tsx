import React from 'react';

export interface TypographyProps {
  content: string;
  fontSize?: number;
  animation?: boolean;
}

const defaultMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'span'
}

export const Typography: React.FC<TypographyProps> = ({
  fontSize,
  content,
  animation,
  ...props
}) => {
  const mode = animation ? 'typography-body--animated' : 'typography-body';
  return (
      <span className={mode} style={{margin: '5px 5px 5px 5px', fontSize: fontSize}}>
          {content}
      </span>
  );
};
