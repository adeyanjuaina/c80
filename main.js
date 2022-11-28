name_student_array=[];

function submit(){
    var display_student_array=[];

for(var j=1; j<=4; j++)
{
    var name_of_student=document.getElementById("name_of_the_student_"+j).value ;
    name_student_array.push(name_of_student);

}
var length_student=name_student_array.length;

for(var z=0; z<length_student; z++){
    display_student_array.push("<h4>name- "+name_student_array[z]+"</h4>");
}
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;

   var remove_commas=display_student_array.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;

   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
   
}

function sorting(){
    name_student_array.sort();
    var display_student_array_sorting=[];
    var length_student=name_student_array.length;

    for(var z=0; z<length_student; z++){
        display_student_array_sorting.push("<h4>name- "+name_student_array[z]+"</h4>");
    }

    var remove_commas=display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas; 

}