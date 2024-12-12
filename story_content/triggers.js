function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Y8PnN7Mzqg":
        Script1();
        break;
      case "6BJFyU6gR21":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6J73VNp7nF0');
const duration = 750;
const easing = 'ease-out';
const id = '6pP0nZFwfXs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
