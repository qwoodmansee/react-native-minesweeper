import CustomButton from '@core/src/components/custom-button';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

describe('CustomButton', () => {
  it('renders the button with the passed in text', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <CustomButton
        onPress={onPressMock}
        text={'Button Test Text'}
      />);

    getByText('Button Test Text');
  });

  it('calls the on press function when clicked', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <CustomButton
        onPress={onPressMock}
        text={'Button Test Text'}
      />);

    const button = getByText('Button Test Text');
    fireEvent.press(button);
    expect(onPressMock.mock.calls.length).toEqual(1);
  });
});
