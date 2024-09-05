function padZero(value)
{
  if(value < 9)
    return "0" + value

  return "" + value

}

function setCountdown() 
{
  var secondDiv = 1000
  var minuteDiv = secondDiv * 60
  var hourDiv = minuteDiv * 60
  var dayDiv = hourDiv * 24

  var targetDateTime = new Date("Oct 12, 2024 10:45:00").getTime()
  var intervalRef = undefined

  var calculateDistance = function(target)
  {    
    var now = new Date().getTime()
    var distance = target - now

    var days = Math.max(0, Math.floor(distance / dayDiv))
    var hours = Math.max(0, Math.floor((distance % (dayDiv)) / hourDiv))
    var minutes = Math.max(0, Math.floor((distance % (hourDiv)) / minuteDiv))
    var seconds = Math.max(0, Math.floor((distance % (minuteDiv)) / secondDiv))

    document.getElementById("cd-days-number").innerText = padZero(days)
    document.getElementById("cd-hours-number").innerText = padZero(hours)
    document.getElementById("cd-minutes-number").innerText = padZero(minutes)
    document.getElementById("cd-seconds-number").innerText = padZero(seconds)

    document.getElementById("cd-days-label").innerText = "giorn" + (days != 1 ? "i" : "o")
    document.getElementById("cd-hours-label").innerText = "or" + (hours != 1 ? "e" : "a")
    document.getElementById("cd-minutes-label").innerText = "minut" + (minutes != 1 ? "i" : "o")
    document.getElementById("cd-seconds-label").innerText = "second" + (seconds != 1 ? "i" : "o")

    return distance
  }

  var setCountdownElements = function(distance, interval)
  {    
    if (distance < 0) 
    {
      // var countdownBefore = document.getElementById("countdown-before-datetime")
      // var countdownAfter = document.getElementById("countdown-after-datetime")

      // countdownBefore.style.display = "none"
      // countdownAfter.style.display = "block"

      if (interval != undefined)
        clearInterval(interval);
    }
  }

  var calculateAndSet = function(target, interval)
  {
    var dist = calculateDistance(target)
    setCountdownElements(dist, interval)
  }

  var intervalRef = setInterval(function(){
    calculateAndSet(targetDateTime, intervalRef)
  }, 1000)

  calculateAndSet(targetDateTime, intervalRef)
}