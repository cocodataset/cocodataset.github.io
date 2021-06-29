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

function datasetTabNav() {
  // Enable dataset tab controls. See also: https://getbootstrap.com/docs/3.3/javascript/#tabs
  // And: http://stackoverflow.com/questions/12131273/twitter-bootstrap-tabs-url-doesnt-change
  var tabs = ["people", "overview", "explore", "download", "external", "termsofuse", "detection-2020", "keypoints-2020", "panoptic-2020", "densepose-2020", "detection-2019", "keypoints-2019", "stuff-2019",  "panoptic-2019", "detection-2018", "keypoints-2018", "stuff-2018",  "panoptic-2018", "detection-2017", "keypoints-2017", "stuff-2017", "detection-2016", "keypoints-2016", "detection-2015", "captions-2015", "format-data", "format-results", "guidelines", "upload", "detection-eval", "keypoints-eval", "stuff-eval", "panoptic-eval", "densepose-eval", "captions-eval", "detection-leaderboard", "keypoints-leaderboard", "stuff-leaderboard", "panoptic-leaderboard", "captions-leaderboard"];
  for( var i=0; i<tabs.length; i++ ) {
    $("#content").append('<div role="tabpanel" class="tab-pane fade" id="' + tabs[i] + '"></div>\n');
  }
  var loaded = {};
  $('.nav-tabs a').click(function (e) {
    if(this.hash) window.location.hash = this.hash;
    $('html,body').scrollTop(0);
  });
  $(window).bind( 'hashchange', function(e) {
    var hash = window.location.hash;
    var q=hash.replace('detections','detection').replace('challenge','');
    if(q!=hash) hash=window.location.hash=q;
    var q=hash.indexOf('?'); if(q!=-1) hash=hash.substring(0,q);
    if(!loaded[hash]) $(hash).load("dataset/"+hash.substring(1)+".htm");
    loaded[hash]=true; $('a[href="'+hash+'"]').tab('show');
    $('html,body').scrollTop(0);
  });
  if(!window.location.hash) window.location.hash = '#home';
  $(window).trigger('hashchange');
}

var cocoPeople = {
  'TsungYiLin': {'name': 'Tsung-Yi Lin', 'full': 'Google Brain', 'short': 'Google Brain', 'url':'https://vision.cornell.edu/se3/people/tsung-yi-lin/'},
  'GenevievePatterson': {'name': 'Genevieve Patterson', 'full': 'MSR, Trash TV', 'short': 'MSR, Trash TV', 'url':'https://www.microsoft.com/en-us/research/people/gen/'},
  'MatteoRonchi': {'name': 'Matteo R. Ronchi', 'full': 'Caltech', 'short': 'Caltech', 'url':'http://vision.caltech.edu/~mronchi/'},
  'YinCui': {'name': 'Yin Cui', 'full': 'Google', 'short': 'Google', 'url':'https://ycui.me/'},
  'MichaelMaire': {'name': 'Michael Maire', 'full': 'TTI-Chicago', 'short': 'TTI-Chicago', 'url':'http://ttic.uchicago.edu/~mmaire/'},
  'SergeBelongie': {'name': 'Serge Belongie', 'full': 'Cornell Tech', 'short': 'Cornell Tech', 'url':'http://vision.cornell.edu/se3/people/serge-belongie/'},
  'LubomirBourdev': {'name': 'Lubomir Bourdev', 'full': 'WaveOne, Inc.', 'short': 'WaveOne, Inc.', 'url':'http://www.lubomir.org'},
  'RossGirshick': {'name': 'Ross Girshick', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'http://www.cs.berkeley.edu/~rbg/'},
  'JamesHays': {'name': 'James Hays', 'full': 'Georgia Tech', 'short': 'Georgia Tech', 'url':'http://www.cc.gatech.edu/~hays/'},
  'PietroPerona': {'name': 'Pietro Perona', 'full': 'Caltech', 'short': 'Caltech', 'url':'http://www.vision.caltech.edu/Perona.html'},
  'DevaRamanan': {'name': 'Deva Ramanan', 'full': 'CMU', 'short': 'CMU', 'url':'http://www.ics.uci.edu/~dramanan/'},
  'LarryZitnick': {'name': 'Larry Zitnick', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'http://larryzitnick.org/'},
  'PiotrDollar': {'name': 'Piotr Dollár', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'https://pdollar.github.io/'},
  //'AlexanderKirillov': {'name': 'Alexander Kirillov', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'https://hci.iwr.uni-heidelberg.de/vislearn/people/alexander-kirillov/'},
  //'SamuelRotaBulo': {'name': 'Samuel Rota Bulò', 'full': 'Mapillary Research', 'short': 'Mapillary', 'url':'https://research.mapillary.com/'},
  //'PeterKontschieder': {'name': 'Peter Kontschieder', 'full': 'Mapillary Research', 'short': 'Mapillary', 'url':'https://research.mapillary.com/'},
  //'LorenzoPorzi': {'name': 'Lorenzo Porzi', 'full': 'Mapillary Research', 'short': 'Mapillary', 'url':'https://research.mapillary.com/'},
  //'HolgerCaesar': {'name': 'Holger Caesar', 'full': 'nuTonomy', 'short': 'nuTonomy', 'url':'http://www.it-caesar.com/'},
  //'JasperUijlings': {'name': 'Jasper Uijlings', 'full': 'Google', 'short': 'Google', 'url':'http://homepages.inf.ed.ac.uk/juijling/'},
  //'VittorioFerrari': {'name': 'Vittorio Ferrari', 'full': 'Google, U. of Edinburgh)', 'short': 'Google, Edinburgh)', 'url':'http://calvin.inf.ed.ac.uk/'},
  //'IasonasKokkinos': {'name': 'Iasonas Kokkinos', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'http://www0.cs.ucl.ac.uk/staff/I.Kokkinos/'},
  //'NataliaNeverova': {'name': 'Natalia Neverova', 'full': 'Facebook AI Research', 'short': 'FAIR', 'url':'https://research.fb.com/people/neverova-natalia/'},
  //'RizaAlpGuler': {'name': 'Rıza Alp Güler', 'full': 'INRIA', 'short': 'INRIA', 'url':'http://alpguler.com/'},
};

function populateHomePage() {
  for( var p in cocoPeople ) {
    $("#cocoPeople").append('<span class="fontBold">'+cocoPeople[p].name +
    '</span> '+cocoPeople[p].short+'<br/>');
  }
}

function populatePeoplePage() {
  for( var p in cocoPeople ) {
    $("#people").append("<div id='"+p+"' class='cocoPerson'><canvas id='"+p+"'></canvas></div>");
  }
  $('canvas').each(function(){
    var ctx = $(this)[0].getContext("2d");
    var id = $(this)[0].id;
    var image = new Image();
    $('#'+id).click(function(){window.open(cocoPeople[id]['url'], '_blank')});
    image.src = 'images/people/'+ id + '.jpg';
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
  {"name":"DensePose-COCO", "url":"http://densepose.org/", "src":"images/external/densepose.png", "description":"Dense human pose estimation aims at mapping all human pixels of an RGB image to the 3D surface of the human body. We introduce DensePose-COCO, a large-scale ground-truth dataset with image-to-surface correspondences manually annotated on 50K people in COCO."},
  {"name":"Visual Dialog", "url":"https://visualdialog.org/", "src":"images/external/vdialog.png", "description":"Visual Dialog is a novel task that requires an agent to hold a meaningful dialog with humans in natural, conversational language about visual content. Specifically, given an image, a dialog history, and a follow-up question about the image, the agent has to answer the question."},
  {"name":"STAIR Captions", "url":"http://captions.stair.center/", "src":"images/external/stair.png", "description":"STAIR Captions is a dataset made of Japanese captions for the COCO images, which are annotated by Japanese crowdworkers. At the STAIR Captions website, you can try Japanese caption generation and text-to-image search demos built on STAIR Captions."},
  {"name":"COCO-Stuff", "url":"https://github.com/nightrome/cocostuff", "src":"images/external/coco-stuff.png", "description":"COCO-Stuff augments the COCO dataset with pixel-level stuff annotations for 10,000 images. The 91 stuff classes are carefully selected to have a similar level of granularity to the thing classes in COCO, allowing the study of stuff and things in context."},
  {"name":"FOIL", "url":"https://foilunitn.github.io/", "src":"images/external/FOIL.png", "description":"Don't be foiled: Detect the mistake and correct it! FOIL augments COCO images with incorrect ('foil') captions which differ from the original ones by introducing one single error. The dataset contains ~300K datapoints and 98K unique images."},
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
  {"name":"COCO Traffic", "url":"https://github.com/daved01/cocoTraffic", "src":"images/external/coco-traffic.jpg", "description":"COCO Traffic splits the traffic light class into three indication states: red, green, and na. We make these annotations available for the full dataset as well as a subsampled one focussed around traffic scenes."},
  {"name":"FiftyOne", "url":"https://medium.com/voxel51/the-coco-dataset-best-practices-for-downloading-visualization-and-evaluation-68a3d7e97fb7", "src":"images/external/voxel51.png", "description":"FiftyOne is an open-source tool facilitating visualization and access to COCO data resources and serves as an evaluation tool for model analysis on COCO."},
  {"name":"PASCAL VOC", "url":"http://host.robots.ox.ac.uk:8080/pascal/VOC/", "src":"images/external/pascal.jpg", "description":"Annotations for PASCAL VOC 2007 and 2012 in COCO format. This allows use of the PASCAL detection data with the COCO API (including visualization and evaluation tools). JSON available <a href='https://s3.amazonaws.com/images.cocodataset.org/external/external_PASCAL_VOC.zip'>here</a>."},
  {"name":"ImageNet Detection", "url":"http://image-net.org/challenges/LSVRC/", "src":"images/external/imagenet.jpg", "description":"Annotations for ImageNet 2014 train/val in COCO format. This allows use of the ImageNet detection data with the COCO API (including visualization and evaluation tools). JSON available <a href='https://s3.amazonaws.com/images.cocodataset.org/external/external_ILSVRC2014.zip'>here</a>."},
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
    s += '  <div>'+a+e.name+'</a></div>';
    s += '  <div class="fontBig">'+e.description+'</div>';
    s += '</div>';
    s += '</div>';
  }
  $("#external").append(s);
}

function initLeaderboardDetection() {
  var types = ["bbox_dev2015", "segm_dev2015", "bbox_standard2015", "segm_standard2015", "bbox_challenge2016", "segm_challenge2016", "bbox_challenge2015", "segm_challenge2015", "bbox_challenge2017", "segm_challenge2017", "segm_challenge2018", "segm_challenge2019", "segm_challenge2020"];
  var metrics = ["AP", "AP_50", "AP_75", "AP_small", "AP_medium", "AP_large", "AR_max_1", "AR_max_10", "AR_max_100", "AR_small", "AR_medium", "AR_large"];
  var table = "ldbdDetection";
  initLeaderboard(types, metrics, table, 1);
}

function initLeaderboardDensePose() {
  var types = ["dp_challenge2018", "dp_challenge2019"];
  var metrics = ["AP", "AP_50", "AP_75", "AP_medium", "AP_large"];
  var table = "ldbdDensePose";
  initLeaderboard(types, metrics, table, 1);
}

function initLeaderboardKeypoints() {
  var types = ["kpt_dev", "kpt_standard", "kpt_challenge2016", "kpt_challenge2017", "kpt_challenge2018", "kpt_challenge2019", "kpt_challenge2020"];
  var metrics = ["AP", "AP_50", "AP_75", "AP_medium", "AP_large", "AR", "AR_50", "AR_75", "AR_medium", "AR_large"];
  var table = "ldbdKeypoints";
  initLeaderboard(types, metrics, table, 0);
}

function initLeaderboardStuff() {
  var types = ["stuff_dev2017", "stuff_challenge2017", "stuff_dev2018"];
  var metrics = ["MIOU", "FIOU", "MACC", "PACC", "MIOUS", "FIOUS", "MACCS", "PACCS"];
  var table = "ldbdStuff";
  initLeaderboard(types, metrics, table, 2);
}

function initLeaderboardPanoptic() {
  var types = ["panoptic_dev", "panoptic_challenge2018", "panoptic_challenge2019",  "panoptic_challenge2020"];
  var metrics = ["PQ", "SQ", "RQ", "PQTH", "SQTH", "RQTH", "PQST", "SQST", "RQST"];
  var table = "ldbdPanoptic";
  initLeaderboard(types, metrics, table, 0);
}

function initLeaderboardCaptions() {
  // initialize C5 and C40 captioning leaderboards
  var types1 = ["cap_c5", "cap_c40"];
  var metrics1 = ["CIDEr", "METEOR", "ROUGE_L", "Bleu_1", "Bleu_2", "Bleu_3", "Bleu_4", "SPICE"];
  var table1 = "ldbdCaption";
  initLeaderboard(types1, metrics1, table1, 0);
  // initilize challenge captioning leaderboards
  var types2 = ["cap_challenge2015"];
  var metrics2 = ["q1", "q2", "q3", "q4", "q5"];
  var table2 = "ldbdCaptionChallenge";
  initLeaderboard(types2, metrics2, table2, 0);
  // controls for toggling visible leaderboard
  for(var i=0; i<types1.length; i++) $('#a_'+types1[i]).click( function(){$('#'+table1).show(); $('#'+table2).hide();})
  for(var i=0; i<types2.length; i++) $('#a_'+types2[i]).click( function(){$('#'+table2).show(); $('#'+table1).hide();})
  $('#'+table2).hide();
  // initialize metrics and ranks DataTables
  var metricsMain = [
    ['CIDEr-D', '<a href="http://arxiv.org/pdf/1411.5726.pdf" target="_blank"> CIDEr: Consensus-based Image Description Evaluation</a>'],
    ['METEOR',  '<a href="http://www.cs.cmu.edu/~alavie/METEOR/pdf/meteor-1.5.pdf" target="_blank">Meteor Universal: Language Specific Translation Evaluation for Any Target Language</a>'],
    ['Rouge-L', '<a href="http://anthology.aclweb.org/W/W04/W04-1013.pdf" target="_blank"> ROUGE: A Package for Automatic Evaluation of Summaries</a>'],
    ['BLEU',    '<a href="http://www.aclweb.org/anthology/P02-1040.pdf" target="_blank"> BLEU: a Method for Automatic Evaluation of Machine Translation</a>'],
    ['SPICE',   '<a href="https://arxiv.org/pdf/1607.08822.pdf" target="_blank"> SPICE: Semantic Propositional Image Caption Evaluation</a>']
  ];
  var metricsChallenge = [
    ['M1', 'Percentage of captions that are evaluated as better or equal to human caption.'],
    ['M2', 'Percentage of captions that pass the Turing Test.'],
    ['M3', 'Average correctness of the captions on a scale 1-5 (incorrect - correct).'],
    ['M4', 'Average amount of detail of the captions on a scale 1-5 (lack of details - very detailed).'],
    ['M5', 'Percentage of captions that are similar to human description.']
  ];
  var ranksChallenge = [
    ['Google', 5, 4, 9, '1st(tie)'],
    ['MSR', 4, 5, 9, '1st(tie)'],
    ['MSR Captivator', 2, 3, 5, '3rd(tie)'],
    ['Montreal/Toronto', 3, 2, 5, '3rd(tie)'],
    ['Berkeley LRCN', 1, 1, 2, '5th']
  ];
  var propsm = { 'paging':false, 'info':false, 'filter':false, 'sort':false, 'autoWidth':false };
  var propsr = { 'paging':false, 'info':false, 'filter':false, 'order':[[1, 'desc']] };
  $('#'+table1).find('#ldbdCaptionMetrics').DataTable(propsm).rows.add(metricsMain).draw();
  $('#'+table2).find('#ldbdCaptionMetrics').DataTable(propsm).rows.add(metricsChallenge).draw();
  $('#'+table2).find('#ldbdCaptionRank').DataTable(propsr).rows.add(ranksChallenge).draw();
}

function initLeaderboard(types, metrics, table, perCategory){
  // populate leaderboard table with data in json
  if( perCategory==1 ) {
    var supercats=["accessory", "animal", "appliance", "electronic", "food", "furniture", "indoor", "kitchen", "outdoor", "person", "sports", "vehicle"];
    var cats =[[9,"person"], [11,"bicycle"], [11,"car"], [11,"motorcycle"], [11,"airplane"], [11,"bus"], [11,"train"], [11,"truck"], [11,"boat"], [8,"traffic light"], [8,"fire hydrant"], [8,"stop sign"], [8,"parking meter"], [8,"bench"], [1,"bird"], [1,"cat"], [1,"dog"], [1,"horse"], [1,"sheep"], [1,"cow"], [1,"elephant"], [1,"bear"], [1,"zebra"], [1,"giraffe"], [0,"backpack"], [0,"umbrella"], [0,"handbag"], [0,"tie"], [0,"suitcase"], [10,"frisbee"], [10,"skis"], [10,"snowboard"], [10,"sports ball"], [10,"kite"], [10,"baseball bat"], [10,"baseball glove"], [10,"skateboard"], [10,"surfboard"], [10,"tennis racket"], [7,"bottle"], [7,"wine glass"], [7,"cup"], [7,"fork"], [7,"knife"], [7,"spoon"], [7,"bowl"], [4,"banana"], [4,"apple"], [4,"sandwich"], [4,"orange"], [4,"broccoli"], [4,"carrot"], [4,"hot dog"], [4,"pizza"], [4,"donut"], [4,"cake"], [5,"chair"], [5,"couch"], [5,"potted plant"], [5,"bed"], [5,"dining table"], [5,"toilet"], [3,"tv"], [3,"laptop"], [3,"mouse"], [3,"remote"], [3,"keyboard"], [3,"cell phone"], [2,"microwave"], [2,"oven"], [2,"toaster"], [2,"sink"], [2,"refrigerator"], [6,"book"], [6,"clock"], [6,"vase"], [6,"scissors"], [6,"teddy bear"], [6,"hair drier"], [6,"toothbrush"]];
  } else if(perCategory==2) {
    var supercats=["building", "ceiling", "floor", "food-stuff", "furniture-stuff", "ground", "other", "plant", "raw-material", "sky", "solid", "structural", "textile", "wall", "water", "window"];
    var cats=[[12, "banner"], [12, "blanket"], [7, "branch"], [0, "bridge"], [0, "building-other"], [7, "bush"], [4, "cabinet"], [11, "cage"], [8, "cardboard"], [2, "carpet"], [1, "ceiling-other"], [1, "ceiling-tile"], [12, "cloth"], [12, "clothes"], [9, "clouds"], [4, "counter"], [4, "cupboard"], [12, "curtain"], [4, "desk-stuff"], [5, "dirt"], [4, "door-stuff"], [11, "fence"], [2, "floor-marble"], [2, "floor-other"], [2, "floor-stone"], [2, "floor-tile"], [2, "floor-wood"], [7, "flower"], [14, "fog"], [3, "food-other"], [3, "fruit"], [4, "furniture-other"], [7, "grass"], [5, "gravel"], [5, "ground-other"], [10, "hill"], [0, "house"], [7, "leaves"], [4, "light"], [12, "mat"], [8, "metal"], [4, "mirror-stuff"], [7, "moss"], [10, "mountain"], [5, "mud"], [12, "napkin"], [11, "net"], [8, "paper"], [5, "pavement"], [12, "pillow"], [7, "plant-other"], [8, "plastic"], [5, "platform"], [5, "playingfield"], [11, "railing"], [5, "railroad"], [14, "river"], [5, "road"], [10, "rock"], [0, "roof"], [12, "rug"], [3, "salad"], [5, "sand"], [14, "sea"], [4, "shelf"], [9, "sky-other"], [0, "skyscraper"], [5, "snow"], [10, "solid-other"], [4, "stairs"], [10, "stone"], [7, "straw"], [11, "structural-other"], [4, "table"], [0, "tent"], [12, "textile-other"], [12, "towel"], [7, "tree"], [3, "vegetable"], [13, "wall-brick"], [13, "wall-concrete"], [13, "wall-other"], [13, "wall-panel"], [13, "wall-stone"], [13, "wall-tile"], [13, "wall-wood"], [14, "water-other"], [14, "waterdrops"], [15, "window-blind"], [15, "window-other"], [10, "wood"], [6, "other"]];
  }
  // initialize and format DataTable https://www.datatables.net/
  var tableData = $('#'+table).find('.ldbdData'), m=metrics.length;
  if( $.fn.DataTable.isDataTable(tableData) ) {
    tableData=tableData.DataTable();
  } else {
    var propsData={'paging':true,'info':false,'order':[[2,'desc']],'dom':'fBrtilp','iDisplayLength':25};
    propsData.buttons=[
      {extend:'copyHtml5',title:'leaderboard',exportOptions:{orthogonal:'export'},text:'Copy to Clipboard'},
      {extend:'csvHtml5', title:'leaderboard',exportOptions:{orthogonal:'export'},text:'Export to CSV'}
    ];
    propsData.columnDefs=[
      {'targets':0,"orderable":false,"className":'ldbdPlus'},
      {'targets':1,"className":'ldbdMethod'},
      {'targets':m+2,"className":'ldbdDate'},
      {'targets':[0,1,m+2],'render':function(x) {return x}},
      {'targets':['_all'],'orderSequence':['desc','asc'],'render':function(x) {return x=='-1'?'':parseFloat(x).toFixed(3);}}
    ];
    tableData = tableData.DataTable(propsData);
  }
  // load all json leaderboards asynchronously
  var n=types.length, t=$('#'+table), json=t.data('json')
  if( !json ) {
    t.data('json',{});
    var onload=function(i) { return function(d){var j=t.data('json'); j[i]=d; t.data('json',j);} }
    for(var i=0; i<n; i++) $.getJSON('leaderboard/'+types[i]+'.json',onload(types[i]));
  }
  var done=json; for(var i=0; i<n; i++) done=done && json[types[i]];
  if(!done) { setTimeout(function(){initLeaderboard(types,metrics,table,perCategory)},10); return; };
  // extract data for leaderboard from json
  var data=new Array(n);
  for( var i=0; i<n; i++ ) {
    data[i]={ main:[], refs:[], teams:[], cats:[] };
    for( var j=0; j<json[types[i]].length; j++ ) {
      var e=json[types[i]][j], name=e.team.name, r=JSON.parse(e.results);
      data[i].teams[j]=e.team.id;
      // poulate main: ["",method-name,results,date]
      data[i].main[j]=new Array(m+3);
      data[i].main[j][0]=''; data[i].main[j][1]=name;
      for( var k=0; k<m; k++ ) data[i].main[j][k+2]=r[metrics[k]];
      data[i].main[j][m+2]=e.date;
      // populate refs
      if(e.url!= "") e.url="<a href='"+e.url+"' target='_blank'> "+e.url+"</a>";
      data[i].refs[j]=['Team',e.team.members,'Description',e.description,'Link',e.url];
      // poulate cats: ["",category-name,results,date]
      if(perCategory) {
        var d=JSON.parse(json[types[i]][j].results_details);
        var p=cats.length+supercats.length; data[i].cats[j]=new Array(p);
        for( var k=0; k<p; k++ ) {
          var r, c;
          if( k<supercats.length ) {
            c=supercats[k]; r=d.per_supercategory[c]; c+=": [all]";
          } else {
            c=cats[k-supercats.length]; r=d.per_category[c[1]]; c=supercats[c[0]]+": "+c[1];
          }
          data[i].cats[j][k]=new Array(m+3);
          data[i].cats[j][k][0]=''; data[i].cats[j][k][1]=c;
          for(var l=0; l<m; l++) data[i].cats[j][k][l+2]=r[l];
          data[i].cats[j][k][m+2]=data[i].main[j][m+2];
        }
        data[i].cats[j][p]=[];
        data[i].cats[j][p][0]=''; data[i].cats[j][p][1]="[all]: [all]";
        for(var l=2; l<m+3; l++) data[i].cats[j][p][l]=data[i].main[j][l];
      }
    }
  }
  // function to set the data shown in the leaderboard and event binders
  var current={type:types[0],team:-1};
  var bindSetType=function(e,type) { var t=type; e.click( function(){setDisplayData(t,current.team)} )};
  var bindSetTeam=function(e,team) { var t=team; e.click( function(){setDisplayData(current.type,t)} )};
  for( var i=0; i<n; i++ ) bindSetType($('#a_'+types[i]),types[i]);
  var setDisplayData=function( type, team ) {
    var i=$.inArray(type,types), j=$.inArray(team,data[i].teams);
    if(j==-1) team=-1; current.type=type; current.team=team;
    var datashow=team==-1 ? data[i].main : data[i].cats[j];
    tableData.clear().rows.add(datashow).order((team==-1)?[2,'desc']:[1,'asc']).draw();
    $('#'+table).find('.ldbdData').toggleClass("ldbdPerCat",team!==-1);
  };
  // populate extra info tab
  $('#'+table).on('click','td.ldbdPlus', function() {
    if($('#'+table).find('.ldbdData').hasClass('ldbdPerCat')) {setDisplayData(current.type,-1); return;}
    var tr=$(this).closest('tr'), row=tableData.row(tr);
    if( row.child.isShown() ) {
      row.child.hide(); tr.removeClass('shown');
    } else {
      var i=$.inArray(current.type,types), j=row.index();
      var mr=function(k,v) {return '<tr><td>'+k+':</td><td>'+v+'</td></tr>'};
      var t='<table class="ldbdMore">', refs=data[i].refs[j];
      for(var k=0; k<data[i].refs[j].length; k+=2) t+=mr(refs[k],refs[k+1]);
      if(perCategory) t+=mr("More",'<a id="setTeam'+j+'">Per Category Results</a>');
      t+='</table>'; row.child(t).show(); tr.addClass('shown');
      if(perCategory) bindSetTeam($('#setTeam'+j),data[i].teams[j]);
    }
  });
  // load data to tables and populate
  setDisplayData(current.type,current.team);
}
