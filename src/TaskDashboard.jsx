import './app.css';

function TaskDashboard() {
    // Dynamic Greeting
    const userName = "John Smith";

    // Conditional Content
    const isPremium = true;

    // Task List
    const tasks = [
        { taskName: "Complete project proposal", completed: true },
        { taskName: "Review team feedback", completed: false },
        { taskName: "Update website content", completed: true },
        { taskName: "Schedule client meeting", completed: false }
    ];

    // Stretch Goal: Task Counts
    const completedTasks = tasks.filter(task => task.completed).length;
    const incompleteTasks = tasks.length - completedTasks;

    // Stretch Goal: Current Date
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="container">
            {/* Stretch Goal: Date Display */}
            <h2>Today's Date: {currentDate}</h2>

            {/* Dynamic Greeting */}
            <h1>Welcome, {userName}!</h1>

            {/* Conditional Content */}
            {isPremium ? (
                <p className="premium-message">Thank you for being a premium member!</p>
            ) : (
                <p className="upgrade-message">Upgrade to premium to enjoy exclusive features!</p>
            )}

            {/* Task List */}
            <h3>Your Tasks</h3>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            color: task.completed ? 'green' : 'inherit'
                        }}
                    >
                        {task.completed ? '✅' : '❌'} {task.taskName}
                    </li>
                ))}
            </ul>

            {/* Stretch Goal: Task Counts */}
            <p>
                Completed Tasks: {completedTasks} | Incomplete Tasks: {incompleteTasks}
            </p>
        </div>
    );
}

export default TaskDashboard