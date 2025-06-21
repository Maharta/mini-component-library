import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    height: 36,
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const sizeStyle = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          '--iconSize': sizeStyle.iconSize + 'px',
        }}
      >
        <Icon
          id={icon}
          size={sizeStyle.iconSize}
          strokeWidth={sizeStyle.borderThickness}
        />
      </IconWrapper>
      <TextInput
        style={{
          '--height': sizeStyle.height / 16 + 'rem',
          '--width': width + 'px',
          '--fontSize': sizeStyle.fontSize / 16 + 'rem',
          '--borderThickness': sizeStyle.borderThickness + 'px',
        }}
        type="text"
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--iconSize);
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--fontSize);
  padding: 0;
  padding-left: var(--height);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
