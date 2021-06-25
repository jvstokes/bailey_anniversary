let myRequest = new Request("./dates.json");

var date_list
data = fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(data => date_list = data.dates)
    

window.onload = function(){ 
    var content = document.getElementById("content")
    var button = document.getElementById("launch")
    

    /*
    var time = document.getElementById("timeOfDay").value
    var duration = document.getElementById("duration").value
    var weather = document.getElementById("weather").value
    var special = document.getElementById("special").value
    */


    button.onclick = function() {
        var time = document.getElementById("timeOfDay").value
        var duration = document.getElementById("duration").value
        var weather = document.getElementById("weather").value
        var special = document.getElementById("special").value
        
        var valid_dates = [];

        console.log(date_list)

        
        for (let i = 0; i < date_list.length; i++){
            date = date_list[i]
            console.log(date)
            if (check_valid_date(date, time, duration, weather, special)) {
                valid_dates.push(date)
            }
        }

        num_valid = valid_dates.length

        index = Math.floor(Math.random() * num_valid)


        selected = valid_dates[index]

        console.log(selected)

        document.getElementById("card-title").innerHTML = selected.title
        document.getElementById("card-desc").innerHTML = selected.description
        document.getElementById("card-dur").innerHTML = selected.duration[0]
        document.getElementById("card-activity").innerHTML = selected.Category[0]
        document.getElementById("card-loc").innerHTML = selected.location
        document.getElementById("card-img").src = selected.image
    }; 

    function check_valid_date(element, time, dur, weather, spec) {
        if (!element.timeOfDay.includes(time)) {
            return false;
        }
        else if (!element.duration.includes(dur)) {
            return false;
        }
        else if (!element.weather.includes(weather)) {
            return false;
        }
        return (spec === "Adventure" || element.Category.includes(spec));
    }
};
