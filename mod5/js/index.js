let experts = [
    {
        name: 'Dr Durant',
        unavailability: ["25-6-2021","28-6-2021","29-6-2021"]
    },
    {
        name: 'Dr Beal',
        unavailability: ["5-7-2021","2-7-2021","30-6-2021"]
    },
    {
        name: 'Dr Leonard',
        unavailability: ["3-7-2021","2-7-2021","24-6-2021"]
    },

    {
        name: 'Dr Funke',
        unavailability: ["5-7-2021","8-7-2021","27-6-2021"]
    },

    {
        name: 'Dr Smith',
        unavailability: ["3-7-2021","5-7-2021","10-7-2021"]
    },
    {
        name: 'Dr Tatum',
        unavailability: ["8-7-2021","4-7-2021","11-7-2021"]
    },
    {
        name: 'Dr Brown',
        unavailability: ["9-7-2021","13-7-2021","12-7-2021"]
    }
];

function populateExpertChoice(expArr) {

    console.log(expArr);

    var expertSelect = document.getElementById('expert-choice');

    // https://stackoverflow.com/questions/6601028/how-to-populate-the-options-of-a-select-element-in-javascript
    
    for(let i = 0; i < expArr.length; i++){

        var opt = document.createElement("option");
        opt.value= i;
        opt.innerHTML = expArr[i].name; 
        console.log(expArr[i]);

        expertSelect.appendChild(opt);
    }

}

// https://stackoverflow.com/questions/9742289/jquery-ui-date-picker-disabling-specific-dates


var dateToday = new Date(); 

$(function() {
    $( "#datepicker" )
        .datepicker({ 
            beforeShowDay: unavailable, 
            numberOfMonths: 1,
            minDate: dateToday 
    });
 });

function unavailable(date) {
    var expertSelect = document.getElementById('expert-choice');
    var selectedDr = expertSelect.value;
    console.log("selected dr: ", selectedDr);

    var unavailableDates = [];

    if (!isNaN(selectedDr)) {
        unavailableDates = experts[selectedDr].unavailability;
    }
    dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    if ($.inArray(dmy, unavailableDates) == -1) {
        return [true, ""];
    } else {
        return [false,"","Unavailable"];
    }
}


window.onload = (event) => {
    console.log('page is fully loaded');
    populateExpertChoice(experts);
  };