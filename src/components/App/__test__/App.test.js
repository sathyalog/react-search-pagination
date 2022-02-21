import { render, screen } from '@testing-library/react'
import App from '../index';

it('renders container with components', () => {
    render(<App />);

    const image = screen.getByAltText("logo");
    expect(image.src).toContain("http://localhost/sky-logo.jpg");
    
    const findSearchBarComponent = screen.queryByPlaceholderText('Search Query...')
    expect(findSearchBarComponent).toBeInTheDocument();

})