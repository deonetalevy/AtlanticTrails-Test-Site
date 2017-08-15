/*Deone'Ta Levy
	Web Based IT
	Project 6
	04/26/2015
*/

//Script file for displaying time in the footer and modifying the table

function getCurrentTimeAndDate(element){

	element.innerHTML = element.innerHTML + "Today is: " + Date(); 
	
}

function changeTableRow (table) {
	
	for (var i = table.length - 1; i >= 0; i--) {
		
		var tRows = table[i].rows;
		
		for (var j = 0; j < tRows.length; j++) {
			if (j==0) {
				tRows[j].style.backgroundColor = 'black';
				tRows[j].style.color = 'white';
			} else if (j%2==0) {
				tRows[j].style.backgroundColor = 'blue';
				tRows[j].style.color = 'yellow';
			} else {
				tRows[j].style.backgroundColor = 'lightGray';
				tRows[j].style.color = 'blue';
			}
		};
		
		table[i].style.fontSize = ".8em";
		table[i].style.marginLeft = "auto";
		table[i].style.marginRight = "auto";
	};
};

var TableBackgroundMouseoverColor = "#ffff19";


function StoreBackgroundColor(row) {return row.style.backgroudColor; };
function ChangeBackgroundColor(row) { row.style.backgroundColor = TableBackgroundMouseoverColor;
									  row.style.color = 'black';
}
function RestoreBackgroundColor(row) { changeTableRow(document.getElementsByClassName('tableClass'))};


getCurrentTimeAndDate(document.getElementById('footer'));
changeTableRow(document.getElementsByClassName('tableClass'));
