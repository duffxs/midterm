function loadExperience(experience){
    const roles = experience;
    let sorted_roles = [];
    sorted_roles = experience.sort((a, b) => {
        const dateA = new Date(a.start_date);
        const dateB = new Date(b.start_date);
        return dateB - dateA;
    });

    var timeLine = document.getElementById("timeline");
    for(let i = 0; i<sorted_roles.length; i++){
        let company = sorted_roles[i].company;
        let company_logo = sorted_roles[i].company_logo
        let start_date = sorted_roles[i].start_date
        let end_date = sorted_roles[i].end_date
        let title = sorted_roles[i].title
        let description = sorted_roles[i].description 
        let side;
        let colProperty;
        let rspacer;
        let lspacer;
        if(i%2 == 0){
            side = "left";
            colProperty = " text-end";
            rspacer = '<div class="col-md-5"></div>'
            lspacer = '';
        }else{
            side = "right";
            colProperty = "";
            rspacer = '';
            lspacer = '<div class="col-md-5"></div>';
        }
        console.log(colProperty);
        let AddCardRole = document.createElement("div");
        const classNames = 'row g-0 mb-5 timeline-row'.split(' ');
        for(let c of classNames){
            AddCardRole.classList.add(c);
        }
        if(i%2==0){
            AddCardRole.innerHTML = `
                    <div class="col-md-5">
                        <div class="card timeline-card text-end">
                            <div class="card-body">
                                <div class="info-container left">
                                    <div class="basic-info">
                                        <img src="./company_logos/${company_logo}" alt="${company} logo" class="company-logo mb-3">
                                        <h5 class="card-title">${title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${company}</h6>
                                        <p class="card-text"><strong>${start_date} - ${end_date}</strong></p>
                                    </div>
                                    <div class="description">
                                        <p>${description}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center align-items-center">
                        <div class="timeline-dot"></div>
                    </div>
                    <div class="col-md-5"></div>`;
        }else{
                AddCardRole.innerHTML = `
                <div class="col-md-5"></div>
                <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <div class="timeline-dot"></div>
                </div>
                <div class="col-md-5">
                    <div class="card timeline-card">
                        <div class="card-body">
                            <div class="info-container right">
                                <div class="basic-info">
                                    <img src="./company_logos/${company_logo}" alt="${company} logo" class="company-logo mb-3">
                                    <h5 class="card-title">${title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${company}</h6>
                                    <p class="card-text"><strong>${start_date} - ${end_date}</strong></p>
                                </div>
                                <p class="description">${description}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;
        }
        timeLine.appendChild(AddCardRole);
    }
    

}

function fetchData(){
    fetch("./work_experience.json")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>  {
            loadExperience(data.roles);
        })
        .catch((error) => {
            console.log("Error" + error);
        });
}

fetchData();