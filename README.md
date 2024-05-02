Sure, here's the README file with proper formatting:

# Vehicle Data Table

This project is a React application built with Next.js that displays vehicle data in a paginated table format. Users can search within the data using a search form. The page is responsive, and the UI/UX scales and changes as per the screen form factor. The app loads the page as a server-side rendered page, and the search/pagination works on the client-side.

## Features

- Display vehicle data in a paginated table
- Search functionality to filter data
- Responsive design for various screen sizes
- Server-side rendering for fast initial page load
- Client-side pagination and search for smooth user experience

## Technologies Used

- Next.js for server-side rendering
- React.js for frontend framework
- Ant Design library for React UI components
- Redux Toolkit for state management
- TypeScript for programming language
- Tailwind CSS for styling

## Project Structure

- `src/`: Contains the source code of the application
- `components/`: Contains React components
- `data/`: Contains the JSON data file (`Data.json`)
- `pages/`: Contains Next.js pages
- `store/`: Contains Redux store setup and slice
- `layout.tsx`: Root layout component
- `globals.css`: Global CSS styles

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/vehicle-data-table.git
```

Install dependencies:

```bash
cd vehicle-data-table
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the search input to search for specific vehicle data.
- Navigate through the paginated table using the pagination controls.

## Hosting

The application can be hosted on Vercel.

## Credits

This project was created by Vikas Singh Rathore.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
