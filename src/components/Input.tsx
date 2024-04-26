import styled from 'styled-components';
import { InputInfo } from '../types/input';
import { forwardRef } from 'react';
import { useInput } from '../hooks/useInput';

interface Props {
  info: InputInfo;
  handleInput: (value: string) => void;
  isError: boolean;
  handleErrorMessage: (errorMessage: string) => void;
  onNext: () => void;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { info, isError } = props;
  const { handleChange, handleBlur, handleKeyDown } = useInput(props);

  return (
    <StyledInput
      ref={ref}
      $error={isError}
      type={info.type || 'text'}
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
});

const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? 'red' : 'grey')};
  outline-color: ${({ $error }) => ($error ? 'red' : 'grey')};
  border-radius: 3px;
`;
