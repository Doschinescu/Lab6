import { useState } from 'react';

const WorkoutForm = ({ onAddWorkout }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !duration.trim()) return;

    const newWorkout = {
      id: Date.now(),
      name,
      duration,
      liked: false,
    };

    onAddWorkout(newWorkout);
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <h2>Add Workout</h2>
      <input
        type="text"
        placeholder="Workout name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Duration (e.g., 30 mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkoutForm;
