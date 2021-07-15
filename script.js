function renderJob(j){
  return `
    <div class="col-md-4">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>${j.title}</title>
          <rect width="100%" height="100%" fill="#55595c">

          </rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  `
}


// async function getFoos() {
//   const response = await fetch("http://localhost:3000/api/foos");
//   const json = await response.json();
//   console.log(json);

// }

// getFoos();

async function getJobs() {
  const response = await fetch("http://localhost:3000/api/jobs");
  const json = await response.json();
  // console.log(json);
  const { jobs } = json
  console.log(jobs)
  const jobsHTML = jobs.map(job => {
    console.log(job)
    return renderJob(job)
  })
  console.log(renderJob({title: "hehe"}))
  console.log(jobsHTML)
  document.getElementById('jobsList').innerHTML = jobsHTML.join('')
}

getJobs();
