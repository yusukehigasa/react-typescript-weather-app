import React from 'react';
import Results from '../../src/components/Results';
import { render } from '@testing-library/react';

const results = {
  country: 'JAPAN',
  cityName: 'TOKYO',
  temperature: '20',
  conditionText: 'SUNNY',
  icon: 'icon.png',
};

describe('Results', () => {
  it('should render the Results', () => {
    const { getByTestId } = render(<Results results={results} />);

    expect(getByTestId('text-city')).toBeTruthy();
  });
});
