/*----Variables----*/
const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic_chart");
const dailyCanvas = document.getElementById("daily_chart");
const mobileCanvas = document.getElementById("mobile_chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

/*----Alert Banners----*/
alertBanner.innerHTML =
    `
    <div class="alert-banner">
    <h4><strong>Alert!</strong> You have 7 overdue tasks to complete</h4>
    <p class="alert-banner-close">x</p>
    </div>
    `
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")){
        alertBanner.style.display = 'none';  
    }
});

/*---Line Graph Traffic Chart---*/ 
let trafficData = {
    xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(225, 225, 225, 1)',
        borderWidth: 3,
        borderColor: 'rgba(116,119,191,.3)',
        lineTension: 0, //graph lines
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    layout: {
        padding: {
            left: 10
        }
        
    },
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 500,
                suggestedMax: 2500,
                fontSize: 12,
                padding: 5
            },    
        }],

        xAxes: [{
            ticks: {
                fontSize: 12,
                padding: 5
            },
            
        }],
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

/*---Bar Graph Daily Traffic*/ 

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets :[{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 200],
        backgroundColor:'#7477BF',
        borderWidth: 1,
        
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
}

/*--Creating Bar Chart--*/
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//Donut Chart Mobile Users
const mobileData = {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
        label: '# of Users',
        data: [500, 550, 2000],
        borderWidth: 0,
        backgroundColor: [ 
            '#78CF82',
            '#52B6C8',
            '#7477BF'
            
        ]
    }]
}

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontstyle: 'bold'
        }
    }
}

//Creating Doughnut Chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


/*---Message Section---*/ 
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});