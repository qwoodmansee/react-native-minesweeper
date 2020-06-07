/* eslint-disable react/prop-types */
import CustomButton from '@core/src/components/custom-button';
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Custom Button', module).add('default', () => (
  <CenteredView>
    <CustomButton
      onPress={() => {}}
      text={'this is a button'}
    />
  </CenteredView>
));
