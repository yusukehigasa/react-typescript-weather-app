import React from 'react';
import Form from '../../src/components/Form';
import { render } from '@testing-library/react';

describe('Form', () => {
  it('should render the Form', () => {
    const setCity = jest.fn();
    const getWeather = jest.fn();
    const city = 'JAPAN';

    const { getByTestId } = render(
      <Form setCity={setCity} city={city} getWeather={getWeather} />,
    );

    expect(getByTestId('button-submit')).toBeTruthy();
  });
});
