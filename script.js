
const options = document.getElementById("contents");
const table = document.querySelector("tbody");

let firstLoad = true; 
window.onload = function () {
    fetchData();
    firstLoad = false;  
};
let foodData;
const fetchData = async () => {
    try{
        const response = await fetch("./foodie.json")
        foodData = await response.json();
        Output(foodData);
    }
    catch (error){
        console.error("Error loading data : ",error);
    }
};

const Output = (data) => {
    let sno = 1;
    
    const info = data.map((item) => 
        `
        <tr>
            <td>${sno++}</td>
            <td>${item.foodname}</td>
            <td>${item.calorie}</td>
            <td>${item.category}</td>
            <td>${item.protiens}</td>
            <td>${item.cab}</td>
        </tr>
        `
        ).join("");
        
        table.innerHTML = info;

};

const fooditems = (data) => {
    if (!data) {
        Output(foodData);
    }
    else {
        Output(foodData.filter((item) => item.category === data));
    }
}
const Calorie = (data) => {
    if (data == "above") {
        Output(foodData.filter((item) => item.calorie > 100));
    } else {
        Output(foodData.filter((item) => item.calorie > 100));
    }

}

const Sort = (data) => {
    if (data == "protein") {
        Output(foodData.sort((a, b) => b.protiens - a.protiens));
    }
    else if (data == "cab") {
        Output(foodData.sort((a, b) => a.cab - b.cab));
    }
}

window.Output = Output;
window.fooditems = fooditems;
window.Calorie = Calorie;
window.Sort = Sort;

