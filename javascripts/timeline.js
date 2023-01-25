var data = {
  "timeLineEvents": [
    {
      "Name": "Disney - Star TV",
      "Descriptions": [
        "In <a href='https://www.disney.com'>Disney</a> I developed Monetization Intelligence (MINT) platform which helps to solve advertisement slots allocation problem for sales team of StarTV.",
        "To handle their immense data, implemented Data Lake Connector and Aggregator which amalgamates data from various data lake sources and diverge to different systems."
      ],
      "Period": "April 2018 - Present",
      "Designation": "Senior Full Stack Developer"
    }
  ]
}


function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        // alert(allText);
        console.log(allText)
      }
    }
  }
  rawFile.send(null);
}


const timeLine = document.getElementById('timeline');
timeLine.onload = loadTimeLine();
// timeLine.onload = readTextFile("data/timeline.json");
// timeLine.onload = fetch('/data/timeline.json')
//   .then(response => response.json())
//   .then(timeLineEvents => {
//     console.log(timeLineEvents);
//     timeLineEvents.forEach(timeLineEvent => {
//       createTimeLine(timeLineEvent);
//     });
//   });

function loadTimeLine() {
  data.timeLineEvents.forEach(timeLineEvent => {
    createTimeLine(timeLineEvent);
  });
}

function createTimeLine(timeLineEvent) {

  const timeline_block = document.createElement('div');
  timeline_block.classList.add('timeline-block');

  // timeline_icon
  const timeline_icon = document.createElement('div');
  timeline_icon.classList.add("timeline-icon", "colour-off", "bg-yellow");

  const i = document.createElement('i');
  i.classList.add("fa", "fa-tv");

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
