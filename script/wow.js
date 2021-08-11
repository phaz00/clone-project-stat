wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInUp';
    this.parentNode.insertBefore(section, this);
  };