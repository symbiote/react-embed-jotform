import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../test/setup';
import { JotForm } from './JotForm';

describe('JotForm', () => {
  beforeEach(() => {
    // Clean up any appended scripts between tests
    document.body.innerHTML = '';
  });

  it('renders with the correct props', () => {
    const props = {
      formId: '1234567890',
      className: 'test-class',
    };

    render(<JotForm {...props} />);

    const container = screen.getByTestId('jotform-container');
    expect(container).toHaveClass('test-class');
  });

  it('applies custom styles when provided', () => {
    const customStyles = { width: '500px' };

    render(<JotForm formId="1234567890" style={customStyles} />);
    const container = screen.getByTestId('jotform-container');
    expect(container).toHaveStyle(customStyles);
  });

  it('cleans up script on unmount', () => {
    const { unmount } = render(<JotForm formId="1234567890" />);
    const formContainer = screen.getByTestId('jotform-container').children[0];
    expect(formContainer.innerHTML).not.toBe('');

    unmount();
    expect(formContainer.innerHTML).toBe('');
  });

  it('injects jotform script', () => {
    render(<JotForm formId="1234567890" />);

    const script = document.querySelector('script');
    expect(script).toHaveAttribute('src', `https://form.jotform.com/jsform/1234567890`);
  });

  it('reinjects script when formId changes', () => {
    const { rerender } = render(<JotForm formId="1234567890" />);
    const initialScript = document.querySelector('script');
    expect(initialScript).toHaveAttribute('src', `https://form.jotform.com/jsform/1234567890`);

    rerender(<JotForm formId="987654321" />);
    const updatedScript = document.querySelector('script');
    expect(updatedScript).toHaveAttribute('src', `https://form.jotform.com/jsform/987654321`);
  });
});
