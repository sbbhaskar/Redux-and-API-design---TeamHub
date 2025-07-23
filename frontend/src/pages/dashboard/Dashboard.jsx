// frontend/src/pages/dashboard/Dashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTasks,
  markTaskDone,
  deleteTask
} from '../../redux/slices/taskSlice';
import AddTaskForm from '../../components/AddTaskForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-600 p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 drop-shadow text-center">
          Welcome, <span className="text-yellow-300">{user?.name || 'User'}</span> 🎉
        </h1>

        <AddTaskForm />

        {error && <p className="text-red-300 text-sm mt-4 text-center">{error}</p>}
        {loading && <p className="text-blue-200 text-sm mt-4 text-center">Loading tasks...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tasks.length === 0 && !loading ? (
            <p className="col-span-full text-center text-white">No tasks found.</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white text-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
              >
                <h2 className="text-lg font-bold text-indigo-700 mb-1">{task.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{task.description}</p>

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      task.status === 'done'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {task.status || 'todo'}
                  </span>

                  <div className="flex gap-2">
                    {task.status !== 'done' && (
                      <button
                        onClick={() => dispatch(markTaskDone(task._id))}
                        className="text-xs px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        ✅ Done
                      </button>
                    )}
                    <button
                      onClick={() => dispatch(deleteTask(task._id))}
                      className="text-xs px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
