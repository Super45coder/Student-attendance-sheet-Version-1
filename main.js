var names = [];

function submit(){
    var display_name = [];
    for (j = 1; j <= 4; j++){
       var text = document.getElementById("name_of_the_student_" + j).value;
       console.log(text);
       names.push(text);
    }
    console.log(names);
    var length = names.length;
    console.log(length);

    for (var k = 0; k < length; k++){
      display_name.push("<h4> NAME - " + names[k] + "</h4>");
      console.log(display_name);
    }
    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML = display_name;

    var no_commas = display_name.join(" ");
    console.log(no_commas);
    document.getElementById("display_name_without_commas").innerHTML = no_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    
}
function sorting(){
    names.sort();
    console.log(names);
    var display_array_sorted = [];
    var length_of_array = names.length;
    console.log(length_of_array);
    for (i = 0; i < length_of_array; i++){
        display_array_sorted.push("<h4> NAME - " + names[i] + "</h4>");
        console.log(display_array_sorted);
    }
    var without_commas = display_array_sorted.join(" ");
    console.log(without_commas);
    document.getElementById("display_name_without_commas").innerHTML = without_commas;
}