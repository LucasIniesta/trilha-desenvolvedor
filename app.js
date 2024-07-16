function showDiv (answC, answR){
    let answ = answC + answR
    let div = document.getElementById(answ)

    blockDiv(answC, answR)

    div.style.display = 'block'
}

function blockDiv(answC, answR){
     

    const columns = ['A', 'B', 'C', 'D']
    
    for (let column of columns) {
        if (column != answC) {
            try{
                document.getElementById(column+ answR).style.display = 'none'
            } catch (TypeError){}
        }
    }
}