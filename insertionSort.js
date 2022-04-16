let j,key,f3,f4,f5,h3,h4,h5;
async function insertionSort(){
    for(let i=1;i<sze;i++){
        f3=children.item(i);
        key=height[i]; 
        j=i-1; 
        while(j>=0 && height[j]>key){ 
            f4=children.item(j);
            f5=children.item(j+1);
            f4.style.backgroundColor="purple";
            f5.style.backgroundColor="purple";
            await new Promise(resolve => setTimeout(() => {resolve()},speed));
            h5=f5.style.height;
            h4=f4.style.height;
            height[j+1]=height[j]; 
            f5.style.height=h4;
            f4.style.height=h5;
            j=j-1; 
            f4.style.backgroundColor="green";
            f5.style.backgroundColor="green";
        } 
        f5=children.item(j+1);
        height[j+1]=key; 
        f5.style.height=key;
        f5.style.backgroundColor="green";
    }
}

document.getElementById("insertionSort").addEventListener("click",async function(){
    disableSortingButton();
    disableNewArrayBtn();
    disableSizeSlider();
    await insertionSort();
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});
