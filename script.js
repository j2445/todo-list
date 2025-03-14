@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    min-width: 400px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.title {
    color: #2c3e50;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
}

.todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
}

.input {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #f5f6fa;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.input:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fda085;
}

.add-btn {
    background-color: #f6d365;
    border: none;
    border-radius: 8px;
    color: white;
    padding: 0 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-btn:hover {
    background-color: #fda085;
    transform: scale(1.05);
}

.todos {
    list-style-type: none;
}

.todos li {
    background-color: #f5f6fa;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeInScale 0.8s ease;
}

@keyframes fadeInScale {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.title i {
    animation: rotate 2s infinite linear;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.add-btn i {
    transition: transform 0.3s ease;
}

.add-btn:hover i {
    transform: rotate(90deg);
}

.todos li {
    position: relative;
    overflow: hidden;
}

.todos li::before {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: 0.5s;
}

.todos li:hover::before {
    left: 100%;
}

.developer-credit {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(0,0,0,0.1);
    color: #2c3e50;
    font-size: 0.9rem;
    animation: fadeIn 1s ease;
}

.developer-credit .fa-heart {
    color: #e74c3c;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
}

.todos li.completed {
    animation: slideComplete 0.5s ease;
}

@keyframes slideComplete {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
}

.input:focus {
    animation: glow 1.5s infinite;
}

@keyframes glow {
    0% { box-shadow: 0 0 0 2px rgba(253, 160, 133, 0.4); }
    50% { box-shadow: 0 0 0 4px rgba(253, 160, 133, 0.2); }
    100% { box-shadow: 0 0 0 2px rgba(253, 160, 133, 0.4); }
}
