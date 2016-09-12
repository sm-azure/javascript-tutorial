/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Saikat"]);

 var firstname = "Dilbert Comics";
 console.log(firstname);

var awesomethoughts = "I am awesome!!!";
console.log(awesomethoughts);

 var funthoughts = awesomethoughts.replace("awesome", "fun");
 console.log(funthoughts);

 //$("#main").append(funthoughts);

var formattedName = HTMLheaderName.replace("%data%", "Saikat ");
var role = HTMLheaderRole.replace("%data%", "Web Developer");

//$("#header").append(formattedName);
//$("#header").append(role);
var skills = ["gundami", "bodmaishi", "cute smile", "energetic"];

var bio ={
  "name": firstname,
  "Role": "Web Developer" ,
  "contact_info": "9620336210",
  "url": "images/fry.jpg",
  "skills" : skills
}

$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.Role));
$("#header").append(HTMLcontactGeneric.replace("%data%",bio.contact_info).replace("%contact%","Contact"));
$("#header").append(HTMLbioPic.replace("%data%",bio.url));
$("#header").append(HTMLwelcomeMsg.replace("%data%","Welcome to Arya's bio"));

if(bio.skills != null && bio.skills.length !=0){
  $("#header").append(HTMLskillsStart);
  for(i=0;i < bio.skills.length ; i++){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

var work = [{
    "employer": "Self Employed",
    "title": "Respectful Job Holder",
    "years": "Aug 2028 - Present",
    "city": "Bangalore",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    "employer": "Employed",
    "title": "Fancy Title",
    "years": "Jul 2025- Jan 2028",
    "city": "Mumbai",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];

displayWork(work);

var school =
  [{
	"HTMLschoolName": "AGCS",
	"HTMLschoolDegree": "ISC",
	"HTMLschoolDates": "28/6/2030",
	"HTMLschoolLocation": "Kolkata",
	"HTMLschoolMajor": "English Literature"
}, {
	"HTMLschoolName": "AGCS-2",
	"HTMLschoolDegree": "ISCE",
	"HTMLschoolDates": "28/6/2028",
	"HTMLschoolLocation": "Kolkata",
	"HTMLschoolMajor": ["English", "Literature"]
}];

var projects = {
"info": [
  {
    "title": "Dilbert 1",
    "dates": "2025",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "src": "images/dilbert3.jpg"
  },
  {
    "title": "Dilbert 2",
    "dates": "2026",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "src": "images/dilbert2.jpg"
  }
]
};

projects.display = function(){
  for (var project in projects.info) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.info[project].title));
      $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.info[project].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.info[project].description));
      $(".project-entry:last").append(HTMLprojectImage.replace('%data%', projects.info[project].src));
  }
}

projects.display();

console.log(school.length);

for(i=0; i< school.length; i++){
    var did3 = $(HTMLschoolStart);
    var selector = "school" +i;
    did3.attr('id', selector);
    $("#education").append(did3);

    selector = "#"+ selector;
    console.log(selector);
    $(selector).append(HTMLschoolName.replace("%data%", school[i].HTMLschoolName));
    $(selector).append(HTMLschoolDegree.replace("%data%", school[i].HTMLschoolDegree));
    $(selector).append(HTMLschoolDates.replace("%data%", school[i].HTMLschoolDates));
    $(selector).append(HTMLschoolLocation.replace("%data%", school[i].HTMLschoolLocation));
    $(selector).append(HTMLschoolMajor.replace("%data%", school[i].HTMLschoolMajor));

}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
console.log('Added googleMap');

function displayWork(work){

  for(var job in work){
    $("#workExperience").append(HTMLworkStart);
    var combineWork = HTMLworkEmployer.replace("%data%", work[job].employer) + HTMLworkTitle.replace("%data%", work[job].title);
    $(".work-entry:last").append(combineWork);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work[job].years));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[job].city));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[job].description));

  }
}

function inName(name){
  names = name.split(" ");
  names['0'] = names[0].toUpperCase().slice(0,1) + names[0].toLowerCase().slice(1) ;
  if(names.length > 1){
    names['1'] = names[1].toUpperCase();
  }
  return names.join(" ");
}


//$("#header").prepend(role);
//$("#header").prepend(format$("#header").prepend(role);tedName);
