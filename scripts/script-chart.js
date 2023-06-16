Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#8399af';

let fontSize = 16;
let pointRadius = 5;

if (window.innerWidth >= 3840) {
  fontSize = 36;
  pointRadius = 10;
} else if (window.innerWidth >= 2048) {
  fontSize = 24;
  pointRadius = 10;
} else if (window.innerWidth >= 1024) {
  fontSize = 18;
  pointRadius = 8;
} else if (window.innerWidth >= 414) {
  fontSize = 14;
  pointRadius = 5;
} else {
  fontSize = 10;
  pointRadius = 3;
}

var ctx = document.querySelector(".skills-sec__chart");
var line = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["HTML & CSS", "Sass", "JSP", "JS", "JQuery", "Git", "Photoshop", "Webpack"],
    datasets: [{
      label: "Points",
      lineTension: false,
      fill: false,
      backgroundColor: "#8399af",
      borderColor: "#8399af",
      pointRadius: pointRadius,
      pointBackgroundColor: "#8399af",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: pointRadius,
      fontWeight: 600,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: pointRadius * 10,
      pointBorderWidth: pointRadius/2,
      data: [80, 60, 60, 50, 30, 50, 40, 30],
    },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
            fontSize:  fontSize,
          },
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          fontSize: fontSize,
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});