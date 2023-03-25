//odd number & count & function	
	
var n=[12,24,23,52,79,15,46];

function odd (n){								
	 var count=0;
 for (a=0;a<n.length;a++) {
	
	 if (n[a]%2==1) {
		 count++;
	 } 
 }return count;		
}
 document.write ("Number of odd: "+(odd(n)));

