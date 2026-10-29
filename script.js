console.log("файл script.js запущен");
import { greetUser } from "./helpers.js";
console.log("привет из отдельного файла JavaScript");
let pageTitle = document.querySelector("h1");

console.log(pageTitle.textContent);

pageTitle.textContent = "мой сайт становится лучше";
pageTitle.style.color = "blue";
pageTitle.style.fontSize = "40px";

let helloButton = document.querySelector("#helloButton");

helloButton.addEventListener("click", function() {
    alert("привет! рада видеть тебя на моем сайте!");
});

let savedName = localStorage.getItem("userName");

pageTitle.textContent = "привет, " + savedName + "!";

nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("change", function() {
    localStorage.setItem("userName", nameInput.value);
});

let rememberedName = localStorage.getItem("userName");

if (rememberedName) {
    pageTitle.textContent = "с возвращением, " + rememberedName + "!";
} else {
    pageTitle.textContent = "добро пожаловать на мой сайт!";
}

let greeting = document.querySelector("#greeting");

if (rememberedName) {
    greeting.textContent = greetUser(rememberedName);
} else {
    greeting.textContent = "привет! как тебя зовут?";
}

nameInput.addEventListener("input", function() {
    let name = nameInput.value.trim ();

    if (name) {
        greeting.textContent = greetUser(name);
        localStorage.setItem("userName", name);
    } else {
        greeting.textContent = "";
        localStorage.removeItem("userName");
    }
});

let clearNmaeButton = document.querySelector("#clearNameButton");
console.log("поле имени:", nameInput);

clearNmaeButton.addEventListener("click", function() {
    console.log("кнопка нажата");
    nameInput.value = "";
    greeting.textContent = "";
    localStorage.removeItem("userName");
});

let services = ["Web Design", "Development", "SEO"];

console.log(services);

console.log(services[0]);
console.log(services[1]);
console.log(services[2]);
console.log(services.length);

services.push("UI/UX Design");

console.log(services);

services.pop();

console.log(services);
console.log(services.length);

console.log(services.includes("SEO"));
console.log(services.includes("Photography"));

console.log(services.indexOf("Development"));
console.log(services.indexOf("Photography"));

console.log(services.join(", "));

let serviceLabels = services.map(function(service) {
    return "Course: " + service;
});

console.log(serviceLabels);

let designServices = services.filter(function(service) {
    return service.includes("Design");
});

console.log(designServices);

let course = {
    name: "Web Design",
    price: 150,
    duration: "2 months"
};

console.log(course);
console.log(course.name);
console.log(course.price);
console.log(course.duration);

course.price = 200;

console.log(course.price);

course.teacher = "Anna";
console.log(course.teacher);

delete course.teacher;

console.log(course);

let courseInfo = document.querySelector("#greeting");

courseInfo.textContent = course.name + " - " + course.price + " €";

console.log(course.name);
console.log(course.price);
console.log(course);

for (let key in course) {
    console.log(key, course[key]);
}

for (let key in course) {
    console.log(key + ": " + course[key])
}

let courses = [
    { name: "Web Design", price: 200 },
    { name: "HTML & CSS", price: 100 },
    { name: "JavaScript", price: 250 }
];

console.log(courses);
console.log(courses[0]);
console.log(courses[0].name);
console.log(courses[0].price);
console.log(courses[1].name);
console.log(courses[1].price);

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].name + " - " + courses[i].price + " €");
}

let affordableCourses = courses.filter(function(course) {
    return course.price < 200;
});

console.log(affordableCourses);

let courseNames = courses.map(function(course) {
    return course.name;
});

console.log(courseNames);

console.log(`${courses[0].name} - ${courses[0].price} €`);

courses.forEach ((course) => {
    console.log(`${course.name} - ${course.price} €`)
});

const firstCourse = courses[0];
console.log(firstCourse.name);
firstCourse.price = 220;
console.log(firstCourse.price);

function showCourse(name = "новый курс") {
    console.log(`курс: ${name}`);
}

showCourse("web design");
showCourse();

const { name, price } = course;

console.log(name);
console.log(price);

const updateCourse = {
    ...course,
    price: 300
};

console.log(updateCourse);

const courseDetails = {
    teacher: "Anna",
    duration: "2 months"
};

const fullCourse = {
    ...course,
    ...courseDetails
};

console.log(fullCourse);

let task = new Promise(function(resolve, reject) {
    resolve("данные получены!");
});

task.then(function(result) {
    console.log(result);
});

let taskWithError = new Promise(function(resolve, reject) {
    reject("не удалось получить данные");
});

taskWithError
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("ошибка:", error);
});

function getCourse () {
    return new Promise(function(resolve) {
        resolve("JavaScript");
    });
}

async function showCourseName() {
    let name = await getCourse();
    console.log(`название курса: ${name}`);
}

showCourseName();

async function loadUsers() {
    try{
        let retryButton = document.querySelector("#retryButton");
        retryButton.textContent = "загрузка...";

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("не удалось загрузить пользователей");
        }

        let users = await response.json();
        retryButton.textContent = "загрузить еще раз";
        let usersList = document.querySelector("#users");
        let errorMessage = document.querySelector("#errorMessage");
        errorMessage.textContent = "";

        usersList.innerHTML = users
        .map(user => `
            <p> 
                <strong>${user.name}</strong><br>
                Email: ${user.email}
            </p>
         `)       
        .join("");

        console.log(users);
        console.log(users[0].name);
    } catch (error) {
        let retryButton = document.querySelector("#retryButton");
        retryButton.textContent = "загрузить еще раз";

        console.log("ошибка:", error.message);

        let errorMessage = document.querySelector("#errorMessage");
        errorMessage.textContent = "не удалось загрузить пользователей. Попробуйте позже";
    }
}

loadUsers();

let retryButton = document.querySelector("#retryButton");

retryButton.addEventListener("click", function() {
    loadUsers();
    console.log("пользователи успешно загружены");
});

let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");
let taskList = document.querySelector("#taskList");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks () {
    let savedTasks = localStorage.getItem("tasks");
     tasks = saveTasks ? JSON.parse(savedTasks) : [];
    console.log("загруженные задачи:", tasks);
    
    tasks.forEach(function(task) {
        let taskElement = document.createElement("p");
        taskElement.textContent = task;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "удалить";

        deleteButton.addEventListener("click", function() {
            taskElement.remove();

            tasks = tasks.filter(function(item) {
                return item !== task;
            });
            saveTasks();
        });

        taskElement.append(deleteButton);
        taskList.append(taskElement);
    });
}

addTaskButton.addEventListener("click", function() {
    console.log("кнопка добавления нажата");
    
    let task = taskInput.value;

    if (task === "") {
        alert("введите задачу");
        return;
    }
    let taskElement = document.createElement("p");

    taskElement.textContent = task;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "удалить";

    deleteButton.addEventListener("click", function() {
        taskElement.remove();

        tasks  = tasks.fillter(function(item) {
            return item !== task;
        });

        saveTasks();
    });

    taskElement.append(deleteButton);
    taskList.append(taskElement);

    tasks.push(task);
    saveTasks();

    console.log("сохранено:", localStorage.getItem("tasks"));

    taskInput.value = "";
});

loadTasks();

let city = "Vilnius";

function showCity() {
    let country = "Lithuania";

    console.log(city);
    console.log(country);
}

showCity();

console.log(city);
// console.log(country);

if (true) {
    let a = 10;
    var b = 20;
}

// console.log(a);
console.log(b);

if (true) {
    const message = "привет";
}

console.log(typeof message);

if (true) {
    const color = "red";
}

// console.log(color);

function createCounter() {
    let number = 0;

    return function () {
        number++;
        console.log(number);
    };
}

let myCounter = createCounter();

myCounter();
myCounter();
myCounter();

const car = {
    brand: "Toyota",

    showBrand: function() {
        console.log(this.brand);
    }
};

car.showBrand();

const user = {
    name: "Maria",

    sayHello: function() {
        console.log("привет, " + this.name);
    }
};

user.sayHello();

const person = {
    name: "мария",

    sayHello: function() {
        console.log(this.name);
    }
};

person.sayHello();

function greet(name, callback) {
    console.log("привет, " + name);
    callback();
}

function sayBye() {
    console.log("пока");
}

greet("мария", sayBye);

function doWork(callback) {
    console.log("начинаем работу");
    callback();
}

doWork(function() {
    console.log("работа завершена");
});

function checkName(name) {
    if (name.trim() === "") {
        console.log("введите имя");
    } else {
        console.log("имя принято");
    }
}

checkName("");
checkName("Maria");
checkName(" ");

function checkEmail(email) {
    if (email.includes("@")) {
        console.log("Email принят");
    } else {
        console.log("некорректный email");
    }
}

checkEmail("maria@gmail.com");
checkEmail("maria.gmail.com");


function checkAge(age) {
    if (age < 0) {
        console.log("некорректный возраст");
    } else if (age < 18) {
        console.log("несовершеннолетний");
    } else {
        console.log("совершеннолетний");
    }
}

checkAge(-2);
checkAge(15);
checkAge(25);

const contactForm = document.querySelector("#practiceForm");
console.log("форма найдена:", contactForm);
const userNameInput = document.querySelector("#userName");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(event) {
    console.log("форма работает");
    event.preventDefault();

    const name = userNameInput.value.trim();
    if (name.length < 2) {
        formMessage.textContent = "введите имя максимум из двух символов";
        return;
    }
    console.log("введенное имя:", userNameInput.value);

    if (name === "") {
        formMessage.textContent = "введите ваше имя";
    } else {
        formMessage.textContent = "привет, " + name + "!";
    }
});

function validateName(name) {
    name = name.trim();

    if (name.length < 2) {
        return "имя слишком короткое";
    }

    return "имя подходит";
}

console.log(validateName("A"));
console.log(validateName("Karina"));

function validateEmail(email) {
    email = email.trim();

    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
        return "некорректный email";
    }

    return "Email подходит";
}

console.log(validateEmail("karina@gmail.com"));
console.log(validateEmail("karina.gmail.com"));

