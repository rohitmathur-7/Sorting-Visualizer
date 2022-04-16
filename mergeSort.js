let fn1,fn2,fn3,hn1,hn2,hn3;
async function merge(l,m,r){
    let n1=m-l+1;
    let n2=r-m;
    let L=new Array(n1); 
    let R=new Array(n2);
    for (let i=0;i<n1;i++){
        fn1=children.item(l+i);
        fn1.style.backgroundColor="orange";
        L[i]=height[l+i];
    }
    for (let j=0;j<n2;j++){
        fn2=children.item(m+1+j);
        fn2.style.backgroundColor="orange";
        R[j]=height[m+1+j];
    }
    let i=0;
    let j=0;
    let k=l;
    while(i<n1 && j<n2) {
        await new Promise(resolve => setTimeout(() => {resolve()},speed));
        if(L[i]<=R[j]) {
            height[k]=L[i];
            fn1=children.item(i+l);
            hn1=fn1.style.height;
            fn3=children.item(k);
            fn3.style.height=height[k].toString(10)+"px";
            fn3.style.backgroundColor="green";
            i++;
        }
        else{
            height[k]=R[j];
            fn2=children.item(m+1+j);
            hn2=fn2.style.height;
            fn3=children.item(k);
            fn3.style.height=height[k].toString(10)+"px";
            fn3.style.backgroundColor="green";
            j++;
        }
        await new Promise(resolve => setTimeout(() => {resolve()},speed));
        k++;
    }
    while(i<n1){
        height[k]=L[i];
        fn1=children.item(i+l);
        hn1=fn1.style.height;
        fn3=children.item(k);
        fn3.style.height=height[k].toString(10)+"px";
        fn3.style.backgroundColor="green";
        i++;
        k++;
        await new Promise(resolve => setTimeout(() => {resolve()},speed));
    }
    while(j<n2){
        height[k]=R[j];
        fn2=children.item(m+1+j);
        hn2=fn3.style.height;
        fn3=children.item(k);
        fn3.style.height=height[k].toString(10)+"px";
        fn3.style.backgroundColor="green";
        j++;
        k++;
        await new Promise(resolve => setTimeout(() => {resolve()},speed));
    }
}
async function mergeSort(l, r){
    if(l>=r){
        return;
    }
    let m=l+parseInt((r-l)/2);
    await mergeSort(l,m);
    await mergeSort(m+1,r);
    await merge(l,m,r);
    await new Promise(resolve => setTimeout(() => {resolve()},speed));
}

document.getElementById("mergeSort").addEventListener("click",async function(){
    disableSortingButton();
    disableNewArrayBtn();
    disableSizeSlider();
    await mergeSort(0,sze-1);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});
