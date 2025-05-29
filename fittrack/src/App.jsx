import { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import './App.css';

const LOCAL_STORAGE_WORKOUTS_KEY = 'workout-tracker-data';
const LOCAL_STORAGE_THEME_KEY = 'workout-tracker-theme';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedWorkouts = localStorage.getItem(LOCAL_STORAGE_WORKOUTS_KEY);
    if (storedWorkouts) setWorkouts(JSON.parse(storedWorkouts));

    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (storedTheme) setDarkMode(storedTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_WORKOUTS_KEY, JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light');
    }
  }, [darkMode]);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const handleLikeWorkout = (id) => {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, liked: !w.liked } : w))
    );
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="App">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🏋️ Workout Tracker</h1>
        <button onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer' }}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutList
        workouts={workouts}
        onLike={handleLikeWorkout}
        onDelete={handleDeleteWorkout}
      />
    </div>
  );
}

export default App;
