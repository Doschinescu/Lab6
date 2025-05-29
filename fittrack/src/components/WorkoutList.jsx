const WorkoutList = ({ workouts, onLike, onDelete }) => {
  if (workouts.length === 0) {
    return <p>No workouts yet. Add one!</p>;
  }

  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id} className="workout-card">
          {/* Name (if present) */}
          {workout.name && <h2>{workout.name}</h2>}

          {/* Type (optional, fallback to “Workout”) */}
          <h3>{workout.type || 'Workout'}</h3>

          <p>⏱️ {workout.duration} min</p>
          {workout.distance && <p>📏 {workout.distance} km</p>}
          <p>🗓️ {new Date(workout.date).toLocaleString()}</p>
          {workout.notes && <p>📝 {workout.notes}</p>}

          <div className="actions">
            <button onClick={() => onLike(workout.id)}>
              {workout.liked ? '❤️ Liked' : '🤍 Like'}
            </button>
            <button
              onClick={() => onDelete(workout.id)}
              style={{ color: 'red' }}
            >
              ❌ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
