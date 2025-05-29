Workout Tracker
Web Programming Lab 6
Project: Workout Tracker
Author: Doschinescu Dan  
Group: FAF-222

Workout Tracker Overview
Workout Tracker is a client-side web application designed to help users log and manage their workouts with ease. The app is built using React and Vite, styled with Tailwind CSS, and features light/dark mode themes. All data is persisted locally using IndexedDB, keeping users' workout history safe in their own browser.

Features
Add, edit, and delete workouts with details such as workout name, distance (km), duration (minutes), and date.

Display workout list sorted by date, with workout details clearly shown.

Light and dark themes with smooth toggling.

Data persistence using IndexedDB — your workouts stay stored in your browser.

Responsive and accessible design with clean UI components.

Main Flows
1. Home Page
View a list of all workouts with key details and options to edit or delete each entry.

2. Add Workout
Fill out the workout form with name, distance, and duration. The current date is automatically assigned. Submitting adds the workout to the list and saves it in IndexedDB.

3. Edit Workout
Edit existing workouts directly from the list. Changes update the list and persist in IndexedDB.

4. Delete Workout
Remove workouts from the list and IndexedDB with a single click.

5. Theme Switching
Toggle between light and dark mode using a button; the entire app theme updates instantly.

How It Works
All workout data is stored locally in the browser using IndexedDB for persistent storage.

React manages the UI state with hooks, and data synchronization with IndexedDB happens asynchronously.

The theme switcher uses React state and CSS variables to apply light and dark themes dynamically.

Workouts are displayed in a sorted list with proper formatting for dates and durations.

Project Structure
bash
Копировать
Редактировать
src/
├── components/       # Reusable UI components (WorkoutList, WorkoutForm, ThemeToggle)
├── hooks/            # Custom React hooks (e.g., for IndexedDB interactions)
├── styles/           # CSS files and Tailwind config
├── utils/            # Utility functions (date formatting, IndexedDB wrappers)
├── App.jsx           # Main app component with state and logic
├── index.jsx         # React entry point