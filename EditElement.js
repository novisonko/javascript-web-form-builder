/***
*Package formBuilder
*Provide edit element forms
*
*EditElement Class
*
*
*@author Novi Sonko
**/

app.EditElement= function ()
{

	/**
	*get default label
	*
	*@return string
	*/
	this.getLabel= function (label) {
		
	return '<label>'+label+'</label>';
		
	}
	/**
	*Wrap content into a container
	*
	*/
	this.wrapContainer= function (typeElement, elementId, content) {

	return '<div data-type="'+ typeElement +'" data-id="'+ elementId +'" class="edit-element">' + ' <h2>Edit "'+ typeElement + '" Element</h2> ' + content + '</div>';
	}
	/**
	*Edit text element
	*
	*/
	this.text= function (elementId) {
	
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('text', elementId, content);
	}
	/**
	*Textarea element
	*
	*/
	this.textarea= function (elementId) {
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input class="form-control" type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('textarea', elementId, content);
	}
	/**
	*Checkboxes element
	*
	*/
	this.checkbox= function (elementId) {
			
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input class="form-control" type="checkbox" name="required"></li>\
	</ul>\
	<a class="add-option-label"><i class="fa fa-plus-circle"></i>Option</a>\
	<ul class="option-labels">\
	<li><input data-number="0" class="option-label" name="option-label" type="text" placeholder="Option label"></li>\
	</ul>';
		
	return this.wrapContainer('checkbox', elementId, content);
	}
	/**
	*Radio element
	*
	*/
	this.radio= function (elementId) {
	
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input class="form-control" type="checkbox" name="required"></li>\
	</ul>\
	<a class="add-option-label"><i class="fa fa-plus-circle"></i>Option</a>\
	<ul class="option-labels">\
	<li><input data-number="0" class="option-label" name="option-label" type="text"\
	placeholder="Option label"></li>\
	</ul>';
	
	return this.wrapContainer('radio', elementId, content);
	}
	/**
	*Multichoice element
	*
	*/
	this.multichoice= function (elementId) {
	
	var content= '<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input class="form-control" type="checkbox" name="required"></li>\
	</ul>\
	<a class="add-option-label"><i class="fa fa-plus-circle"></i>Option</a>\
	<ul class="option-labels">\
	<li><input data-number="0" class="option-label" name="option-label"\
	type="text" placeholder="Option label"></li>\
	</ul>';
	
	return this.wrapContainer('multichoice', elementId, content);
	}
	/**
	*Date element
	*
	*/
	this.date= function (elementId) {
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('date', elementId, content);
	}
	/**
	*Time element
	*
	*/
	this.time= function (elementId) {
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('time', elementId, content);
	}
	/**
	*Number element
	*
	*/
	this.number= function (elementId) {
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('number', elementId, content);
	}
	/**
	*Website element
	*
	*/
	this.website= function (elementId) {
	
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('website', elementId, content);
	}
	/**
	*Email element
	*
	*/
	this.email= function (elementId) {
	
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
		
	return this.wrapContainer('email', elementId, content);
	}
	/**
	*Image element
	*
	*/
	this.image= function (elementId) {
	
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('image', elementId, content);
	}
	/**
	*File element
	*
	*/
	this.file= function (elementId) {
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
		
	return this.wrapContainer('file', elementId, content);
	}
	/**
	*Price element
	*
	*/
	this.price= function (elementId) {
			
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
		
	return this.wrapContainer('price', elementId, content);
	}
	/**
	*Address element
	*
	*/
	this.address= function (elementId) {
	
		
	var content= '\
	<ul>\
	<li><input class="form-control" name="key" type="text" placeholder="Variable name"></li>\
	<li><input class="form-control" name="label" type="text" placeholder="Label"></li>\
	<li><input class="form-control" name="help" type="text" placeholder="Text"></li>\
	<li><input class="form-control" name="condition" type="text" \
	placeholder="Enter condition formula"></li>\
	<li><span>Required</span><input type="checkbox" name="required"></li>\
	</ul>';
	
	return this.wrapContainer('address', elementId, content);
	}

}