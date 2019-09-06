/***
*Package formBuilder
*Build forms to be used in surveys
*
*FormPreview Class
*
*
*@author Novi Sonko
**/

app.FormPreview= function ()
{

	/* records list of elements
	format is position: elementId*/
	this.elements= [];
	
	/* records list of removed elements*/
	this.removed= [];
	/**
	*Add element to list
	*
	*/
	this.addElement= function (element)
	{	
		if ((typeof element === 'object')
		&& (typeof element.elementId === 'string'))
		{			
		var index= this.elements.length;
		this.elements[index]= element;	
		}
	}
	/**
	*Get elements list
	*
	@return elements object
	*/
	this.getElements= function ()
	{	
	return this.elements;
	}
	/**
	*Keep removed element
	*
	*@param jquery object
	*/
	this.addRemovedElement= function (element)
	{
	this.removed[this.removed.length]= element;
	}
	/**
	*Get last removed element
	*
	*@return jquery object
	*/
	this.getLastRemovedElement= function ()
	{
	var lastRemoved= this.removed[this.removed.length-1];
	this.removed.splice(this.removed.length-1, 1);
	return lastRemoved;
	}
	/**
	* update element
	*
	*@return element object
	*/
	this.updateElement= function (elementId, key, value, position= -1) {
	
		if (position < 0)
		{
		position= this.getElement(elementId, 'position');
		}
	
		if (typeof position === 'number')
		{
		this.elements[position][key]= value;
			if ('label' === key) {
			$('#'+this.elements[position]['elementId']+' label').text(value+':');
			}
			if ('help' === key) {
			$('#'+this.elements[position]['elementId']+' .help').text(value);
			}
			if ('required' === key) {
			value= ('on' === value) ? '*' : '';
			$('#'+this.elements[position]['elementId']+' .required').text(value);
			}
		return true;		
		}

	return false;
	}
	/**
	get element
	*
	*@return element object
	*/
	this.getElement= function (elementId, option='element') {
	
	var max= this.elements.length;	
		
		for (var i=0; i < max; i++)
		{
			console.log('id is: ' + elementId);
			console.log(this.elements[i].elementId);
			console.log('eval: ' + eval(elementId === this.elements[i].elementId));
			if (elementId === this.elements[i].elementId)
			{
				if ('position' === option)
				{				
				return i;	
				}
				else
				{
				return this.elements[i];
				}
			}
		}
	return null;
	}
	/**
	get position of element
	*
	*@return position number
	*/
	this.getPosition= function (elementId) {
	
	return this.getElement(elementId, 'position');
	}
	/**
	get element before
	*
	*@return string elementId
	*/
	this.getElementBefore= function (elementId) {

	var position= this.getPosition(elementId);
	
		if (position > 0)
		{
		return this.elements[position-1].elementId;
		}
		
	return null;
	}
	/**
	get element after
	*
	*@return string elementId
	*/
	this.getElementAfter= function (elementId) {

	var position= this.getPosition(elementId);
	
		if (position < (this.elements.length-1))
		{
		return this.elements[position+1].elementId;
		}
		
	return null;
	}
	/**
	set position of element
	*
	*@param position
	*@param elementId
	*@return true
	*/
	this.setPosition= function (position, elementId) {
	
		if ((position >= 0)
			&& (position < this.elements.length))
		{
			this.elements[position]= elementId;
			return true;
		}
	return false;
	}
	/**
	*Remove element
	*
	*@return boolean
	*/
	this.removeElement= function (elementId) {
	
	var currentPosition= this.getPosition(elementId);
	
	console.log('removed element at position:' + currentPosition);
	
		if (typeof currentPosition === 'number') {			
		this.elements.splice(currentPosition, 1);
		return true;
		}
		
	return false;
	}
	/**
	*Can move element up
	*
	*@return boolean
	*/
	this.canMoveElementUp= function (elementId) {
	
	var currentPosition= this.getPosition(elementId);
	
		if ((typeof currentPosition === 'number')
			&& (currentPosition < (this.elements.length - 1)))
		{
		return true;
		}
	return false;
	}
	/**
	*Move element up
	*
	*@return boolean
	*/
	this.moveElementUp= function (elementId) {
	
	var currentPosition= this.getPosition(elementId);
	var last= this.elements.length - 1;
		
		// if not last
		if ((typeof currentPosition === 'number') 
			&& (currentPosition < last)) {
		
		var temp= this.elements[currentPosition];		
		this.elements[currentPosition]= this.elements[currentPosition+1];
		this.elements[currentPosition+1]= temp;
		
		return true;
		}
	return false;
	}
	/**
	*Can move element down
	*
	*@return boolean
	*/
	this.canMoveElementDown= function (elementId) {
	
	var currentPosition= this.getPosition(elementId);
	
		if ((typeof currentPosition === 'number')
			&& (currentPosition > 0))
		{
		return true;
		}
	return false;
	}
	/**
	*Move element down
	*
	*@return boolean
	*/
	this.moveElementDown= function (elementId) {
	
	var currentPosition= this.getPosition(elementId);
	
		// if not first
		if ((typeof currentPosition === 'number') 
			&& (currentPosition > 0)) {
		
		var temp= this.elements[currentPosition];		
		this.elements[currentPosition]= this.elements[currentPosition-1];
		this.elements[currentPosition-1]= temp;
		
		return true;
		}
	return false;
	}
}