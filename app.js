const employees = [];

// Function to add a new employee
function addEmployee(name) {
  employees.push({ name, schedule: [], daysOff: [] });
  renderEmployees();
}

// Function to set an employee's schedule
function setSchedule(employeeName, schedule) {
  const employee = employees.find((emp) => emp.name === employeeName);
  if (!employee) return;
  employee.schedule = schedule;
  renderEmployees();
}

// Function to set an employee's days off
function setDaysOff(employeeName, daysOff) {
  const employee = employees.find((emp) => emp.name === employeeName);
  if (!employee) return;
  employee.daysOff = daysOff;
  renderEmployees();
}

// Render employees in the UI
function renderEmployees() {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee";

    const name = document.createElement("h3");
    name.textContent = employee.name;

    const schedule = document.createElement("p");
    schedule.textContent = `Schedule: ${employee.schedule.join(", ")}`;

    const daysOff = document.createElement("p");
    daysOff.textContent = `Days Off: ${employee.daysOff.join(", ")}`;

    employeeDiv.appendChild(name);
    employeeDiv.appendChild(schedule);
    employeeDiv.appendChild(daysOff);
    employeeList.appendChild(employeeDiv);
  });
}

// Event listeners for form submissions
document.getElementById("add-employee-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.elements["employee-name"].value;
  if (name) addEmployee(name);
  e.target.reset();
});

document.getElementById("set-schedule-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.elements["employee-name"].value;
  const schedule = e.target.elements["employee-schedule"].value.split(",");
  if (name && schedule) setSchedule(name, schedule);
  e.target.reset();
});

document.getElementById("set-days-off-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.elements["employee-name"].value;
  const daysOff = e.target.elements["employee-days-off"].value.split(",");
  if (name && daysOff) setDaysOff(name, daysOff);
  e.target.reset();
});
