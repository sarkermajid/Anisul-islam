for(var i=1; i<=100; i++){
    document.write(" "+i);
    if (i== 10){            // break statement document ar niche dile amn hoy.
        break;
    }
}

document.write("<br>")

for (var x =1; x<=10; x++){
    if(x==6){
        break;                // break statement //
    }
    document.write(" "+x);
}

document.write("<br>");

for(x=1; x<=10; x++){
    if (x==5){
        continue;      // continue statement //
    }
    document.write(" "+x);
}

document.write("<br>")

for(x=1; x<=10; x++){
    if(x %2 != 0){
        continue
    }
    document.write(" "+x);
}

