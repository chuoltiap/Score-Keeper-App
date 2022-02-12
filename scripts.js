function increaseGoal1(){
    let i= document.getElementById("manutdgoal");
    i1=i.innerText;
    i1++
    
    document.getElementById('manutdgoal').innerText=i1
    }
    
    function increaseFoul1(){
    let i= document.getElementById("manutdfoul");
    i1=i.innerText;
    i1++
    
    document.getElementById('manutdfoul').innerText=i1
    }
    
    function increaseGoal2(){
    let i= document.getElementById("liverpoolgoal");
    i1=i.innerText;
    i1++
    
    document.getElementById('liverpoolgoal').innerText=i1
    }
    
    function increaseFoul2(){
    let i= document.getElementById("liverpoolfoul");
    i1=i.innerText;
    i1++
    
    document.getElementById('liverpoolfoul').innerText=i1
    }
    function refreshButt(){
        let i= document.getElementById("manutdgoal")
        let f= document.getElementById("manutdfoul");
        let g= document.getElementById("liverpoolgoal");
        let h= document.getElementById("liverpoolfoul");
        i1=i.innerText;
        i1=0
        f1=f.innerText;
        f1=0
        g1=g.innerText;
        g1=0
        h1=h.innerText;
        h1=0
        document.getElementById('manutdgoal').innerText=i1
        document.getElementById('manutdfoul').innerText=f1
        document.getElementById('liverpoolgoal').innerText=g1
        document.getElementById('liverpoolfoul').innerText=h1
    }
