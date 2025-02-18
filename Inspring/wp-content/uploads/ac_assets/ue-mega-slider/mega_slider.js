function ueMegaSlider(){
  
  var g_megaSlider, g_megaSliderItems, g_objSlider; 
  var g_classConnected, g_activeSliderClass;
  var g_isInEditor;
  var g_currentIndex, g_previousIndex;
  
  /*
  * apply template's styles to mega slide's section 
  */
  function setTemplateStyle(){
    
    var objLayout = g_megaSlider.find('.ue-mega-slider-template-wrapper .elementor');
    var objLayoutClass = objLayout.attr('class');
    
    g_megaSlider.addClass(objLayoutClass);
  }
  
  /*
  * clone sections and append to their parent slides
  */
  function findSections(objMegaSliderItem, sectionToClone){     
    
    //clone section - use detach method on front to make elementor widgets work
    var clonedSectionItem = sectionToClone.detach();
    
    //paste section
    objMegaSliderItem.html(clonedSectionItem);
    
    //add connected class to mega slider child element
    var objMegaSliderSection = objMegaSliderItem.children();
    
    objMegaSliderSection.addClass(g_classConnected);
    
  }
  
  /*
  * show what sections are connected to mega slider in editor
  */
  function findSectionsInEditor(objMegaSliderItem){     
    
    //cloned section's id
    var objMegaSliderItemId = objMegaSliderItem.data("id");
    
    //mega slider item message in editor
    var objMegaSliderItemHTML = "<div class='uc-message'>Section with id <b>'" + objMegaSliderItemId + "'</b> connected to Mega Slider</div>";
    
    //paste section
    objMegaSliderItem.html(objMegaSliderItemHTML);
    
  }
  
  /*
  * handle section find error 
  */
  function showHideErrors(objMegaSliderItem, megaSliderItemId, sectionToClone) {
    
    var showErrors = g_megaSlider.data("errors");
    
    if(showErrors == false)
    return(false);
    
    //check if section with id from mega slider item exist
    if(sectionToClone.length > 0)
    return(false);
    
    //if section with id from mega slider item does not exist, then add error clas to mega slider item
    objMegaSliderItem.addClass('uc-item-error');
    
    //add error html element
    objMegaSliderItem.html("<div class='uc-section-error'><div class='uc-error'>Couldn't find a section with id: '" + megaSliderItemId + "'</div></div>");
    
  }
  
  /*
  * debug items id
  */
  function showHideMegaSliderItemsId(){
    
    var debugMegaSliderItemsId = g_megaSlider.data("items-id");
    
    if (debugMegaSliderItemsId == false)
    return(false);
    
    //show all items id
    g_megaSlider.append("<div class='available-id-s'>Item Id's List<ul class='available-item-id-s-list'></ul></div>");
    
    var objItemIdList = g_megaSlider.find(".available-item-id-s-list");
    var megaSliderItemsNumber = g_megaSliderItems.length;
    
    for(let i = 0; i <= megaSliderItemsNumber - 1; i++){
      
      var objMegaSliderItem = g_megaSliderItems.eq(i);
      var objMegaSliderItemId = objMegaSliderItem.data("id");
      
      //if data-id attribute is empty, skip and go to next data-id
      if(!objMegaSliderItemId)
      continue;
      else
      objItemIdList.append("<li>" + objMegaSliderItemId + "</li>");
      
    }
  }
  
  /*
  * debug elements id
  */
  function showHideMegaSliderElementsId(){
    
    var debugElementsId = g_megaSlider.data("elements-id");
    
    if (debugElementsId == false)
    return(false);
    
    //show list of section's ids that can be connected to mega slider items
    g_megaSlider.append("<div class='available-id-s'>Section Id's List<ul class='available-section-id-s-list'></ul></div>");
    
    var objSectionIdList = g_megaSlider.find(".available-section-id-s-list");
    var availableSections = jQuery('section');
    
    availableSections.each(function(){
      
      var objSectionItem = jQuery(this);
      var objSectionItemId = objSectionItem.attr('id');
      var objSectionItemDisplay = objSectionItem.css('display');
      
      //watch only those sections that are displayed on the page
      if(objSectionItemDisplay == 'none')
      return(true);
      
      //if id attribute is empty, skip and go to next id
      if(!objSectionItemId)
      return(true);
      
      //check if sections are connected to mega slider items
      if(objSectionItem.hasClass(g_classConnected) == true)
      return(true);
      
      //add section's id to the list
      if(objSectionItem.hasClass(g_classConnected) == false)
      objSectionIdList.append("<li>" + objSectionItemId + "</li>");
      
    });
  }
  
  /*
  * show | hide section in editor
  */ 
  function hideSectionInEditor(sectionToClone){
    
    if(g_isInEditor == false)
    return(false);
    
    //affect only section that are not in connected to mega slider
    if(sectionToClone.hasClass(g_classConnected) == true)
    return(false);
    
    var dataShowInEditor = g_megaSlider.data('show-section');
    
    if(dataShowInEditor == 'no')
    sectionToClone.css('display', '');
    
    if(dataShowInEditor == 'message' || dataShowInEditor == 'hide')
    sectionToClone.hide();
    
  }
  
  /*
  * define item type "section" behaviour on live page
  */
  function handleItemTypeSection(){
    
    g_megaSliderItems.each(function(){
      
      var objMegaSliderItem = jQuery(this); 
      var megaSliderItemId = objMegaSliderItem.data("id");
      
      //find sections to clone on the page
      var sectionToClone = jQuery("#" + megaSliderItemId);
      
      //set template's style for mega slides 
      setTemplateStyle();
      
      //clone and paste section from elementor layout
      findSections(objMegaSliderItem, sectionToClone);  
      
      //see if mega slider item id has its element on the page
      showHideErrors(objMegaSliderItem, megaSliderItemId, sectionToClone);
      
    }); 
    
    //handle debug mode   
    showHideMegaSliderItemsId();
    showHideMegaSliderElementsId();
    
  }
  
  
  /*
  * define item type "section" behaviour in editor
  */
  function handleItemTypeSectionInEditor(){
    
    g_megaSliderItems.each(function(){
      
      var objMegaSliderItem = jQuery(this); 
      var megaSliderItemId = objMegaSliderItem.data("id");
      
      //find sections to clone on the page
      var sectionToClone = jQuery("#" + megaSliderItemId);
      
      //tell to user which section is connected
      findSectionsInEditor(objMegaSliderItem);
      
      //see if mega slider item id has its element on the page
      showHideErrors(objMegaSliderItem, megaSliderItemId, sectionToClone);
      
      //show | hide sections if needed
      hideSectionInEditor(sectionToClone);
      
    }); 
    
    //handle debug mode   
    showHideMegaSliderItemsId();
    showHideMegaSliderElementsId();
    
  }
  
  
  /*
  * Slider Animation Repeat
  */
  function triggerAnimation(){
    
    setTimeout(function(){      
      
      //update active slider index
      g_currentIndex = g_objSlider.find(g_activeSliderClass).index();
      
      if(g_currentIndex == g_previousIndex)
      return(false);
      
      //find all elements with data-settings attribute
      g_objSlider.find('[data-settings]').each(function(){
        
        var objAnimatedElement = jQuery(this);
        var settings = objAnimatedElement.attr('data-settings');        
        var settingsObj = JSON.parse(settings);
        
        //exclude all elements that dont have _animation setting
        if(!settingsObj._animation)
        return(true);
        
        //add non animated class and remove all animatedd classes
        objAnimatedElement.addClass('elementor-invisible');
        objAnimatedElement.removeClass( settingsObj._animation + ' animated' );
        
        //exclude those elements that are not inside active slider item
        if(!objAnimatedElement.closest(g_activeSliderClass).length)
        return(true);
        
        //find delays
        var animatedElementDelay;
        
        if(settingsObj._animation_delay)
        animatedElementDelay = settingsObj._animation_delay;
        else
        animatedElementDelay = 0;

        var sliderDelay = g_megaSlider.data('slider-delay');
        var totalDelay = animatedElementDelay + sliderDelay;
        
        //se time out function that add's animated class after animation is over
        setTimeout(function(){
          
          objAnimatedElement.removeClass('elementor-invisible');
          objAnimatedElement.addClass( settingsObj._animation + ' animated' );
          
        }, totalDelay);      
        
      });   
      
      g_previousIndex = g_currentIndex;
      
    }, 50);
    
  }
  
  /**
  * on changed item owl event
  */
  function onSliderItemChange(){
    
    triggerAnimation();
    
  }
  
  /*
  * init mega slider
  */
  this.init = function(objMegaMenu){
    
    //init globals
    g_megaSlider = jQuery(objMegaMenu);
    g_megaSliderItems = g_megaSlider.find('.ue-mega-slider-item');
    g_objSlider = g_megaSlider.find('.owl-carousel');
    
    g_classConnected = 'uc-connected';
    g_activeSliderClass = '.uc-active-item';
    
    g_isInEditor = g_megaSlider.data("editor");
    
    //do not run mega slider in editor
    if(g_isInEditor == "no")
    handleItemTypeSection();    
    
    //in editor run a different function that do not manipulate DOM
    if(g_isInEditor == "yes")
    handleItemTypeSectionInEditor();
    
    //init events
    g_objSlider.on('changed.owl.carousel', onSliderItemChange);
    
  }
}