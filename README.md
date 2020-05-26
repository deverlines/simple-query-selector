Example

      let data = {
        k1: '1',
        k2: '2'
      }
    
      each(data, (value, key) => {
    
      });
    
      let el1 = qs('.example-1');
    
      el1.ael('click', (e) => {
    
        el1.attr('attr-1', 'true').attr('attr-2', 'true');
        // <div class="example-1" attr-1="true" attr-2="true">
    
        el1.attr('attr-1');
        // true
    
        el1.toggleAttr('attr-4');
        // <div class="example-1" attr-4="attr-4">
        // <div class="example-1">
    
        el1.toggleAttr('attr-5', 'one');
        // <div class="example-1" attr-5="one">
        // <div class="example-1">
    
        el1.toggleAttr('attr-6', 'one', 'two');
        // <div class="example-1" attr-5="one">
        // <div class="example-1" attr-5="two">
    
        el1.addClass('one').addClass('two').removeClass('three').toggleClass('f', 's');
        // example-1 one two f
        // example-1 one two s
    
        let child = el1.qs('.example-1_item');
    
      });
    
      let elements = qsa('.example-2');
      elements.each((element, i) => {
        let childs = element.qsa('.example-2_item');
      });
    
      elements.ael('click', (event, element, i) => {
    
        elements.addClass('multiple');
    
        elements.removeClass('multiple-2');
    
        elements.attr('attr-1', 'value')
    
      });