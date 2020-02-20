Methods

    qs('selector')  - document.querySelector('selector')
    qsa('selector') - document.querySelectorAll('selector')
    
    Element.qs('selector')  - Element.querySelector('selector')
    Element.qsa('selector') - Element.querySelectorAll('selector')


    Element.ael(event, callback)    - Element.addEventListener(event, callback)
    NodeList.ael(event, callback(e, element))   - addEventListener for Elements of NodeList


    NodeList.each(callback(element, key))   - NodeList.forEach


    Element.attr('attr-name')       - Element.getAttribute('attr-name')
    Element.attr('attr-name', 'value')      - Element.setAttribute('attr-name', 'value');
    Element.attr('attr-name', null)     - Element.removeAttribute('attr-name');
    Element.toggleAttr('attr-name', 'value')        - remove or add attribute
    Element.toggleAttr('attr-name', 'value1', 'value2')     - toggle attribute value (value1 or value2)

    Element.addClass('class')       - Element.classList.add('class');
    Element.removeClass('class')        - Element.classList.remove('class');
    Element.hasClass('class')       - Element.classList.contains('class');
    Element.toggleClass('class')        - remove or add class
    Element.toggleClass('class1', 'class2')     - toggle class (value1 or value2)


Example
    
    <div class="example-1">
        <div class="example-1_item">1</div>
    </div>

    <div class="example-2">
        <div class="example-2_item">2</div>
        <div class="example-2_item">2</div>
    </div>
    <div class="example-2">
        <div class="example-2_item">2</div>
        <div class="example-2_item">2</div>
    </div>

    <div class="example-3">3</div>

    <script>
    
      let example1 = qs('.example-1');
      let example1Item = example1.qs('.example-1_item');
    
      let attrAction = (element => {
    
        if (element.attr('name-attr-1'))      // Element.getAttribute
          element.attr('name-attr-1', null);    // Element.removeAttribute
        else
          element.attr('name-attr-1', 'value');       // Element.setAttribute
    
        element.toggleAttr('name-attr-2', 'value');  // remove or add attribute
        element.toggleAttr('name-attr-3', 'value1', 'value2');  // toggle attribute value (value1 or value2)
    
        // odd  click <div class="example-1_item" name-attr-1="value" name-attr-2="value" name-attr-3="value1">1</div>
        // even click <div class="example-1_item" name-attr-3="value2">1</div>
    
      });
    
      example1Item.ael('click', e => { // Element.addEventListener
        e.preventDefault();
        attrAction(example1Item);
      });
    
      //
      
      let example2 = qsa('.example-2');
    
      example2.each((element, key) => {
    
        if (key === 4)
          return false;
    
        let example2Items = element.qsa('.example-2_item');
    
        example2Items.ael('click', (e, item) => {
          attrAction(item);
        });
    
      });
    
      //
      
      let example3 = qs('.example-3');
    
      example3.ael('click', () => {
    
        if (example3.hasClass('black'))
            example3.removeClass('black');
        else
          example3.addClass('black');
    
        example3.toggleClass('blue'); // remove or add class
    
        example3.toggleClass('green', 'yellow');   // toggle class (value1 or value2)
    
      });
    
    </script>