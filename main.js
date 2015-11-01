'use strict';

$(document).ready(init);

function init() {
	$('#dueDate').val(Date.now().toString());
	$('#get').click(getClicked);
	$('tbody').on('click','input',chkClicked);
}

function getClicked() {
	//var $due = $('#dueDate').val(Date.today());

	var $row = $('<tr>');

	var $tableChk = $('<td>');
	var $check = $('<input>').attr('type','checkbox');
	$tableChk.append($check);

	var $tableName = $('<td>').text($('#taskName').val());
	
	var $tableDate = $('<td>').text($('#dueDate').val());

	$row.append($tableChk,$tableName,$tableDate);

	$('.table').find('tbody').append($row);
}

function chkClicked(e) {
	var $target = $(e.target);
	var checked = $target.is(':checked');
	//var checked = e.target.checked;
	//var notChecked = $target.is(':not(:checked)');
	$target.closest('tr').toggleClass('strikeThru');
}