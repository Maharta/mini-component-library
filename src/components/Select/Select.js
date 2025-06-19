import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <Value>{displayedValue}</Value>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  appearance: none;
  padding: 0;
  margin: 0;
`;

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  color: ${COLORS.gray700};
  font-weight: 400;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Value = styled.span`
  margin-right: 20px;
`;

export default Select;
