let user = document.getElementById("user-name");
let btn = document.getElementById("btn");
let secdiv = document.getElementById("sec-div");
async function fetchdata(username) {
  let response = await fetch(`https://api.github.com/users/${username}`);
  let result = await response.json();
  displayuser(result);
}

btn.addEventListener("click", () => {
    let userid = user.value;
    if(!userid){
      return alert("enter username first")
    }
  secdiv.innerHTML = `<span class="loader"></span>`;
  fetchdata(userid);
});

function displayuser({
  avatar_url,
  name,
  bio,
  followers,
  following,
  public_repos, //destructring
  html_url,
}) {
  if (!avatar_url) {
    secdiv.innerHTML = `<h1>User Not Found</h1>`;
    return;
  }
  if (!bio) {
    bio = " ";
  }
    if (!name) {
    name = " ";
  }

  secdiv.innerHTML = `     
                <div id="sec-div">
             <div id="left-div">
                <div id="left-div-img">
                    <img src= ${avatar_url} alt="GitHub Avatar">
                </div>
                <p>${name}</p>
                <p>${bio}</p>
             </div>
             <div id="right-div">
                 <div id="follow-pfl">
                <div class="same">
                    <div>Follower</div>
                    <div>${followers}</div>
                </div>
                <div class="same">
                    <div>following</div>
                    <div>${following}</div>
                </div>
                <div class="same">
                    <div>Repo</div>
                    <div>${public_repos}</div>
                </div>
                  
                </div>

                <a href=${html_url} target='_blank'> 
                <div id="view-pfl">     
                <button id="btn2"> View Profile </button>
                </div>
                </a>
            </div>
            
        </div>`;
}
