function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div")
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quote = document.querySelector(".quoteoftheday")
  const quoteArray = []
  
  quoteArray[0] = "<div>The best way to predict the future is to invent it.</div><div>Alan Kay in 1971</div>"
  quoteArray[1] = "<div>Any sufficiently advanced technology is indistinguishable from magic.</div><div>Arthur C. Clarke in 1973</div>"
  quoteArray[2] = "<div>The most important single aspect of software development is to be clear about what you are trying to build.</div><div>Bjarne Stroustrup in an unknown date</div>"
  quoteArray[3] = "<div>Optimism is an occupational hazard of programming: feedback is the treatment.</div><div>Kent Beck in 2003</div>"
  quoteArray[4] = "<div>You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</div><div>John Romero in an unknown date</div>"
    
  quote.innerHTML = "<h3>Quote of the Day</h3>" + quoteArray[Math.floor(Math.random() * 5)]

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const speak = document.querySelector(".corporatespeak")
  
  const speakArrayOne = ["disrupt", "evolve", "inivate", "monetize", "empower", "synergize", "leverage"]
  const speakArrayTwo = ["solutions", "synergies", "paradigms", "initiatives", "value propositions"]
  const speakArrayThree = ["strategically", "synergistically", "holistically", "out-of-the-boxedly", "scalably", "proactively"]

  speak.innerHTML = "<h3>Corporate Speak</h3>" + `<div>We need to ${speakArrayOne[Math.floor(Math.random() * 7)]} our ${speakArrayTwo[Math.floor(Math.random() * 5)]} ${speakArrayThree[Math.floor(Math.random() * 6)]} in order to ${speakArrayOne[Math.floor(Math.random() * 7)]} our ${speakArrayTwo[Math.floor(Math.random() * 5)]} ${speakArrayThree[Math.floor(Math.random() * 6)]}</div>`

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const count = document.querySelector(".countdown")

  const countdown = document.createElement('p')
  countdown.textContent = 'T-Minus 5...'
  count.appendChild(countdown)

  let timeleft = 4;
  let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      countdown.textContent = "Liftoff! 🚀"
    } else {
      countdown.textContent = `T-Minus ${timeleft}...`
    }
    timeleft -= 1;
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friends = document.querySelector(".friends")

  const friendsArray = []

  friendsArray[0] = "<p>Emily Nguyen was born in 1992 and has no friends.</p>"
  friendsArray[1] = "<p>Alex Lee was born in 1985 and is friends with Jason Wong, Sarah Johnson and Ashley Kim.</p>"
  friendsArray[2] = "<p>Kimberly Ng was born in 1987 and is friends with Samantha Singh.</p>"
  friendsArray[3] = "<p>Sarah Johnson was born in 1986 and is friends with Emily Nguyen, Alex Lee and Ashley Kim.</p>"
  friendsArray[4] = "<p>Jessica Taylor was born in 1982 and is friends with Mohammed Ali and William Brown.</p>"
  friendsArray[5] = "<p>Luis Gonzalez was born in 1990 and has no friends.</p>"
  friendsArray[6] = "<p>Ashley Kim was born in 1991 and is friends with Alex Lee, Sarah Johnson and Samantha Singh.</p>"
  friendsArray[7] = "<p>Carlos Garcia was born in 1978 and is friends with Emily Nguyen, Mohammed Ali and Michael Chen.</p>"
  friendsArray[8] = "<p>Maria Rodriguez was born in 1988 and is friends with Luis Gonzalez and William Brown.</p>"
  friendsArray[9] = "<p>Michael Chen was born in 1995 and is friends with Carlos Garcia, Mohammed Ali and Jason Wong.</p>"
  friendsArray[10] = "<p>Samantha Singh was born in 1980 and is friends with Ashley Kim and Kimberly Ng.</p>"
  friendsArray[11] = "<p>Mohammed Ali was born in 1989 and is friends with Jessica Taylor, Luis Gonzalez, Carlos Garcia and Michael Chen.</p>"

  friends.innerHTML = "<h3>Friends</h3>" + friendsArray[Math.floor(Math.random() * friendsArray.length)]

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  // quote, speak, count, friends // widgets
  widgets.forEach((widget, idx)=> {
    widget.setAttribute("tabindex", idx + 1 + "")
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
