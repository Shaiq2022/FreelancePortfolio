const btnDarkMode = document.querySelector(".dark-mode-btn");
// 1 checking dark mode width operation sistem

//if(window.matchMedia && window.matchMedia('(prefer-color-scheme:dark)'.match))
//btnDarkMode.classList.add('dark-mode-btn--active');
  //  document.body.classList.add('dark')
  
// 2 checking dark mode in local storage

if(localStorage.getItem('darkMode')=== ('dark'))
{
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark')
} else if (
   localStorage.getItem("darkMode") === "light" ) {
   btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark")

}

  // changing theme if system setting will change
  window.matchMedia("(prefers-color-scheme:dark)").addEventListener ('change',(event)=> {
    const newColorScheme = event.matches? 'dark':'light';
    if (newColorScheme==="dark") {
    btnDarkMode.classList.add("dark-mode-btn-active");
    document.body.classList.add("dark") }

    else{ btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark")
     }
    
  })
// turning on dark mode width button 
btnDarkMode.onclick = function(){
btnDarkMode.classList.toggle("dark-mode-btn--active");
const isDark = document.body.classList.toggle("dark");

if(isDark) {
    localStorage.setItem('darkMode', "dark")
}
else {
localStorage.setItem ('darkMode','light')
}
}
