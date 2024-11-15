window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function appendScripts() {
  const head = document.head;
  const scriptUrls = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    'https://cdn.jsdelivr.net/gh/nrzmalik/noraiz/nrzZoom_1.1.js'
  ];
 
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      head.appendChild(script);
    });
  };
 
  const loadAllScripts = async () => {
    for (const url of scriptUrls) {
      await loadScript(url);
    }
  };
 
  loadAllScripts();
}
 
appendScripts();
 
}

window.Script2 = function()
{
  nrzZoom("7");
}

window.Script3 = function()
{
  nrzZoom("5");
}

window.Script4 = function()
{
  nrzZoom("1");
}

window.Script5 = function()
{
  nrzZoom("6");
}

window.Script6 = function()
{
  nrzZoom("3");
}

window.Script7 = function()
{
  nrzZoom("2");
}

window.Script8 = function()
{
  nrzZoom("4");
}

};
