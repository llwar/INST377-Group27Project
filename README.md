# University Quotes

**Group Members:** Larissa Warthen, Ethan Van Amburg, Selina Liu  
**Group Number:** INST377-Group27Project

## Description of Target Browsers
- Google Chrome
- Mozilla Firefox
- Safari

## Description
Our team aims to provide support for the mental health of college students. College can be a very stressful time, and we hope to encourage and inspire students with inspirational quotes. The biggest stakeholders of this problem are the college students themselves. They are the target audience with the biggest hits mentally during the semester. Others, however, can also benefit from students improving their mental health and be stakeholders in a project like this, such as teachers and the university as a whole. We will be using [Zenquotes](https://zenquotes.io/), which is a list of zen or inspirational quotes to motivate the user. Sometimes all someone needs is a little encouragement, or something to help them think positively about themselves to aid them in a hard time, and our application would be that little reminder. Users can click a button that will display a random quote from the API, or choose from a selection of keywords to display a quote that would be more relevant to their situation. If the user prefers calming visuals, they could toggle an option to have the quotes generated with an image rather than only the text.

## User Manual

### Installation
1. Open your web browser and navigate to http://localhost:4000/index.html.
2. Fill out the form with your first and last name.
3. Click the "Submit" button to log your name.
4. Click the "Generate Random Image and Quote" button to see a new image and quote.

### Usage
1. Follow the installation steps to access the application.
2. Use the form to log your name.
3. Press the button to generate a random image and quote.

### Random Image and Quote
- Click the "Generate Random Image and Quote" button to refresh the content.
- Enjoy a new random image and quote each time you click the button.

## About

University Quotes was created as a group project for the INST 377 class. It uses Node.js for server-side development, Supabase for data storage, and integrates the Zenquotes API for fetching random images and quotes. The application aims to provide a simple and enjoyable user experience.

## Developer Manual

### Installation
1. Clone the GitHub repository to your local machine.
2. Run `npm install` to install dependencies.
3. Set up Supabase and update the connection details in the code.
4. Start the server using `npm start`.

### Running the Application
- Run the server using `npm start`.
- Access the application at http://localhost:4000/index.html.

### Testing
1. Fill in your name, press submit, and double-check the Supabase to see if your name has uploaded to the database.
2. Press the "Click to Show a Zen Quote" button to see if the API is working.

### API Documentation
- **POST /user:** Adds a new user to the database. Requires JSON with "firstName" and "lastName" fields.
- **GET /random-quote-image:** Fetches a random quote and image from the Zenquotes API.

### Known Bugs and Roadmap
- No known bugs at the moment.
- Future development:
  - Implement user authentication.
  - Improve UI/UX for a more polished look.

### Code Guidelines

**Front End:**
- Uses FetchAPI for data loading.
- Styled using contemporary CSS with flexbox.
- Utilizes a JavaScript library [anime.js](https://animejs.com/) installed through npm.
- Connect to the library-specific JS file.
- Create items with HTML, format with CSS, and animate with JS functions.

**Back End:**
- Connects to Supabase for data storage.
- Implements two API endpoints for fetching data.
