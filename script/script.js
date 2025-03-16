

    const moonImg = document.getElementById('moon-img');
    const body = document.body;

    moonImg.addEventListener('click', () => {
        if (moonImg.src.includes('lua')) {
            moonImg.src = '/assets/sol.png'; 
        } else {
            moonImg.src = '/assets/lua.png'; 
        }

        body.classList.toggle('dark-mode');
    });

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

