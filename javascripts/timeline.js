const timeLine = document.getElementById('timeline');

timeLine.onload = fetch('/data/timeline.json')
  .then(response => response.json())
  .then(jsonResponse => {
    jsonResponse.timeLineEvents.forEach(timeLineEvent => {
      createTimeLine(timeLineEvent);
    });
  });

function createTimeLine(timeLineEvent) {

  const timeline_block = document.createElement('div');
  timeline_block.classList.add('timeline-block');

  // timeline_icon
  const timeline_icon = document.createElement('div');
  timeline_icon.classList.add("timeline-icon", "colour-off", "bg-yellow");

  const i = document.createElement('i');
  i.classList.add("fa");
  i.classList.add(timeLineEvent.Icon);

  timeline_icon.appendChild(i);

  // timeline_content
  const timeline_content = document.createElement('div');
  timeline_content.classList.add("timeline-content");

  // Name
  const h2 = document.createElement('h2');
  h2.innerHTML = ` ${timeLineEvent.Name} `;
  timeline_content.appendChild(h2)

  // Descriptions
  timeLineEvent.Descriptions.forEach(element => {
    const p = document.createElement('p');
    p.innerHTML = `${element}`;
    timeline_content.appendChild(p)
  });

  // Designation
  const timeline_designation = document.createElement('span');
  timeline_designation.classList.add("timeline-designation");
  timeline_designation.innerHTML = `${timeLineEvent.Period}`;

  const br = document.createElement('br');
  timeline_designation.appendChild(br);

  const small = document.createElement('small');
  small.innerHTML = `${timeLineEvent.Designation}`;
  timeline_designation.appendChild(small);

  timeline_content.appendChild(timeline_designation);


  timeline_block.appendChild(timeline_icon);
  timeline_block.appendChild(timeline_content);

  timeLine.appendChild(timeline_block);
}

// var data = {
//   "timeLineEvents": [
//     {
//       "Name": "Disney - Star TV",
//       "Descriptions": [
//         "In Disney I developed Monetization Intelligence (MINT) platform which helps to solve advertisement slots allocation problem for sales team of StarTV.",
//         "To handle their immense data, implemented Data Lake Connector and Aggregator which amalgamates data from various data lake sources and diverge to different systems."
//       ],
//       "Period": "April 2018 - Present",
//       "Designation": "Senior Full Stack Developer",
//       "Icon": "fa-tv"
//     },
//     {
//       "Name": "IDfy",
//       "Descriptions": [
//         "Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis."
//       ],
//       "Period": "July 2015 - April 2018",
//       "Designation": "Full Stack Developer",
//       "Icon": "fa-search"
//     },
//     {
//       "Name": "Kiprosh",
//       "Descriptions": [
//         "Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis."
//       ],
//       "Period": "June 2014 - July 2015",
//       "Designation": "Full Stack Developer",
//       "Icon": "fa-code"
//     }
//   ]
// }


// function local_createTimeLine() {
//   data.timeLineEvents.forEach(timeLineEvent => {
//     createTimeLine(timeLineEvent);
//   });
// }

// timeLine.onload = local_createTimeLine();
