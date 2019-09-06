/***
*Package formBuilder
*Build forms to be used in surveys
*
*FormBuilder Class
*
*
*@author Novi Sonko
**/

app.FormElement= function ()
{
	this.idNumber= 0;
	
	this.help='<span class="help"></span>';
	this.required='<span class="required"></span>';
	
	
	/**
	*get a unique element id selector
	*
	*@return elementId
	*/
	this.getNewElementId= function (elementType) {
	
	var elementId= 'formbld-sel-'+ this.idNumber;
	
	// make selected element object available
	app.formBuilder.selectedElement= {};
	app.formBuilder.selectedElement.elementId= elementId;
	app.formBuilder.selectedElement.elementType= elementType;

	// Add new element to formPreview
	app.formPreview.addElement(app.formBuilder.selectedElement);
	

	this.idNumber++;

	return elementId;
	}
	/**
	*get default label
	*
	*@return string
	*/
	this.getLabel= function (label) {
		
	return '<label>'+label+'</label>'+this.required+'<br>'+this.help;
		
	}
	/**
	*Wrap content into a container
	*
	*/
	this.wrapContainer= function (elementType, content) {
	
	this.getNewElementId(elementType);
	
	var elementId= app.formBuilder.selectedElement.elementId;
	
	return '<div data-field-type="'+ elementType +'" id="'+ elementId
	+ '" class="form-group">' + content + this.getControls(elementId) + '</div>';
	}
		
	/**
	*Get controls block element
	*
	*/
	this.getControls= function (elementId) 
	{
	return '<div class="element-controls">\
	   <a data-id="'+ elementId +'" class="edit-me"><i class="fa fa-pencil"></i></a>\
	   <a data-id="'+ elementId +'" class="move-down"><i class="fa fa-arrow-up"></i></a>\
	   <a data-id="'+ elementId +'" class="move-up"><i class="fa fa-arrow-down"></i></a>\
	   <a data-id="'+ elementId +'" class="remove-me"><i class="fa fa-minus-circle"></i></a>\
	</div>';
	
	}
	/**
	*Text element
	*
	*/
	this.text= function () {
	
	var content= this.getLabel('Text label:') + '<input class="form-control" name="" type="text" placeholder="" value="">';
	return this.wrapContainer('text', content);
	}
	/**
	*Textarea element
	*
	*/
	this.textarea= function () {
		
	var content= this.getLabel('Paragraph label:') + '<textarea class="form-control"></textarea>';	
	return this.wrapContainer('textarea', content);
	}
	/**
	*Checkboxes element
	*
	*/
	this.checkbox= function () {
	var content= this.getLabel('Checkbox label') + '<input type="checkbox">';	
	return this.wrapContainer('checkbox', content);
	}
	/**
	*Radio element
	*
	*/
	this.radio= function () {
	var content= '<ul><li>'+ this.getLabel('Radio button label A') + '<input type="radio"></li><li>'+ this.getLabel('Radio button label B') + '<input type="radio"></li></ul>';	
	return this.wrapContainer('radio', content);
	}
	/**
	*Multichoice element
	*
	*/
	this.multichoice= function () {
	
	var content= this.getLabel('Multiple choices label:')	+ '<select>\
    <option value="">Option A</option>\
	<option value="">Option B</option>\
	</select>';
	
	return this.wrapContainer('multichoice', content);
	}
	/**
	*Date element
	*
	*/
	this.date= function () {
	
	var content= this.getLabel('Date label:') + '<span class="month">\
			<input type="text">\
			<span class="label">MM</span>\
		  </span>\
		  <span class="above-line">\/</span>\
		  <span class="day">\
			<input type="text">\
			<span class="label">DD</span>\
		  </span>\
		  <span class="above-line">/</span>\
		  <span class="year">\
			<input type="text">\
			<span class="label">YYYY</span>\
		  </span>';	
	return this.wrapContainer('date', content);
	}
	/**
	*Time element
	*
	*/
	this.time= function () {
		
	var content= this.getLabel('Time label:') + '<input class="form-control time-input" name=""\
	type="text" placeholder="" value="">';
	return this.wrapContainer('time', content);
	}
	/**
	*Number element
	*
	*/
	this.number= function () {
	
	var content= this.getLabel('Number label:') + '<input class="form-control" name="" type="number" value="">';	
	return this.wrapContainer('number', content);
	}
	/**
	*Website element
	*
	*/
	this.website= function () {
		
	var content= this.getLabel('Website label:') + '<input class="form-control website-input" name="" type="text" placeholder="" value="">';	
	return this.wrapContainer('website', content);
	}
	/**
	*Email element
	*
	*/
	this.email= function () {
		
	var content= this.getLabel('Email label:') + '<input class="form-control" name="" type="email" placeholder="" value="">';		
	return this.wrapContainer('email', content);
	}
	/**
	*Image element
	*
	*/
	this.image= function () {
	
	var content= this.getLabel('Image label:') + '<input class="form-control input-image" type="file" name="">';	
	return this.wrapContainer('image', content);
	}
	/**
	*File element
	*
	*/
	this.file= function () {
	
	var content= this.getLabel('File label:') + '<input class="form-control input-file" type="file" name="">';
			
	return this.wrapContainer('file', content);
	}
	/**
	*Price element
	*
	*/
	this.price= function () {
	
	var content= this.getLabel('Price label:') + '<input class="form-control input-price" type="number" name="">';
	
	return this.wrapContainer('price', content);
	}
	/**
	*Address element
	*
	*/
	this.address= function () {
	
	var content= this.getLabel('Address label:') + '<span class="flat-num">\
		<span class="label">Flat number:</span>\
		<input type="text" name="flat-num">\
		</span>\
		<span class="street-num">\
		<span class="label">Street number:</span>\
		<input type="text" name="street-num">\
		</span>\
		<span class="street">\
		<span class="label">Street number:</span>\
		<input type="text" name="street">\
		</span>\
		<span class="subtown">\
		<span class="label">Borough:</span>\
		<input type="text" name="subtown">\
		</span>\
		<span class="town">\
		<span class="label">Street number:</span>\
		<input type="text" name="town">\
		</span>\
		<span class="postcode">\
		<span class="label">Postal code:</span>\
		<input type="text" name="postcode">\
		</span>\
		<span class="country">\
		<span class="label">Country:</span>\
		<input type="text" name="country">\
		</span>';	
	return this.wrapContainer('address', content);
	}

}