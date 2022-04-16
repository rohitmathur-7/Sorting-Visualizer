//Bubble Sort
// let cnt=0,myfunc;
// let g=true,gc;
// function color(){
//     let first=children.item(cnt);
//     let second=children.item(cnt+1);
//     let gcc=children.item(gc);
//     if(cnt-1>=0){
//         let third=children.item(cnt-1);
//         if(third.style.backgroundColor=="purple") third.style.backgroundColor="red"; 
//     }
//     if(first.style.backgroundColor=="red") first.style.backgroundColor="purple";
//     if(second.style.backgroundColor=="red") second.style.backgroundColor="purple";
//     if(height[cnt]>height[cnt+1]){
//         g=false;
//         let h1=first.style.height;
//         let h2=second.style.height;
//         let b=height[cnt];
//         height[cnt]=height[cnt+1];
//         height[cnt+1]=b;
//         first.style.height=h2;
//         second.style.height=h1;   
//     }
//     cnt++;
//     if(cnt==49){
//         if(g){
//             while(gc>=0){
//                 gcc=children.item(gc);
//                 gcc.style.backgroundColor="green";
//                 gc--;
//             }
//             clearInterval(myfunc);
//         }
//         g=true; 
//         cnt=0;
//         if((gc-1)>=0){
//             gc--;
//             let new_gcc=children.item(gc);
//             if(new_gcc.style.backgroundColor="purple") new_gcc.style.backgroundColor="red";
//             gc++;
//         }
//         gcc.style.backgroundColor="green";
//         gc--;
//     }
// }
// function BubbleSort(){
//     gc=49;
//     myfunc=setInterval(color,speed);
// }
// document.getElementById("bubbleSort").addEventListener("click",BubbleSort);

let h1a,h2a,f1a,f2a,f3a,h3a;

function swap(xp,yp){
    let temp=height[xp];
    height[xp]=height[yp];
    height[yp]=temp;
}
async function bubbleSort(){
    for(let i=0;i<sze-1;i++){
        for(let j=0;j<sze-i-1;j++){
            if(height[j]>height[j+1]){
                swap(j,j+1);
                f1a=children.item(j);
                f2a=children.item(j+1);
                f1a.style.backgroundColor="purple";
                f2a.style.backgroundColor="purple";
                h1a=f1a.style.height;
                h2a=f2a.style.height;
                f1a.style.height=h2a;
                f2a.style.height=h1a;
                await new Promise(resolve => setTimeout(() => {resolve()},speed));
                if(f1a.style.backgroundColor="purple") f1a.style.backgroundColor="red";
                if(f2a.style.backgroundColor="purple") f2a.style.backgroundColor="red";
            }
        }
        f3a=children.item(sze-i-1);
        f3a.style.backgroundColor="green";
    }
    f3a=children.item(0);
    f3a.style.backgroundColor="green";
}

document.getElementById("bubbleSort").addEventListener("click",async function(){
    disableSortingButton();
    disableNewArrayBtn();
    disableSizeSlider();
    await bubbleSort();
    console.log("hi");
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});