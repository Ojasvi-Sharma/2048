document.getElementById("1").innerHTML='2';
document.getElementById("2").innerHTML='2';

function checkArrowKeys(e) {
    key= window.event? event.keyCode: e.keyCode;
    if(key && (key == 65 || key == 37)) { 
    	left();
    	console.log('Left')
    }
    if(key && (key == 68 || key == 39)) { 
    	right();
    	console.log('Right');
    }
    if(key && (key == 87 || key == 38)) {
    	up();
    	console.log('Up');
    }
    if(key && (key == 83 || key == 40)) {
    	down();
    	console.log('Down');
    }
}

document.onkeydown = checkArrowKeys;

/*var x = new Array(4);
for (var i = 0; i < 4; i++) {
  x[i] = new Array(4);
}*/

var mv = 0
var score = 4

var x = [];
for (r=0;r<4;r++){
	x[r]=[]
	for(c=0;c<4;c++){
		x[r][c]= ''
	}
}

x[0][0]='2'
x[0][1]='2'

var col=4
var row=4

var f=0

function randomgen() {

	while(1) {
	var a = parseInt(Math.random()*4);
	var b = parseInt(Math.random()*4);
	var e = parseInt(Math.random()*4);
	if(e < 2 && x[a][b] == '')
		{
			x[a][b] = '2';
            break;

			}

	else if(e && x[a][b].val == '')
		{
			x[a][b] = '4';
            break;
			}
	}	
}

function giveval() {
	var m=1
	for(i=0; i<4; i++) {
		for(j=0; j<4; j++) {
			document.getElementById(m).innerHTML=x[i][j];
			if(x[i][j]=='2048') {
				alert("Congratulations!\n\nYou win!")
			}
			m++;
		}
	}
	document.getElementById("25").innerHTML="&nbsp;Score: " + score.toString();
}

function left() {
	mv++
	for(row=0;row<4;row++){
		for(col=1;col<4;col++){
			if(x[row][col] != ''){
				var c = col;
				while(c > 0){
					if(x[row][c-1] == ''){
                          x[row][c-1] = x[row][c];
                          x[row][c]= '';
                          c--;
                          giveval();

					}
					else if(x[row][c-1] == x[row][c]) {
						x[row][c-1] *= 2;
						x[row][c] = '';
						score=score+(x[row][c-1]);
						giveval();
					}
					else{
						break;
					}				}
			}

		}
	}randomgen();
}

function up(){
	mv++
	for (row=1;row<4;row++){
	  for(col=0;col<4;col++){
	    	if(x[row][col] != ''){
	  		  var r = row;
	  		     while(r > 0){
                     if(x[r-1][col] == '') {
                     	x[r-1][col] = x[r][col];
                     	x[r][col] = ''; 
                     	r--;
                     	giveval();
                     }
                     else if(x[r-1][col] == x[r][col]) {
                     	x[r-1][col] *= 2;
                     	x[r][col] = ''; 
                        score= score+x[r-1][col];
                        giveval();
                     }
                     else {
                     	break;
                     } 
	  		}
	  	}
	  }
   }randomgen();
}

function down(){
	mv++
	for(col=0;col<4;col++){
		for(row=2;row>=0;row--){
			if(x[row][col] != ''){
	  		  var r = row;
	  		     while(r < 3){
                     if(x[r+1][col] == '') {
                     	x[r+1][col] = x[r][col];
                     	x[r][col] = ''; 
                     	r++;
                     	giveval();
                     }
                     else if(x[r+1][col] == x[r][col]) {
                     	x[r+1][col] *= 2;
                     	x[r][col] = '';
                        score = score + x[r+1][col];
                        giveval();
                     }
                     else {
                     	break;
                     } 

		}
	}
}
}randomgen();
}

function right(){
	mv++
    for(row=0;row<4;row++){
       	for(col=2;col>=0;col--){
             if(x[row][col] != ''){
             	var c=col;
             	while(c<3){
             		if(x[row][c+1] == ''){
             			x[row][c+1] = x[row][c];
             			x[row][c] = '';
             			c++;
             			giveval();
             		}
             		else if(x[row][c+1] == x[row][c]){
                     	x[row][c+1] *= 2;
                     	x[row][c] = ''; 
                        score = score + x[row][c+1];
                        giveval();
                     }
                     else {
                     	break;
                     } 
             	}
             }
       	}
       } randomgen();
}

//font not fitting
//what to use for score?