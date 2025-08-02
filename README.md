✨ Key Features
Component-Based Architecture: The application is broken down into logical components for the form, the list, and the state provider.

Efficient Form Handling: Uses the react-hook-form library for performant form validation and submission.

Centralized State Management: Employs React's Context API to manage and share application data (the list of submissions) across different components without prop drilling.

Client-Side Routing: Utilizes react-router-dom to navigate between the "Add Detail" form page and the "Job List" page.

Dynamic List Filtering: The submissions list can be easily filtered by job category (e.g., Frontend, Backend), allowing users to quickly find relevant entries.


🛠️ Technology Stack
React.js: The core library for building the user interface.

React Hook Form: For robust and efficient form management.

React Router: For handling navigation between pages.

React Context API: For global state management.

CSS: For custom styling of the components.

⚙️ How It Works
The application is built around three main parts that work together:

1. ListProvider.js (The State Manager)
This component acts as the central hub for our application's data.

It creates a ListContext.

It uses a useState hook to hold an array of submitted user data (named name in the code).

It wraps the entire application with a ListContext.Provider, making the list of users (name) and the function to update it (setName) available to any child component.

2. AddDetail.js (The Form Component)
This component renders the form for users to enter their details.

It uses the useForm hook from react-hook-form to manage the form's state, validation (required), and submission.

It uses the useContext hook to access the setName function from ListProvider.

When the form is submitted, the onSubmit function takes the form data (an object containing name, email, and category) and appends it to the global state array using setName.

After submission, it uses the useNavigate hook from react-router to redirect the user to the /job_list page.

3. List.js (The Display Component)
This component is responsible for displaying the list of all submitted applications.

It uses useContext to access the global name array (the list of all submissions).

It maintains a local state variable, filterCategory, to keep track of the selected filter option.

It filters the global list based on the filterCategory before rendering. If "All" is selected, it displays the full list.

It maps over the filteredList array to render each submission as a row in an HTML table.

It includes a Link that allows the user to navigate back to the form page to add another submission.
