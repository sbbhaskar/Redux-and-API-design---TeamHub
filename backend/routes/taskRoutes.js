// backend/routes/taskRoutes.js (example)
router.get('/', authMiddleware, getUserTasks); // or getAllTasks
