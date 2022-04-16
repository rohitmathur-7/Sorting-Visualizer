let f1,f2,ha,hb;
async function selectionSort(){
    for(let i=0;i<sze-1;i++){
        let pos=i;
        f1=children.item(i);
        f1.style.backgroundColor="purple";
        for(let j=i+1;j<sze;j++){
            f2=children.item(j);
            f2.style.backgroundColor="purple";
            await new Promise(resolve => setTimeout(() => {resolve()},speed));
            if(height[j]<height[pos]){
                pos=j;
            }
            f2.style.backgroundColor="red";
        }
        let tmp=height[i];
        height[i]=height[pos];
        height[pos]=tmp;
        f2=children.item(pos);
        ha=f1.style.height;
        hb=f2.style.height;
        f1.style.height=hb;
        f2.style.height=ha;
        f1.style.backgroundColor="green";
    }
    f1=children.item(sze-1);
    f1.style.backgroundColor="green";
}

document.getElementById("selectionSort").addEventListener("click",async function(){
    disableSortingButton();
    disableNewArrayBtn();
    disableSizeSlider();
    await selectionSort();
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});
