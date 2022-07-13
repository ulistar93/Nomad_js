const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const thisYear = date.getFullYear();
  const christmas = new Date(`December 25, ${thisYear} 00:00:00`);

  if (christmas.getTime() - date.getTime() < 0) {
    //already passed this year christmas
    christmas.setFullYear(thisYear + 1);
  }
  const msDiff = christmas.getTime() - date.getTime();
  const secDiff = parseInt(msDiff / 1000, 0);
  const secMod = secDiff % 60;
  const minDiff = parseInt(secDiff / 60, 0);
  const minMod = minDiff % 60;
  const hourDiff = parseInt(minDiff / 60, 0);
  const hourMod = hourDiff % 24;
  const dateDiff = parseInt(hourDiff / 24, 0);

  const datesText = String(dateDiff);
  const hoursText = String(hourMod).padStart(2, "0");
  const minutesText = String(minMod).padStart(2, "0");
  const secondsText = String(secMod).padStart(2, "0");
  clockTitle.innerText = `${datesText}d ${hoursText}h ${minutesText}h ${secondsText}s`;
}
getClock();
setInterval(getClock, 1000);
