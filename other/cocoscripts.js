function googleAnalytics() {
  // google analytics stuff
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-37194031-2', 'mscoco.cloudapp.net');
  ga('send', 'pageview');

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37194031-2']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}

function highlightTab(tab) {
  $('#'+tab+'TabHead').attr('class','tabDivHeadSelected');
  $('#'+tab+'TabBody').attr('class','tabDivBodySelected');
};

function populateHeaders(tab) {
  var links = ['index','people','explore','dataset','external'];
  var tabs = ['Home','People','Explore','Dataset','External'];
  var s = '<div id="tabEmail">cocodataset@outlook.com</div>';
  for( var i=0; i<links.length; i++ ) {
    s += '<div class="tabDiv" onclick="window.location=\''+links[i]+'.htm\'">'
    s += '<div class="tabDivHead" id="'+tabs[i]+'TabHead"></div>'
    s += '<div class="tabDivBody" id="'+tabs[i]+'TabBody">'+tabs[i]+'</div></div>'
  }
  $("#headerTabs").append(s);
  setTimeout(function(){highlightTab(tab)},10);
  setTimeout(function(){highlightTab(tab)},100);
  setTimeout(function(){highlightTab(tab)},1000);
}

function datasetTabNav() {
  // Enable dataset tab controls. See also: https://getbootstrap.com/docs/3.3/javascript/#tabs
  // And: http://stackoverflow.com/questions/12131273/twitter-bootstrap-tabs-url-doesnt-change
  $('.nav-tabs a').click(function (e) {
    if(this.hash) window.location.hash = this.hash;
    $('html,body').scrollTop(0);
  });
  $(window).bind( 'hashchange', function(e) {
    var hash = window.location.hash;
    $(hash).load("dataset/"+hash.substring(1)+".htm");
    $('a[href="'+hash+'"]').tab('show');
    $('html,body').scrollTop(0);
  });
  if(!window.location.hash) window.location.hash = '#overview';
  $(window).trigger('hashchange');
}

var cocoPeople = {
  'Tsung': {'name': 'Tsung-Yi Lin', 'full': 'Cornell Tech', 'short': 'Cornell Tech', 'url':'https://vision.cornell.edu/se3/people/tsung-yi-lin/'},
  'gen': {'name': 'Genevieve Patterson', 'full': 'Microsoft Research', 'short': 'MSR', 'url':'https://www.microsoft.com/en-us/research/people/gen/'},
  'matteo': {'name': 'Matteo R. Ronchi', 'full': 'Caltech', 'short': 'Caltech', 'url':'http://vision.caltech.edu/~mronchi/'},
  'yin': {'name': 'Yin Cui', 'full': 'Cornell Tech', 'short': 'Cornell Tech', 'url':'http://www.cs.cornell.edu/~ycui/'},
  'michael': {'name': 'Michael Maire', 'full': 'TTI Chicago', 'short': 'TTI Chicago', 'url':'http://ttic.uchicago.edu/~mmaire/'},
  'serge': {'name': 'Serge Belongie', 'full': 'Cornell Tech', 'short': 'Cornell Tech', 'url':'http://vision.cornell.edu/se3/people/serge-belongie/'},
  'lubomir': {'name': 'Lubomir Bourdev', 'full': 'WaveOne, Inc.', 'short': 'WaveOne, Inc.', 'url':'http://www.lubomir.org'},
  'ross': {'name': 'Ross Girshick', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'http://www.cs.berkeley.edu/~rbg/'},
  'james': {'name': 'James Hays', 'full': 'Georgia Tech', 'short': 'Georgia Tech', 'url':'http://www.cc.gatech.edu/~hays/'},
  'pietro': {'name': 'Pietro Perona', 'full': 'Caltech', 'short': 'Caltech', 'url':'http://www.vision.caltech.edu/Perona.html'},
  'deva': {'name': 'Deva Ramanan', 'full': 'CMU', 'short': 'CMU', 'url':'http://www.ics.uci.edu/~dramanan/'},
  'larry': {'name': 'Larry Zitnick', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'http://larryzitnick.org/'},
  'piotr': {'name': 'Piotr Dollár', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'https://pdollar.github.io/'},
};

function populateHomePage() {
  for( p in cocoPeople ) {
    $("#cocoPeople").append('<span class="fontBold">'+cocoPeople[p].name +
    '</span> '+cocoPeople[p].short+'<br/>');
  }
}

function populatePeoplePage() {
  for( p in cocoPeople ) {
    $("#content").append("<div id='"+p+"' class='cocoPerson'><canvas id='"+p+"'></canvas></div> ");
  }
  $('canvas').each(function(){
    var ctx = $(this)[0].getContext("2d");
    var id = $(this)[0].id;
    var image = new Image();
    $('#'+id).click(function(){window.open(cocoPeople[id]['url'], '_blank')});
    image.src = 'images/people/'+ id + '.JPG';
    image.ctx = ctx;
    image.pl_id = id;
    $(this).attr('height',200).attr('width',140)
    image.onload = function(){
      var w = 124; var h = 140; var W = 140; var H = 200;
      $(this).width(w);
      $(this).height(h);
      var ctx = $(this)[0].ctx;
      var pl_id = $(this)[0].pl_id;
      ctx.font="15px Segoe UI";
      ctx.fillStyle = 'rgba(80,80,80,255)';
      ctx.fillText(cocoPeople[pl_id]['name'], 0,h+25);
      ctx.font="normal 200 12px sans-serif";
      ctx.fillStyle = 'rgba(80,80,80,255)';
      ctx.fillText(cocoPeople[pl_id]['full'], 0,h+42);
      ctx.fill();
      ctx.drawImage($(this)[0],0,0,$(this)[0].width,$(this)[0].height, 0,0,w,h);
      ctx.beginPath();
      ctx.rect(w+1, 0, 7, h);
      ctx.fillStyle = 'rgba(0,127,181,255)';
      ctx.fill();
      ctx.beginPath();
      ctx.rect(w+8, 0, 8, H);
      ctx.fillStyle = 'rgba(0,192,115,255)';
      ctx.fill();
    };
  });
};

var external = [
  {"name":"COCO-Stuff", "url":"https://github.com/nightrome/cocostuff", "src":"images/external/coco-stuff.png", "description":"COCO-Stuff augments the COCO dataset with pixel-level stuff annotations for 10,000 images. The 91 stuff classes are carefully selected to have a similar level of granularity to the thing classes in COCO, allowing the study of stuff and things in context."},
  {"name":"SPEECH-COCO", "url":"https://persyval-platform.imag.fr/perscido/web/DS80/detaildataset", "src":"images/external/speecoco.png", "description":"SPEECH-COCO augments COCO with speech captions generated using TTS synthesis. The corpus contains 600K+ spoken captions, allowing research of language acquisition, term discovery, keyword spotting, or semantic embedding using speech and vision."},
  {"name":"VISUAL GENOME", "url":"http://visualgenome.org/", "src":"images/external/visualgenome.png", "description":"Visual Genome is a dataset, a knowledge base, an ongoing effort to connect structured image concepts to language."},
  {"name":"RefCOCO", "url":"https://github.com/lichengunc/refer", "src":"images/external/ref_coco.png", "description":"RefCOCO dataset was collected using the <a href='http://referitgame.com/'>Refer-it Game</a>. Each expression aims to unambiguously indicate a particular person or object in an image."},
  {"name":"COCO Attributes", "url":"http://cs.brown.edu/~gen/cocottributes.html", "src":"images/external/coco_attr.png", "description":"COCO Attributes has over 3.5M attribute annotations for People, Animals, and Objects from the COCO training dataset."},
  {"name":"G-Ref", "url":"https://github.com/mjhucla/Google_Refexp_toolbox", "src":"images/external/G_ref_dataset.jpg", "description":"Google referring expression dataset (G-Ref) is a dataset focuses on unambiguous object text descriptions (i.e. referring expressions) that allow one to uniquely identify a single object or region within an image."},
  {"name":"VerSe", "url":"https://github.com/spandanagella/verse", "src":"images/external/VerSe.png", "description":"VerSe annotates COCO images with OntoNotes senses for 90 verbs (actions) which have ambiguous visual usages. Along with the sense information we provide visualness labels for OntoNotes senses of 150 visual verbs."},
  {"name":"COCO-Text", "url":"http://vision.cornell.edu/se3/coco-text", "src":"images/external/cocotext.jpg", "description":"COCO-Text is for both text detection and recognition. The dataset annotates scene text with transcriptions along with attributes such as legibility, printed or handwritten text."},
  {"name":"FM-IQA", "url":"http://idl.baidu.com/FM-IQA.html", "src":"images/external/FM-IQA.jpg", "description":"The Freestyle Multilingual Image Question Answering (FM-IQA) dataset contains over 120,000 images and 250,000 freestyle Chinese question-answer pairs and their English translations."},
  {"name":"VQA", "url":"http://www.visualqa.org/", "src":"images/external/vqa.jpg", "description":"VQA is a new dataset containing open-ended questions about images.  These  questions require an understanding of vision, language and  commonsense  knowledge to answer."},
  {"name":"VISUAL MADLIBS", "url":"http://tamaraberg.com/visualmadlibs/", "src":"images/external/visual_madlib.jpg", "description":"Visual Madlibs is a new dataset consisting of focused natural language descriptions collected using automatically produced fill-in-the-blank templates. This dataset can be used for targeted generation or multiple-choice question-answering."},
  {"name":"COCO-a", "url":"http://www.vision.caltech.edu/~mronchi/projects/Cocoa/", "src":"images/external/cocoa.png", "description":"COCO-a annotates human actions and interactions with objects (or other people) with 140 visual actions (verbs with an unambiguous visual connotation), along with information such as emotional state and relative distance and position with the object."},
  {"name":"SALICON", "url":"http://salicon.net", "src":"images/external/salicon.png", "description":"The SALICON dataset offers a large set of saliency annotations on the COCO dataset. This data complements the task-specific annotations to advance the ultimate goal of visual understanding."},
  {"name":"PASCAL VOC", "url":"http://host.robots.ox.ac.uk:8080/pascal/VOC/", "src":"images/external/pascal.jpg", "description":"Annotations for PASCAL VOC 2007 and 2012 in COCO format. This allows use of the PASCAL detection data with the COCO API (including visualization and evaluation tools). JSON available <a href='/static/annotations/PASCAL_VOC.zip'>here</a>."},
  {"name":"ImageNet Detection", "url":"http://image-net.org/challenges/LSVRC/", "src":"images/external/imagenet.jpg", "description":"Annotations for ImageNet 2014 train/val in COCO format. This allows use of the ImageNet detection data with the COCO API (including visualization and evaluation tools). JSON available <a href='/static/annotations/ILSVRC2014.zip'>here</a>."},
  {"name":"YOUR DATASET", "url":"", "src":"images/external/image_placeholder.jpg", "description":"Please contact us to add your dataset here! Do <b>not</b> release annotations on the test-set images under any circumstances to keep the integrity of the COCO challenges intact (please contact us with any questions if in doubt)."}
];

function populateExternalPage() {
  var s = '';
  for( var i=0; i<external.length; i++ ) {
    var a = '<a>', e = external[i];
    if(e.url) { a = '<a href="'+e.url+'" target="_blank">'; }
    s += '<div class="external-container">';
    s += '<div class="external-container-lf">'+a+'<img class="external-image" src="'+e.src+'"/></a></div>';
    s += '<div class="external-container-rt">';
    s += '  <div class="external-title fontTitle">'+a+e.name+'</a></div>';
    s += '  <div class="external-description fontBig">'+e.description+'</div>';
    s += '</div>';
    s += '</div>';
  }
  $("#content").append(s);
}
