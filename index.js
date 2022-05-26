import data from "./data.json" assert {
    type: 'json'
};

document.querySelectorAll(".timeframe").forEach(element => {
    element.addEventListener("click", (event) => {
        const activities = document.querySelectorAll(".activity");
        for (let i = 0; i < data.time.length; i++) {
            activities[i].querySelector(".title").textContent = data.time[i].title;
            let time = "Day"
            switch (event.target.textContent) {
                case "Daily":
                    activities[i].querySelector(".current-time").textContent = data.time[i].timeframes.daily.current;
                    activities[i].querySelector(".previous-time").textContent = data.time[i].timeframes.daily.previous;
                    console.log(data.time[i].timeframes.daily.current)
                    time = "Day";
                    break;
                case "Weekly":
                    activities[i].querySelector(".current-time").textContent = data.time[i].timeframes.weekly.current;
                    activities[i].querySelector(".previous-time").textContent = data.time[i].timeframes.weekly.previous;
                    time = "Week";
                    break;
                case "Monthly":
                    activities[i].querySelector(".current-time").textContent = data.time[i].timeframes.monthly.current;
                    activities[i].querySelector(".previous-time").textContent = data.time[i].timeframes.monthly.previous;
                    time = "Month";
                    break;
            }
            let currentTime = activities[i].querySelector(".current-time").textContent
            if(currentTime > 1 ){
                currentTime += " hrs"
            }else{
                currentTime += " hr"
            }
            activities[i].querySelector(".current-time").textContent = currentTime
            let previousTime = activities[i].querySelector(".previous-time").textContent
            if(previousTime > 1){
                previousTime = "Last " + time + " - " + previousTime + "hrs"
            }else{
                previousTime = "Last " + time + " - " + previousTime + "hr"
            }
            activities[i].querySelector(".previous-time").textContent = previousTime;
        }
    })
});