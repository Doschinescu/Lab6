import { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import {
  getAllWorkouts,
  addWorkout,
  deleteWorkout,
  updateWorkout,
} from './utils/db';
import './App.css';

const LOCAL_STORAGE_THEME_KEY = 'workout-tracker-theme';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const stored = await getAllWorkouts();
      setWorkouts(stored);
    };

    fetchWorkouts();

    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (storedTheme) setDarkMode(storedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light');
    }
  }, [darkMode]);

  const handleAddWorkout = async (workout) => {
    await addWorkout(workout);
    setWorkouts((prev) => [...prev, workout]);
  };

  const handleLikeWorkout = async (id) => {
    const updated = workouts.map((w) =>
      w.id === id ? { ...w, liked: !w.liked } : w
    );
    const workoutToUpdate = updated.find((w) => w.id === id);
    await updateWorkout(workoutToUpdate);
    setWorkouts(updated);
  };

  const handleDeleteWorkout = async (id) => {
    await deleteWorkout(id);
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="App">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1>🏋️ Workout Tracker</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ cursor: 'pointer' }}
          aria-label="Toggle dark mode"
        >
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
