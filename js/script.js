const fullname = "Eleazar Timaan De La Cruz";
const country = "Panacan Davao City";

document.getElementById("fullname").innerHTML=fullname;
document.getElementById("location").innerHTML = country;



const position = ["Desktop Support", "Graphics Design", "Wordpress"];

position.push("Java");

position.forEach(i =>{
    const span = `<span class='tags'>"+i+"</span >`;
    document.getElementById("position").innerHTML += span;
});

const educationdata = [
    {
        schoollogo: "images/Logo-Golden.png",
        schoolbanner: "images/Golden-lab.jpg",
        course: "BSIT",
        schoolname: "GSCK",
        yeargraduated: "2020"
    },
    
];

educationdata.forEach(i => {
    const tr = `<tr>
                    <td>
                        <img style="height:120px;"
                             src="${i.schoollogo}" class="school" />
                    </td>
                    <td>
                        <img style="height:120px;"
                             src="${i.schoolbanner}" class="school" />
                    </td>
                    <td>${i.course}</td>
                    <td>${i.schoolname}</td>
                    <td>${i.yeargraduated}</td>
                </tr>`;
    document.getElementById("educationRows").innerHTML += tr;

});



const myskills = [{ name: "UI/UX Design", proficiency: 75 },
    { name: "Graphics Design", proficiency: 100 },
    { name: "Wordpress", proficiency: 50 },
    { name: "Troubleshooting", proficiency: 100 },
    { name: "HTML", proficiency: 75 },
    { name: "CSS", proficiency: 100 },
    { name: "Java Script", proficiency: 50 }


];

myskills.forEach(i => {

    const li = `<li>
                ${i.name}
                <div class="proficiency proficiency-${i.proficiency}"></div></li>`;
    document.getElementById("myskills").innerHTML += li;

})

