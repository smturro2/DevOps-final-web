import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders E-Commerce Store title', () => {
  render(<App />);
  const titleElement = screen.getByText(/E-Commerce Store/i);
  expect(titleElement).toBeInTheDocument();
});
