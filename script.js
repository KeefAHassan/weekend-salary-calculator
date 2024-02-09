console.log("Hello world");
let totalSalary = 0;
function submit() {
    console.log("clicked subnit");
    //get what the user typed in each of the input.
    let firstNameElement = document.getElementById("firstNameInput");
    let LastNameElement = document.getElementById("lastNameInput");
    let IDElement = document.getElementById("idInput");
    let TitleElement = document.getElementById("titleInput");
    let AnnualSalaryElement = document.getElementById("annualSalaryInput");



    let tablebody = document.querySelector("tbody");
    tablebody.innerHTML += `
   <td>
   ${firstNameElement.value}
   </td>
   <td>
   ${LastNameElement.value}
   </td>
   <td>
   ${IDElement.value}
   </td>
   <td>
   ${TitleElement.value}
   </td>
   <td class="salary">
   ${AnnualSalaryElement.value}
   </td>
   <td>
    <button onClick="deleteemployee(event)">delete</button>
   </td>
   `;
    Calculatetotalsalary();
    firstNameElement.value = "";
    LastNameElement.value = "";
    IDElement.value = "";
    TitleElement.value = "";
    AnnualSalaryElement.value = "";
}

function deleteemployee(event) {
    event.target.parentElement.parentElement.remove();
    Calculatetotalsalary(true);
}
function Calculatetotalsalary(isMinus = false) {
    totalSalary = 0;
    const allSalaries = document.getElementsByClassName("salary");
    for (let index = 0; index < allSalaries.length; index++) {
        const element = allSalaries[index];

        totalSalary = totalSalary + Number(element.textContent);
    }
    const totalElement = document.getElementById("total");
    const monthly = totalSalary / 12

    totalElement.innerHTML = `<h3>Total Monthly: ${monthly}</h3>`
    if (monthly > 20000) {
        totalElement.classList.add("over-budget");
    } else {
        totalElement.classList.remove("over-budget");
    }
}
