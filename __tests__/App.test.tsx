import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should render the App', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('wrapper')).toBeTruthy();
  });
});
