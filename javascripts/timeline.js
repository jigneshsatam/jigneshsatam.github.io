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


  // Descriptions
  timeLineEvent.Descriptions.forEach(element => {
    const p = document.createElement('p');
    p.innerHTML = `${element}`;
    timeline_content.appendChild(p)
  });


  timeline_block.appendChild(timeline_icon);
  timeline_block.appendChild(timeline_content);

  timeLine.appendChild(timeline_block);
}

// var data = {
//   "extra": [
//     "In Disney I developed Monetization Intelligence (MINT) platform which helps to solve advertisement slots allocation problem for sales team of StarTV.",
//     "To handle their immense data, implemented Data Lake Connector and Aggregator which amalgamates data from various data lake sources and diverge to different systems.",
//     "Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis. Now I am in Nextcode and develop website with Python code for genetic analysis."
//   ],
//   "timeLineEvents": [
//     {
//       "Name": "Disney - Star TV",
//       "Descriptions": [
//         "Architected an in-house reporting engine by leading a team of 7 members and developing critical components, which replaced various reporting tools and <b> saved approximately $1.2 million every year.</b>",
//         "Designed and developed an orchestration module that spins up the google cloud functions on demand by analyzing the columns and queries in the report and calculating the amount of data required to generate the report. This module <b>simplified new report creation and reduced the cost</b> by using cloud functions with less memory.",
//         "Automated report deployment process by implementing continuous integration and continuous deployment (CI/CD) pipelines using google cloud build. This pipeline runs the test suite, calculates the code coverage, and deploys the cloud functions that make the deployment process of various reports lucid.",
//         "Implemented a scalable data aggregator to show relationships between the data (projection, revenue, and viewership) by amalgamating data from various data lake sources and creating tree diagrams. The aggregator made the process straightforward and <b>reduced the data extraction time from 1-2 days to approximately 1 minute.</b>"
//       ],
//       "Period": "April 2018 - June 2021",
//       "Designation": "Assistant Manager - Application Development & Data Engineering",
//       "Icon": "fa-tv"
//     },
//     {
//       "Name": "IDfy",
//       "Descriptions": [
//         "Re-engineered the extraction and verification system from a monolithic design to a microservice architecture by creating different services for different processes. The redesign used <b>Kubernetes</b> for orchestration which made each <b>service scale independently and removed the bottlenecks.</b>",
//         "Designed and developed a single sign-on application using Security Assertion Markup Language (<b>SAML</b>), which <b>increased the operation's team performance by 7%.</b>",
//         "Built a task sync module implementing a publisher-subscriber pattern using <b>RabbitMQ</b>, which asynchronously syncs the tasks between various systems, thus <b>reducing the page latency from 1.4 seconds to 0.2 seconds.</b>"
//       ],
//       "Period": "July 2015 - April 2018",
//       "Designation": "Full Stack Developer",
//       "Icon": "fa-search"
//     },
//     {
//       "Name": "Kiprosh",
//       "Descriptions": [
//         "Implemented an authorization module by providing read, write, and delete access on the database models. Cached these user permissions using <b>Redis</b> for faster response.",
//         "Developed save to draft functionality by making <b>ajax calls</b> to the server and saving different versions of an email."
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
