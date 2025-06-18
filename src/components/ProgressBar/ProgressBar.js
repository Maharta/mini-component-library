/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--innerHeight': '8px',
  },
  medium: {
    '--height': '12px',
    '--innerHeight': '12px',
  },
  large: {
    '--height': '24px',
    '--innerHeight': '16px',
  },
};

const getBorderRadius = (value) => {
  if (value === 100) return '6px';
  if (value >= 99.8) return '4px';
  return '4px 0 0 4px';
};

const ProgressBar = ({ value, size }) => {
  const style = {
    ...SIZES[size],
    '--borderRadius': getBorderRadius(value),
  };

  return (
    <Wrapper style={style} size={size}>
      <Progress
        role="progressbar"
        value={value}
        aria-valuenow={value}
      ></Progress>
      <VisuallyHidden>Progress Bar at {value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: var(--height);
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(p) => (p.size === 'large' ? '4px' : 0)};
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value + '%'};
  height: var(--innerHeight);
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
