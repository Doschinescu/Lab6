import { openDB } from 'idb';

const DB_NAME = 'workout-tracker';
const STORE_NAME = 'workouts';

export const initDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const getAllWorkouts = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const addWorkout = async (workout) => {
  const db = await initDB();
  await db.put(STORE_NAME, workout);
};

export const deleteWorkout = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};

export const updateWorkout = async (workout) => {
  const db = await initDB();
  await db.put(STORE_NAME, workout);
};
