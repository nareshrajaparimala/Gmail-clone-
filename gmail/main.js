// call od side bar
let  h3line=document.getElementById('hbox_3line');
let  sidenav=document.getElementById('sidenav');
let mid_body=document.getElementById('mid_body');
let  compose_text=document.getElementById('compose_text');
let compose_cont=document.getElementById('compose_cont');

let inbox_div=document.getElementById('inbox_div');
    let inbox_text=document.getElementById('inbox_text');
    let inbox_count=document.getElementById('inbox_count');
    let ib0=document.getElementById('ib0');

let starred_div=document.getElementById('starred_div');
    let starred_text=document.getElementById('starred_text');
    let starred_count=document.getElementById('starred_count');
    let ib1=document.getElementById('ib1');

let snoozed_div=document.getElementById('snoozed_div');
    let snoozed_text=document.getElementById('snoozed_text');
    let snoozed_count=document.getElementById('snoozed_count');
    let ib2=document.getElementById('ib2');

let sent_div=document.getElementById('sent_div');
    let sent_text=document.getElementById('sent_text');
    let sent_count=document.getElementById('sent_count');
    let ib3=document.getElementById('ib3');

let drafts_div=document.getElementById('drafts_div');
    let drafts_text=document.getElementById('drafts_text');
    let drafts_count=document.getElementById('drafts_count');
    let ib4=document.getElementById('ib4');


    // menu 3line function
let count=0;
h3line.addEventListener("click",function(){
    if(count==0){

    
    // compose
    compose_text.style.display='none';
    compose_cont.style.cssText="width:20px;margin-left:5px";

    inbox_div.style.width="20px"; 
    inbox_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    inbox_text.style.display='none';
    inbox_count.style.display='none';
    ib0.style.backgroundColor='rgb(214,226,251)';

    starred_div.style.width="20px"; 
    starred_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    starred_text.style.display='none';
    starred_count.style.display='none';
    // ib1.style.backgroundColor='rgb(214,226,251)';

    snoozed_div.style.width="20px"; 
    snoozed_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    snoozed_text.style.display='none';
    snoozed_count.style.display='none';
    // ib2.style.backgroundColor='rgb(214,226,251)';

    sent_div.style.width="20px"; 
    sent_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    sent_text.style.display='none';
    sent_count.style.display='none';
    // ib3.style.backgroundColor='rgb(214,226,251)';

    drafts_div.style.width="20px"; 
    drafts_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    drafts_text.style.display='none';
    drafts_count.style.display='none';
    // ib4.style.backgroundColor='rgb(214,226,251)';

    sidenav.style.width="50px";
    mid_body.style.width="113vw";
    // sidenav.style.backgroundColor='blue';
    count=1;
    }
    else{
        compose_text.style.display='block';
    compose_cont.style.width="max-content";

    inbox_div.style.width="150px"; 
    inbox_div.style.backgroundColor='rgb(214,226,251)';      //inbox
    inbox_text.style.display='block';
    inbox_count.style.display='block';
    ib0.style.backgroundColor='rgb(214,226,251)';

    starred_div.style.width="150px"; 
    starred_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    starred_text.style.display='block';
    starred_count.style.display='block';
    ib1.style.backgroundColor='rgb(247, 248, 252)';

    snoozed_div.style.width="150px"; 
    snoozed_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    snoozed_text.style.display='block';
    snoozed_count.style.display='block';
    ib2.style.backgroundColor='rgb(247, 248, 252)';

    sent_div.style.width="150px"; 
    sent_div.style.backgroundColor='rgb(247, 248, 252)';      //inbox
    sent_text.style.display='block';
    sent_count.style.display='block';
    ib3.style.backgroundColor='rgb(247, 248, 252)';

    drafts_div.style.cssText="width:150px;backgroundColor:rgb(247, 248, 252)"; 
    // drafts_div.style.';      //inbox
    drafts_text.style.display='block';
    drafts_count.style.display='block';
    ib4.style.backgroundColor='rgb(247, 248, 252)';

    sidenav.style.width="200px";
    mid_body.style.width="93vw";
    count=0;
    }
}
);



// searchbox white and shadow
let text_taking=document.querySelector("#text_taking");
let search_box=document.querySelector(".search_box");
let main_body=document.querySelector(".main_body");
console.log("naresh");
text_taking.addEventListener("click",function(){
    
    search_box.style.cssText="background-color:white;box-shadow:0px 1px 4px #888888;";
    main_body.addEventListener("click",function(){
        
        search_box.style.cssText="background-color:rgb(235,241, 250);box-shadow:none;";
    });

});


let alter_div=document.getElementById("alter_div");
let quick_container=document.getElementById("quick_container");
let c=0;
alter_div.addEventListener("click",()=>{
    if(c==0){
    quick_container.style.display="block";
    c=1;
    }
    else{
        quick_container.style.display="none";
        c=0;
    }
});
main_body.addEventListener("click",()=>{
    if(c==1){
        quick_container.style.display="none";
        c=0;
    }
});

// help------
let help_box=document.getElementById("help_box");
let cont4=document.getElementById("cont4");
let d=0;
cont4.addEventListener("click",()=>{
    if(d==0){
        help_box.style.display="block";
        d=1;
    }
    else{
        help_box.style.display="none";
        d=0;
    }
});
main_body.addEventListener("click",()=>{
    if(d==1){
        help_box.style.display="none";
        d=0;
    }
});

// apps icon
let cont6=document.getElementById("cont6");
let apps_box=document.getElementById("apps_box");
let e=1;
cont6.addEventListener("click",()=>{
    if(e==0){
        apps_box.style.display="none";
        e=1;
    }
    else{
        apps_box.style.display="block";
        e=0;
    }
});



// hover on inbox
inbox_div.addEventListener("click",()=>{

    inbox_div.style.cssText="background-color: rgb(214,226,251);";
    ib0.style.cssText="background-color: rgb(214,226,251);";
    starred_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib1.style.cssText="background-color: rgb(247, 248, 252)";
    snoozed_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib2.style.cssText="background-color: rgb(247, 248, 252)";
    sent_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib3.style.cssText="background-color: rgb(247, 248, 252)";
    drafts_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib4.style.cssText="background-color: rgb(247, 248, 252)";
});

starred_div.addEventListener("click",()=>{

    inbox_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib0.style.cssText="background-color: rgb(247, 248, 252);";
    starred_div.style.cssText="background-color: rgb(214,226,251);";
    ib1.style.cssText="background-color:  rgb(214,226,251);";
    snoozed_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib2.style.cssText="background-color: rgb(247, 248, 252)";
    sent_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib3.style.cssText="background-color: rgb(247, 248, 252)";
    drafts_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib4.style.cssText="background-color: rgb(247, 248, 252)";
});
snoozed_div.addEventListener("click",()=>{

    inbox_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib0.style.cssText="background-color: rgb(247, 248, 252);";
    starred_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib1.style.cssText="background-color:  rgb(247, 248, 252);";
    snoozed_div.style.cssText="background-color: rgb(214,226,251)";
    ib2.style.cssText="background-color: rgb(214,226,251)";
    sent_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib3.style.cssText="background-color: rgb(247, 248, 252)";
    drafts_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib4.style.cssText="background-color: rgb(247, 248, 252)";
});

sent_div.addEventListener("click",()=>{

    inbox_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib0.style.cssText="background-color: rgb(247, 248, 252);";
    starred_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib1.style.cssText="background-color:  rgb(247, 248, 252);";
    snoozed_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib2.style.cssText="background-color: rgb(247, 248, 252)";
    sent_div.style.cssText="background-color:rgb(214,226,251)";
    ib3.style.cssText="background-color:rgb(214,226,251)";
    drafts_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib4.style.cssText="background-color: rgb(247, 248, 252)";
});
drafts_div.addEventListener("click",()=>{

    inbox_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib0.style.cssText="background-color: rgb(247, 248, 252);";
    starred_div.style.cssText="background-color: rgb(247, 248, 252);";
    ib1.style.cssText="background-color:  rgb(247, 248, 252);";
    snoozed_div.style.cssText="background-color: rgb(247, 248, 252)";
    ib2.style.cssText="background-color: rgb(247, 248, 252)";
    sent_div.style.cssText="background-color:rgb(247, 248, 252)";
    ib3.style.cssText="background-color:rgb(247, 248, 252)";
    drafts_div.style.cssText="background-color: rgb(214,226,251";
    ib4.style.cssText="background-color:rgb(214,226,251)";
});



// mid body
let tmess_cont=document.getElementById("tmess_cont");
let date_of_message=document.getElementById("date_of_message");
let icon_symbol_container=document.getElementById("icon_symbol_container");
let bo_icon1=document.getElementById("bo_icon1");
let bo_icon2=document.getElementById("bo_icon2");
let bo_icon3=document.getElementById("bo_icon3");
let bo_icon4=document.getElementById("bo_icon4");
let i1= document.querySelectorAll('#i1');
// hover property on message
tmess_cont.addEventListener("mouseover",()=>{
    date_of_message.style.display="none";
    // icon_symbol_container.style.display="block";
    icon_symbol_container.style.width="100px";
    icon_symbol_container.style.visibility="visible";
    bo_icon1.style.display="block";
    bo_icon2.style.display="block";
    bo_icon3.style.display="block";
    bo_icon4.style.display="block";
    // i1.style.display="block";


});
tmess_cont.addEventListener("mouseout",()=>{
    date_of_message.style.display="block";
    // bo_icon.style.display="none";
    // i1.style.display="none";
    icon_symbol_container.style.visibility="hidden";
    // icon_symbol_container.style.width="15px";
    icon_symbol_container.style.visibility="none";
    // icon_symbol_container.style.width="100px";
    
});

// dust bin
bo_icon2.addEventListener("click",()=>{
    tmess_cont.style.display="none";
});
// check box
let done_check=document.getElementById("done_check");
let not_check=document.getElementById("not_check");
let check_b_c=document.getElementById("check_b_c");
let f=0;
check_b_c.addEventListener("click",()=>{
    console.log(not_check);
    if(f==0){
        not_check.style.display="none";
        done_check.style.display="block";
        done_check.style.color="black";
        tmess_cont.style.backgroundColor="rgb(199,218,252)";
        f=1;
    }
    else{
        not_check.style.display="block";
        done_check.style.display="none";
        tmess_cont.style.backgroundColor="white";
        f=0;
    }
   

});
// star check
let star_container=document.getElementById("star_container");
let not_star=document.getElementById("not_star");
let done_star=document.getElementById("done_star");
let g=0;
star_container.addEventListener("click",()=>{
    if(g==0){
        not_star.style.display="none";
        done_star.style.display="block";
        done_star.style.color="yellow";
        // star_container.style.backgroundColor="rgb(199,218,252)";
        g=1;
    }
    else{
        not_star.style.display="block";
        done_star.style.display="none";
        g=0;
    }
});
// by Naresh R