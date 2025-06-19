/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--outerRadius': '4px',
    '--padding': 0,
  },
  medium: {
    '--height': '12px',
    '--outerRadius': '4px',
    '--padding': 0,
  },
  large: {
    '--height': '16px',
    '--outerRadius': '8px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const style = {
    ...SIZES[size],
    '--width': value + '%',
  };

  return (
    <Wrapper style={style} size={size}>
      <BarWrapper>
        <Bar role="progressbar" aria-valuenow={value}></Bar>
      </BarWrapper>
      <VisuallyHidden>Progress Bar at {value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--outerRadius);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  /* hidden overflow for Bar rounding inside the div when it near 100% */
  overflow: hidden;
  border-radius: var(--outerRadius);
`;

export default ProgressBar;
