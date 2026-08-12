const media=[
  {type:"image",src:"assets/photo1.jpeg"},
  {type:"image",src:"assets/photo2.jpeg"},
  {type:"image",src:"assets/photo3.jpeg"},
  {type:"video",src:"assets/video1.mp4"},
  {type:"video",src:"assets/video2.mp4"},
  {type:"video",src:"assets/uploaded_video1.mp4"},
  {type:"video",src:"assets/uploaded_video2.mp4"},
  {type:"video",src:"assets/uploaded_video3.mp4"}
];

const bg=document.getElementById("bg-gallery");

media.forEach((item,i)=>{
  const d=document.createElement("div");
  d.className="photo media-item";
  d.style.left=(4+i*18)+"%";
  d.style.top=(8+(i%3)*29)+"%";
  d.style.animationDuration=(18+i*2.2)+"s";
  d.style.animationDelay=(-i*4)+"s";

  let el;
  if(item.type==="video"){
    el=document.createElement("video");
    el.autoplay=true;
    el.muted=true;
    el.loop=true;
    el.playsInline=true;
    el.preload="auto";
  }else{
    el=document.createElement("img");
  }

  el.src=item.src;
  el.alt="PANDA HEX background media";
  d.appendChild(el);
  bg.appendChild(d);

  if(item.type==="video"){
    el.play().catch(()=>{});
  }
});

for(let i=0;i<65;i++){
  const p=document.createElement("i");
  p.className="p";
  const s=1+Math.random()*3;
  p.style.width=s+"px";
  p.style.height=s+"px";
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=7+Math.random()*12+"s";
  p.style.animationDelay=-Math.random()*15+"s";
  document.getElementById("particles").appendChild(p);
}

document.querySelectorAll(".update").forEach(x=>x.onclick=()=>x.classList.toggle("open"));
