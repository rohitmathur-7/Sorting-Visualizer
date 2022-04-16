let hg1,hg2,fh1,fh2,fh3,hg3,fh4,hg4,fh5,fh6;

function swap(i,j){
    let temp=height[i];
    height[i]=height[j];
    height[j]=temp;
}
async function partition(low,high){
    let pivot=height[high];
    fh6=children.item(high);
    fh6.style.backgroundColor="blue";
    let i=(low-1);
    for(let j=low;j<=high-1;j++){
        await new Promise(resolve => setTimeout(() => {resolve()},speed));
        if(height[j]<pivot){
            i++;
            fh1=children.item(i);
            fh1.style.backgroundColor="purple";
            fh2=children.item(j);
            fh2.style.backgroundColor="purple";
            hg1=fh1.style.height;
            hg2=fh2.style.height;
            fh1.style.height=hg2;
            fh2.style.height=hg1;
            swap(i,j);
            if(fh1.style.backgroundColor!="green") fh1.style.backgroundColor="red";
            if(fh2.style.backgroundColor="green") fh2.style.backgroundColor="red";
        }
    }
    swap(i+1,high);
    fh3=children.item(i+1);
    hg3=fh3.style.height;
    fh4=children.item(high);
    hg4=fh4.style.height;
    fh3.style.backgroundColor="orange";
    fh4.style.backgroundColor="orange";
    fh3.style.height=hg4;
    fh4.style.height=hg3;
    fh3.style.backgroundColor="green";
    await new Promise(resolve => setTimeout(() => {resolve()},speed));
    return (i+1);
}
async function quickSort(low,high){
    if(low<high){
        let pi=await partition(low,high);
        await quickSort(low,pi-1);
        await quickSort(pi+1,high);
    }
    else{
        if(low>=0 && low<sze){
            fh5=children.item(low);
            fh5.style.backgroundColor="green";
        }
    }
}

document.getElementById("quickSort").addEventListener("click",async function(){
    disableSortingButton();
    disableNewArrayBtn();
    disableSizeSlider();
    await quickSort(0,sze-1);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});