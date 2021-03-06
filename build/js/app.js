var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// /// <reference path="to-do-classes-interfaces.ts" />
// /// <reference path="to-do-people.ts" />
// /// <reference path="to-do-listing-functions.ts" />
//
// $(document).ready(function() {
//
// });
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, taskType, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.taskType = taskType;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority, "home");
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "Low", "hobby");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, "work", assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Odinson",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.listTasksByType = function (type, taskCollection) {
        var types = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.taskType === type) {
                types.push(task.description);
            }
        }
        return types;
    };
    ToDoList.listTasksByPriority = function (taskPriority, taskCollection) {
        var priorities = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.priority === taskPriority) {
                priorities.push(task.description);
            }
        }
        return priorities;
    };
    ToDoList.personHighPriority = function (highPriority, assignee, taskCollection) {
        var highPerson = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if ((task.priority === highPriority) && (task.assignedTo === assignee)) {
                highPerson.push(task.description);
            }
        }
        return highPerson;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the Dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Eat tacos.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
var dianeTasks = ToDoList.describeTasksForPerson(people.diane, tasks);
console.log("Here are Diane's tasks: ");
for (var _a = 0, dianeTasks_1 = dianeTasks; _a < dianeTasks_1.length; _a++) {
    var task = dianeTasks_1[_a];
    console.log(task);
}
var lokiTasks = ToDoList.describeTasksForPerson(people.loki, tasks);
console.log("Here are Loki's tasks: ");
for (var _b = 0, lokiTasks_1 = lokiTasks; _b < lokiTasks_1.length; _b++) {
    var task = lokiTasks_1[_b];
    console.log(task);
}
var homeTasks = ToDoList.listTasksByType("home", tasks);
console.log("Here are the Home Tasks: ");
for (var _c = 0, homeTasks_1 = homeTasks; _c < homeTasks_1.length; _c++) {
    var task = homeTasks_1[_c];
    console.log(task);
}
var workTasks = ToDoList.listTasksByType("work", tasks);
console.log("Here are the Work Tasks: ");
for (var _d = 0, workTasks_1 = workTasks; _d < workTasks_1.length; _d++) {
    var task = workTasks_1[_d];
    console.log(task);
}
var hobbyTasks = ToDoList.listTasksByType("hobby", tasks);
console.log("Here are the Hobby Tasks: ");
for (var _e = 0, hobbyTasks_1 = hobbyTasks; _e < hobbyTasks_1.length; _e++) {
    var task = hobbyTasks_1[_e];
    console.log(task);
}
var lowTasks = ToDoList.listTasksByPriority("Low", tasks);
console.log("Here are the Low Priority Tasks: ");
for (var _f = 0, lowTasks_1 = lowTasks; _f < lowTasks_1.length; _f++) {
    var task = lowTasks_1[_f];
    console.log(task);
}
var mediumTasks = ToDoList.listTasksByPriority("Medium", tasks);
console.log("Here are the Medium Priority Tasks: ");
for (var _g = 0, mediumTasks_1 = mediumTasks; _g < mediumTasks_1.length; _g++) {
    var task = mediumTasks_1[_g];
    console.log(task);
}
var highTasks = ToDoList.listTasksByPriority("High", tasks);
console.log("Here are the High Priority Tasks: ");
for (var _h = 0, highTasks_1 = highTasks; _h < highTasks_1.length; _h++) {
    var task = highTasks_1[_h];
    console.log(task);
}
$(document).ready(function () {
    var highThor = ToDoList.personHighPriority("High", people.thor, tasks);
    for (var _i = 0, highThor_1 = highThor; _i < highThor_1.length; _i++) {
        var task = highThor_1[_i];
        $("#thorHighest").append("Here is Thor's highest task: " + task);
        {
            break;
        }
    }
    ;
    var highDiane = ToDoList.personHighPriority("High", people.diane, tasks);
    for (var _a = 0, highDiane_1 = highDiane; _a < highDiane_1.length; _a++) {
        var task = highDiane_1[_a];
        $("#dianeHighest").append("Here is Diane's highest task: " + task);
        {
            break;
        }
    }
    ;
    var highLoki = ToDoList.personHighPriority("High", people.loki, tasks);
    for (var _b = 0, highLoki_1 = highLoki; _b < highLoki_1.length; _b++) {
        var task = highLoki_1[_b];
        $("#lokiHighest").append("Here is Loki's highest task: " + task);
        {
            break;
        }
    }
    ;
});
