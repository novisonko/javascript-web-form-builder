/***
*Package formBuilder
*Build forms to be used in surveys
*
*FormBuilder Class
*
*
*@author Novi Sonko
**/

app.FormBuilder= function ()
{
	/*
	*Keep selected element data available
	*/
	this.selectedElement= {};
	
	this.formBuilderTemplate= app.formBuilderTemplate;
	
	//display loader image
	this.showLoader= function () {};
	//hide loader image
	this.hideLoader= function () {};
	
	/**
	*handle load action
	*/
	this.loadHandler= function( response, status, xhr ) {
	  if ( status == "error" ) {
		  var msg= 'Sorry but there was an error';
		console.error( + xhr.status + " " + xhr.statusText);
		$('#error').show().html(msg);
	  }
	}
	
	/**
	*Start form builder
	*
	*/
	this.init= function () {
		
		// form preview handler
		app.formPreview= new app.FormPreview();
		// create formElement factory
		app.formElement= new app.FormElement();
		// create editElement factory
		app.editElement= new app.EditElement();
		
		this.showLoader();
		$('body').load(this.formBuilderTemplate, this.loadHandler);
		
		// load form elements from database
		this.loadFormFields();
		
		this.initEvents();
	app.showStatus();		
	}
	/**
	*Events
	*
	*/
	this.initEvents= function () {
		
		// save form
		$(document).off('click', '.save-form').on('click','.save-form', function (e) {
			app.formBuilder.saveForm();
		});
		
		// add new element to form preview
		$(document).off('click', '#formbld-elements a').on('click','#formbld-elements a', function (e) {
		
		var formBuilder= app.formBuilder;
		formBuilder.selectedElement= {};
		
		// append new element DOM object to preview container
		var elementType= $(this).data('field-type');
		
		// this.selectedElement created in formElement
		$('#formbld-preview').append(app.formElement[elementType]());

		// add edit element to edit container
		$('#formbld-edit .edit-element').detach();
		formBuilder.selectedElement.editElement= $(app.editElement[elementType](formBuilder.selectedElement.elementId));
		
		// append new element DOM object to edit container
		$('#formbld-edit').append(formBuilder.selectedElement.editElement);

	app.showStatus();
	});
	
		// edit me button
		$(document).off('click', '#formbld-preview .edit-me').on('click','#formbld-preview  .edit-me', function (e) {
			
		var formPreview= app.formPreview;
		var formBuilder= app.formBuilder;		
		formBuilder.selectedElement= {};

		// update edit element in DOM
		formBuilder.updateEditElement($(this).data('id'));

		app.showStatus();		
		});
		
		// remove me button
		$(document).off('click', '#formbld-preview .remove-me').on('click','#formbld-preview  .remove-me', function (e) {		
			
		var formPreview= app.formPreview;
		var formBuilder= app.formBuilder;
		formBuilder.selectedElement= {};	
		
		var elementId= $(this).data('id');
		
			if (formPreview.removeElement(elementId))
			{			
			formPreview.removed[formPreview.removed.length]= $('#'+elementId).detach();
			}
			else{
			console.error('error removing element '+ elementId);	
			}	
		app.showStatus();		
		});
		
		// Move element up
		$(document).off('click', '#formbld-preview .move-up').on('click','#formbld-preview  .move-up', function (e) {
			
		var formPreview= app.formPreview;
		var formBuilder= app.formBuilder;
		formBuilder.selectedElement= {};
			
		var elementId= $(this).data('id');		
			
		// update edit element in DOM
		formBuilder.updateEditElement(elementId);
		
			if (formPreview.canMoveElementUp(elementId))
			{
			var elementAfterId= formPreview.getElementAfter(elementId);
			
				if (formPreview.moveElementUp(elementId))
				{
				$element= $('#'+elementId).detach();
				$('#'+elementAfterId).after($element);
				}
				else {
				console.error('error moving element up '+ elementId);	
				}
			}
		app.showStatus();	
		});
		
		// move element down
		$(document).off('click', '#formbld-preview .move-down').on('click','#formbld-preview  .move-down', function (e) {
			
		var formPreview= app.formPreview;
		var formBuilder= app.formBuilder;
		formBuilder.selectedElement= {};
		
		var elementId= $(this).data('id');
			
		// update edit element in DOM
		formBuilder.updateEditElement(elementId);
		
			if (formPreview.canMoveElementDown(elementId))
			{
			var elementBeforeId= formPreview.getElementBefore(elementId);
		
				if (formPreview.moveElementDown(elementId))
				{
				var $element= $('#'+elementId).detach();
				$('#'+elementBeforeId).before($element);
				}
				else {
				console.error('error moving element up '+ elementId);	
				}
			}
		app.showStatus();	
		});
		
		// update form preview DOM element
		$(document).off('change', '#formbld-edit :input').on('change','#formbld-edit :input', function (e) 
		{
		
		var formPreview= app.formPreview;
		var formBuilder= app.formBuilder;
			
			if (typeof formBuilder.selectedElement === 'object')
			{
			var elementId= formBuilder.selectedElement.elementId;
			var key= $(this).attr('name');
			formBuilder.selectedElement[key]= $(this).val();
			formPreview.updateElement(elementId, key, $(this).val());
			
			}
		app.showStatus();			
		});
		
		/*
		*Update edit element in DOM
		*
		*/		
		this.updateEditElement= function (elementId)
		{	
		
		var formPreview= app.formPreview;
		
		// get element from formPreview
		this.selectedElement= formPreview.getElement(elementId);
		
			if (typeof this.selectedElement === 'object')
			{
			
			//empty edit container
			$('#formbld-edit .edit-element').detach();
			
				// append new element DOM object to edit container					
				if (typeof this.selectedElement.editElement !== 'object')
				{
				
				// create DOM object
				var elementType= this.selectedElement.elementType;
				this.selectedElement.editElement= $(app.editElement[elementType](this.selectedElement.elementId));
				
				}
					
			// append DOM object to edit container
			$('#formbld-edit').append(this.selectedElement.editElement);	
				
			var keys=['variable', 'label', 'help', 'condition'];
			
				for(var i=0; i < keys.length; i++)
				{
					if (typeof this.selectedElement[keys[i]] === 'string')
					{
					$('#formbld-edit'+' ['+keys[i]+']').text(this.selectedElement[keys[i]]);
					}
				}
			}			
		}
		
	}
	/**
	*Load form
	*
	*/
	this.loadForm= function (data) {

		for(var i=0; i < data.length; i++)
		{
		/*
		append element to form preview
		this.selectedElement created in formElement
		*/
			if (typeof data[i]['elementType'] === 'string')
			{
			$('#formbld-preview').append(app.formElement[data[i]['elementType']]());
			}
		}
	
		var last= data.length - 1;		
		
		// add edit element to edit container
		$('#formbld-edit .edit-element').detach();
		
		if (typeof data[last]['elementType'] === 'string')
		{
		app.formBuilder.selectedElement.editElement= $(app.editElement[data[last]['elementType']](app.formBuilder.selectedElement.elementId));
		
		// append new element DOM object to edit container
		$('#formbld-edit').append(app.formBuilder.selectedElement.editElement);
		}
						
		var keys=['variable', 'label', 'help', 'condition'];
		
		for(var i=0; i < data.length; i++)
		{
			for(var j=0; j < keys.length; j++)
			{
			/*
			* update formPreview elements list and the edit element
			*/
			app.formPreview.updateElement(this.selectedElement.elementId, keys[j], data[i][keys[j]], i);
			
			}
			
		}
	
		// update this.selectedElement
		for(var j=0; j < keys.length; j++)
		{
		this.selectedElement[keys[j]]= data[last][keys[j]];
		}
	
	}
	/**
	*load form fields
	*
	*/
	this.loadFormFields= function () {
		
	$.get(app.loadFormUrl, function (data)
	{
	var elements= JSON.parse(data);

	app.formBuilder.loadForm(elements);	
	})
	.fail(function () {	
	console.error('Failed to load form data');
	});
		
	}
	/**
	*save form
	*
	*/
	this.saveForm= function () {
				
		if (app.formPreview.elements.length > 0) {		
		var elements= app.formPreview.getElements();
		var metadata= {};
		var data= JSON.stringify({"elements": elements, "metadata": metadata});
		$.post(app.saveFormUrl, data);	
		}
	}
}