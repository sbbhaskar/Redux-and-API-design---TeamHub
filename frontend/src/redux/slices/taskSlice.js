// frontend/src/redux/slices/taskSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosConfig';

// ✅ FETCH TASKS
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/tasks');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

// ✅ ADD TASK
export const addTask = createAsyncThunk('tasks/addTask', async (taskData, thunkAPI) => {
  try {
    const res = await axios.post('/tasks', taskData);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

// ✅ MARK TASK AS DONE
export const markTaskDone = createAsyncThunk('tasks/markTaskDone', async (id, thunkAPI) => {
  try {
    const res = await axios.patch(`/tasks/${id}`, { status: 'done' });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

// ✅ DELETE TASK
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id, thunkAPI) => {
  try {
    await axios.delete(`/tasks/${id}`);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      // MARK DONE
      .addCase(markTaskDone.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.tasks.findIndex((t) => t._id === updated._id);
        if (index !== -1) state.tasks[index] = updated;
      })

      // DELETE
      .addCase(deleteTask.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.tasks = state.tasks.filter(task => task._id !== deletedId);
      });
  },
});

export default taskSlice.reducer;
