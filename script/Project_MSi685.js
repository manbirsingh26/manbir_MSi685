document.addEventListener("DOMContentLoaded",function(){

    makeChart();
    makeAnimation();
    
});


function makeChart(){
  let target = document.getElementById("myGraph");
var xValues= ["Male","Female","Others"];
var yValues=[120,75, 5];
var barColors = ["green","pink","blue"];
new Chart(target,{
type:"doughnut",
data: {
labels: xValues,
datasets: [{
  backgroundColor: barColors,
  data : yValues
}]
},
options: {
  plugins: {
  title: {
    display: true ,
    text: "Total Employees: 200"
}
  }
}

})
}

function makeAnimation(){
  

  let animateCounter = function(counter){
    let target = parseFloat(counter.getAttribute("data-target"));
    let isFloat = counter.getAttribute("data-target").includes(".");
    let total_steps = 150;

    const updateValue = function(){
      let value = +counter.innerText;
      let increment;
      if (isFloat) 
        {
       increment = 0.1;
             }
            else
            {
  increment = Math.ceil(target / total_steps);
             };

      if (value < target) {
        counter.innerText = isFloat
          ? (value + increment).toFixed(1)
          : value + increment;
        setTimeout(updateValue, 25);
      } else {
        counter.innerText = target;
      }
      
    };

    updateValue();
  };

  let visibility = {
    threshold: 0.7, 
  };

  let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const sectionCounters = section.querySelectorAll(".counter");
        sectionCounters.forEach(counter => animateCounter(counter));
        observer.unobserve(section);
      }
    });
  }, visibility);

  const stat_Section = document.getElementById("facts");
  if (stat_Section) {
    observer.observe(stat_Section);
  }
}

 
   
  