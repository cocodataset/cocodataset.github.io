var iconsSelected = [];

var imIdList = [];

var categories = {
  'outdoor': [{'supercategory': 'outdoor', 'id': 10, 'name': 'traffic light'}, {'supercategory': 'outdoor', 'id': 11, 'name': 'fire hydrant'}, {'supercategory': 'outdoor', 'id': 13, 'name': 'stop sign'}, {'supercategory': 'outdoor', 'id': 14, 'name': 'parking meter'}, {'supercategory': 'outdoor', 'id': 15, 'name': 'bench'}], 'food': [{'supercategory': 'food', 'id': 52, 'name': 'banana'}, {'supercategory': 'food', 'id': 53, 'name': 'apple'}, {'supercategory': 'food', 'id': 54, 'name': 'sandwich'}, {'supercategory': 'food', 'id': 55, 'name': 'orange'}, {'supercategory': 'food', 'id': 56, 'name': 'broccoli'}, {'supercategory': 'food', 'id': 57, 'name': 'carrot'}, {'supercategory': 'food', 'id': 58, 'name': 'hot dog'}, {'supercategory': 'food', 'id': 59, 'name': 'pizza'}, {'supercategory': 'food', 'id': 60, 'name': 'donut'}, {'supercategory': 'food', 'id': 61, 'name': 'cake'}], 'indoor': [{'supercategory': 'indoor', 'id': 84, 'name': 'book'}, {'supercategory': 'indoor', 'id': 85, 'name': 'clock'}, {'supercategory': 'indoor', 'id': 86, 'name': 'vase'}, {'supercategory': 'indoor', 'id': 87, 'name': 'scissors'}, {'supercategory': 'indoor', 'id': 88, 'name': 'teddy bear'}, {'supercategory': 'indoor', 'id': 89, 'name': 'hair drier'}, {'supercategory': 'indoor', 'id': 90, 'name': 'toothbrush'}], 'appliance': [{'supercategory': 'appliance', 'id': 78, 'name': 'microwave'}, {'supercategory': 'appliance', 'id': 79, 'name': 'oven'}, {'supercategory': 'appliance', 'id': 80, 'name': 'toaster'}, {'supercategory': 'appliance', 'id': 81, 'name': 'sink'}, {'supercategory': 'appliance', 'id': 82, 'name': 'refrigerator'}], 'sports': [{'supercategory': 'sports', 'id': 34, 'name': 'frisbee'}, {'supercategory': 'sports', 'id': 35, 'name': 'skis'}, {'supercategory': 'sports', 'id': 36, 'name': 'snowboard'}, {'supercategory': 'sports', 'id': 37, 'name': 'sports ball'}, {'supercategory': 'sports', 'id': 38, 'name': 'kite'}, {'supercategory': 'sports', 'id': 39, 'name': 'baseball bat'}, {'supercategory': 'sports', 'id': 40, 'name': 'baseball glove'}, {'supercategory': 'sports', 'id': 41, 'name': 'skateboard'}, {'supercategory': 'sports', 'id': 42, 'name': 'surfboard'}, {'supercategory': 'sports', 'id': 43, 'name': 'tennis racket'}], 'animal': [{'supercategory': 'animal', 'id': 16, 'name': 'bird'}, {'supercategory': 'animal', 'id': 17, 'name': 'cat'}, {'supercategory': 'animal', 'id': 18, 'name': 'dog'}, {'supercategory': 'animal', 'id': 19, 'name': 'horse'}, {'supercategory': 'animal', 'id': 20, 'name': 'sheep'}, {'supercategory': 'animal', 'id': 21, 'name': 'cow'}, {'supercategory': 'animal', 'id': 22, 'name': 'elephant'}, {'supercategory': 'animal', 'id': 23, 'name': 'bear'}, {'supercategory': 'animal', 'id': 24, 'name': 'zebra'}, {'supercategory': 'animal', 'id': 25, 'name': 'giraffe'}], 'vehicle': [{'supercategory': 'vehicle', 'id': 2, 'name': 'bicycle'}, {'supercategory': 'vehicle', 'id': 3, 'name': 'car'}, {'supercategory': 'vehicle', 'id': 4, 'name': 'motorcycle'}, {'supercategory': 'vehicle', 'id': 5, 'name': 'airplane'}, {'supercategory': 'vehicle', 'id': 6, 'name': 'bus'}, {'supercategory': 'vehicle', 'id': 7, 'name': 'train'}, {'supercategory': 'vehicle', 'id': 8, 'name': 'truck'}, {'supercategory': 'vehicle', 'id': 9, 'name': 'boat'}], 'furniture': [{'supercategory': 'furniture', 'id': 62, 'name': 'chair'}, {'supercategory': 'furniture', 'id': 63, 'name': 'couch'}, {'supercategory': 'furniture', 'id': 64, 'name': 'potted plant'}, {'supercategory': 'furniture', 'id': 65, 'name': 'bed'}, {'supercategory': 'furniture', 'id': 67, 'name': 'dining table'}, {'supercategory': 'furniture', 'id': 70, 'name': 'toilet'}], 'accessory': [{'supercategory': 'person', 'id': 1, 'name': 'person'}, {'supercategory': 'accessory', 'id': 27, 'name': 'backpack'}, {'supercategory': 'accessory', 'id': 28, 'name': 'umbrella'}, {'supercategory': 'accessory', 'id': 31, 'name': 'handbag'}, {'supercategory': 'accessory', 'id': 32, 'name': 'tie'}, {'supercategory': 'accessory', 'id': 33, 'name': 'suitcase'}], 'electronic': [{'supercategory': 'electronic', 'id': 72, 'name': 'tv'}, {'supercategory': 'electronic', 'id': 73, 'name': 'laptop'}, {'supercategory': 'electronic', 'id': 74, 'name': 'mouse'}, {'supercategory': 'electronic', 'id': 75, 'name': 'remote'}, {'supercategory': 'electronic', 'id': 76, 'name': 'keyboard'}, {'supercategory': 'electronic', 'id': 77, 'name': 'cell phone'}], 'kitchen': [{'supercategory': 'kitchen', 'id': 44, 'name': 'bottle'}, {'supercategory': 'kitchen', 'id': 46, 'name': 'wine glass'}, {'supercategory': 'kitchen', 'id': 47, 'name': 'cup'}, {'supercategory': 'kitchen', 'id': 48, 'name': 'fork'}, {'supercategory': 'kitchen', 'id': 49, 'name': 'knife'}, {'supercategory': 'kitchen', 'id': 50, 'name': 'spoon'}, {'supercategory': 'kitchen', 'id': 51, 'name': 'bowl'}]
};

var superCats = [
  'accessory', 'vehicle', 'outdoor', 'animal', 'sports', 'kitchen',  'food', 'furniture', 'electronic', 'appliance', 'indoor'
];

var catNames = [
  'person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush'
];

var catToId = {
  'toilet': 70, 'teddy bear': 88, 'cup': 47, 'bicycle': 2, 'kite': 38, 'carrot': 57, 'stop sign': 13, 'tennis racket': 43, 'donut': 60, 'snowboard': 36, 'sandwich': 54, 'motorcycle': 4, 'oven': 79, 'keyboard': 76, 'scissors': 87, 'airplane': 5, 'couch': 63, 'mouse': 74, 'fire hydrant': 11, 'boat': 9, 'apple': 53, 'sheep': 20, 'horse': 19, 'banana': 52, 'baseball glove': 40, 'tv': 72, 'traffic light': 10, 'chair': 62, 'bowl': 51, 'microwave': 78, 'bench': 15, 'book': 84, 'elephant': 22, 'orange': 55, 'tie': 32, 'clock': 85, 'bird': 16, 'knife': 49, 'pizza': 59, 'fork': 48, 'hair drier': 89, 'frisbee': 34, 'umbrella': 28, 'bottle': 44, 'bus': 6, 'bear': 23, 'vase': 86, 'toothbrush': 90, 'spoon': 50, 'train': 7, 'sink': 81, 'potted plant': 64, 'handbag': 31, 'cell phone': 77, 'toaster': 80, 'broccoli': 56, 'refrigerator': 82, 'laptop': 73, 'remote': 75, 'surfboard': 42, 'cow': 21, 'dining table': 67, 'hot dog': 58, 'car': 3, 'sports ball': 37, 'skateboard': 41, 'dog': 18, 'bed': 65, 'cat': 17, 'person': 1, 'skis': 35, 'giraffe': 25, 'truck': 8, 'parking meter': 14, 'suitcase': 33, 'cake': 61, 'wine glass': 46, 'baseball bat': 39, 'backpack': 27, 'zebra': 24
};

var idToCat = {
  1: 'person', 2: 'bicycle', 3: 'car', 4: 'motorcycle', 5: 'airplane', 6: 'bus', 7: 'train', 8: 'truck', 9: 'boat', 10: 'traffic light', 11: 'fire hydrant', 13: 'stop sign', 14: 'parking meter', 15: 'bench', 16: 'bird', 17: 'cat', 18: 'dog', 19: 'horse', 20: 'sheep', 21: 'cow', 22: 'elephant', 23: 'bear', 24: 'zebra', 25: 'giraffe', 27: 'backpack', 28: 'umbrella', 31: 'handbag', 32: 'tie', 33: 'suitcase', 34: 'frisbee', 35: 'skis', 36: 'snowboard', 37: 'sports ball', 38: 'kite', 39: 'baseball bat', 40: 'baseball glove', 41: 'skateboard', 42: 'surfboard', 43: 'tennis racket', 44: 'bottle', 46: 'wine glass', 47: 'cup', 48: 'fork', 49: 'knife', 50: 'spoon', 51: 'bowl', 52: 'banana', 53: 'apple', 54: 'sandwich', 55: 'orange', 56: 'broccoli', 57: 'carrot', 58: 'hot dog', 59: 'pizza', 60: 'donut', 61: 'cake', 62: 'chair', 63: 'couch', 64: 'potted plant', 65: 'bed', 67: 'dining table', 70: 'toilet', 72: 'tv', 73: 'laptop', 74: 'mouse', 75: 'remote', 76: 'keyboard', 77: 'cell phone', 78: 'microwave', 79: 'oven', 80: 'toaster', 81: 'sink', 82: 'refrigerator', 84: 'book', 85: 'clock', 86: 'vase', 87: 'scissors', 88: 'teddy bear', 89: 'hair drier', 90: 'toothbrush'
};

function populateExplorer() {
  // create icons html
  var div = '', i, j;
  for( i=0; i<superCats.length; i++ ){
    div += '<div class="exploreIconSubpanel">';
    var cats = categories[superCats[i]];
    for( j=0; j<cats.length; j++ ){
      div += '<img title="' + cats[j].name + '" id="icon_' + cats[j].id;
      div += '" class="exploreIconSelect" src="images/cocoicons/'+cats[j].id+'.jpg"/>';
    }
    div += '</div>';
  }
  $('#exploreIconPanel').append(div);
  // add functionality to icons
  var icons = $(".exploreIconSelect");
  for ( i=0; i<icons.length; i++ ) {
    var icon = $(icons[i]);
    icon.data('state', false);
    icon.mousedown(function(ev) {
      var state = $(this).data('state');
      var cat = $(this).attr('title');
      if(!state)  $("#exploreTags").tagit("createTag", cat);
      if(state) $("#exploreTags").tagit("removeTagByLabel", cat);
    });
    iconsSelected.push(icon.attr('title'));
  }
  // setup tagit controls
  var setTag = function(tag,state) {
    var icons = $(".exploreIconSelect");
    for( i=0; i<icons.length; i++ ) {
      var icon = $(icons[i]);
      if( icon.attr('title')==tag ) {
        icon.data('state', state);
        var color = state?'#00DD00':'transparent';
        icon.css('border-color', color);
      }
    }
  };
  $("#exploreTags").tagit({
    availableTags: catNames,
    allowDuplicates: false,
    afterTagAdded: function(e, ui) {
      var lbl=ui.tagLabel, valid=iconsSelected.indexOf(lbl)!=-1 || !isNaN(lbl);
      if(!valid) { $("#exploreTags").tagit("removeTagByLabel", lbl); return; }
      setTag(lbl,true);
    },
    afterTagRemoved: function(e, ui){setTag(ui.tagLabel,false)}
  });
  // enable search button / disable other controls
  $('#exploreSearchBtn').click(function(){clearCanvas(); loadSearch()});
  $('#exploreLoading').hide();
  $('#exploreDone').hide();
  // if hash is #explore?id then go to given image id on load
  var hash, args, id;
  hash = window.location.hash;
  hash = hash.substring(hash.indexOf('?')+1);
  args = hash.split('&').map(function(x) {return x.split('=')});
  for (var i=0; i<args.length; i++) if (args[i][0] == 'id') id = args[i][1];
  if(id!=undefined){ $("#exploreTags").tagit("createTag",id); loadSearch(); }
}

$(window).scroll(function() {
  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    if ($('#exploreSearchBtn').prop('disabled') == false) {
      var randInds = popRandImageIds();
      if(randInds.length > 0) {
        $('#exploreSearchBtn').prop("disabled", true);
        $('#exploreLoading').show();
        loadSearch(randInds);
      } else {
        $('#exploreDone').show();
      }
    }
  }
});

function popRandImageIds() {
  var randImIds = [];
  var N = imIdList.length;
  for (var i=0; i<Math.min(N, 5); i++){
    var M = imIdList.length;
    var randInd = Math.floor(Math.random(M) * M);
    randImIds.push(imIdList[randInd]);
    imIdList.splice(randInd, 1);
  }
  return randImIds
}

function loadImageByCats(tags) {
  var categoryIds = tags.map(function(x){return catToId[x];});
  if (categoryIds.length == 0) categoryIds = [-1];
  var req= {"category_ids": categoryIds, "querytype": "getImagesByCats"};
  $.ajax({
    type: 'POST',
    url: 'https://us-central1-open-images-dataset.cloudfunctions.net/coco-dataset-bigquery',
    data: req,
  }).done( function(data) {
    imIdList = data;
    $('#exploreSearchCount').text(imIdList.length + ' results');
    loadVisualizations(popRandImageIds());
  }) ;
}

function loadImageData(imageIds, callback) {
  var promises = [];
  var querytypes = ["getImages", "getInstances", "getCaptions"];
  for (var i = 0; i < 3; i++) {
    var req= {"image_ids": imageIds, "querytype": querytypes[i]};
    promises.push($.ajax({
      type: 'POST',
      url: 'https://us-central1-open-images-dataset.cloudfunctions.net/coco-dataset-bigquery',
      data: req,
    }).done(function(data){
      return data
    }));
  }
  Promise.all(promises).then(function(data) {
    var images = data[0];
    var instances = data[1];
    var captions = data[2];
    var imageData = {};
    for (var i=0; i<images.length; i++){
      var imgId = images[i]['id']
      imageData[imgId] = {};
      imageData[imgId]['flickr_url'] = images[i]['flickr_url'];
      imageData[imgId]['coco_url'] = images[i]['coco_url'];
      imageData[imgId]['instances'] = [];
      imageData[imgId]['captions'] = [];
    }
    for (var i=0; i<instances.length; i++){
      var imgId = instances[i]['image_id'];
      imageData[imgId]['instances'].push(instances[i]);
    }
    for (var i=0; i<captions.length; i++){
      var imgId = captions[i]['image_id'];
      imageData[imgId]['captions'].push(captions[i]['caption'].toLowerCase());
    }
    callback(imageData);
  });
}

function loadVisualizations(imageIds) {
  if (imageIds.length > 0){
    loadImageData(imageIds, function (dataImage) {
      var imageIds = Object.keys(dataImage);
      for (var j = 0; j < imageIds.length; j++) {
        var imageId = imageIds[j];
        var instances = dataImage[imageId]['instances'];
        var captions = dataImage[imageId]['captions'];
        var flickrUrl = dataImage[imageId]['flickr_url'];
        var cocoUrl = dataImage[imageId]['coco_url'];
        var catToSegms = {};
        for (var i = 0; i < instances.length; i++) catToSegms[instances[i]['category_id']] = [];
        for (var i = 0; i < instances.length; i++) {
          catToSegms[instances[i]['category_id']].push(instances[i]);
        }
        createDisplay(imageId, captions, catToSegms, flickrUrl, cocoUrl);
      }
      // unlock search button
      $('#exploreSearchBtn').prop("disabled", false);
      $('#exploreLoading').hide();
    });
  }else{
    // unlock search button
    $('#exploreSearchBtn').prop("disabled", false);
    $('#exploreLoading').hide();
  }
}

function createDisplay(imageId, captions, catToSegms, flickrUrl, cocoUrl) {
  // url
  var urlIcon = '<span class="exploreIcon" title="url to share this image"><img id="exploreURLIcon" class="exploreIconImage" src="images/cocoicons/url.jpg"></span>'
  var cocoURL = '<a href="#explore?id=' + imageId + '" target="_blank">' + 'http://cocodataset.org/#explore?id=' + imageId + '</a>';
  var flickrURL = '<a href="' + flickrUrl + '" target="_blank">' + flickrUrl + '</a>';
  var urlText = cocoURL + '<br>' + flickrURL;
  // caption
  var captionIcon = '<span class="exploreIcon" style="margin-right:10px" title="show captions"><img id="exploreCaptionIcon" class="exploreIconImage" src="images/cocoicons/sentences.jpg"></span>'
  var captionText = '<span>' + captions.join('<br>') + '</span>';
  // icon
  var catIcons = '';
  var iconIds = Object.keys(catToSegms);
  for (var i = 0; i < iconIds.length; i++) {
    catIcons += '<span class="exploreIcon" title="' + idToCat[iconIds[i]] + '"><img data="' + iconIds[i] + '" class="exploreIconImage exploreCategoryImage" src="images/cocoicons/' + iconIds[i] + '.jpg"></span>';
  }
  // blank
  var blankIcon = '<span class="exploreIcon" title="hide segmentations"><img id="exploreBlankIcon" class="exploreIconImage" src="images/cocoicons/blank.jpg"></span>';
  // Create explore image display
  var display =
  '<div class="imageDisplay" id="imageDisplay' + imageId + '" style="margin-bottom:15px">' +
  '<div class="icons" style="display:inline-block">' + urlIcon + captionIcon + catIcons + blankIcon + '</div>' +
  '<div class="url" style="display:none">' + urlText + '</div>' +
  '<div class="caption" style="display:none">' + captionText + '</div>' +
  '<div style="margin-top:1px"><canvas class="canvas"></canvas></div>' +
  '</div>';
  // Create DOMs
  $('#exploreImageDisplayList').append(display);
  var display = $('#imageDisplay' + imageId)
  // Draw polygon on the image
  var canvas = display.find('.canvas')[0];
  var ctx = canvas.getContext("2d");
  var img = new Image;
  img.src = cocoUrl.replace("http://images.cocodataset.org", "https://s3.us-east-1.amazonaws.com/images.cocodataset.org");
  img.onload = function () {
    canvas.width = this.width;
    canvas.height = this.height;
    renderImage(ctx, this);
    renderSegms(ctx, this, catToSegms);
  }
  // set up data for display
  display.data('image', img); // store image object in display
  display.data('catToSegms', catToSegms); // store image object in display
  // Add listener to URL icon
  display.find('#exploreURLIcon').on('click', function () {
    var x = $(this).parents('.imageDisplay').find('.url');
    if (x.css('display') == 'none') x.css('display', 'block');
    else x.css('display', 'none');
  });
  // Add listeners category icon(s)
  display.find('#exploreCaptionIcon').on('click', function () {
    var x = $(this).parents('.imageDisplay').find('.caption');
    if (x.css('display') == 'none') x.css('display', 'block');
    else x.css('display', 'none');
  });
  // Add listener to category icons
  var categoryIcons = display.find('.exploreCategoryImage');
  for (var i = 0; i < categoryIcons.length; i++) {
    $(categoryIcons[i]).mouseenter(function () {
      var iconId = $(this).attr('data');
      var img = $(this).parents('.imageDisplay').data('image');
      var catToSegms = $(this).parents('.imageDisplay').data('catToSegms');
      renderImage(ctx, img);
      renderSegms(ctx, img, {iconId: catToSegms[iconId]});
    });
    $(categoryIcons[i]).mouseout(function () {
      var img = $(this).parents('.imageDisplay').data('image');
      var catToSegms = $(this).parents('.imageDisplay').data('catToSegms');
      renderImage(ctx, img);
      renderSegms(ctx, img, catToSegms);
    });
  }
  // Add listener to blank icon
  display.find('#exploreBlankIcon').mouseover(function () {
    renderImage(ctx, $(this).parents('.imageDisplay').data('image'));
  });
  display.find('#exploreBlankIcon').mouseout(function () {
    var img = $(this).parents('.imageDisplay').data('image');
    var catToSegms = $(this).parents('.imageDisplay').data('catToSegms');
    renderImage(ctx, img);
    renderSegms(ctx, img, catToSegms);
  });
}

function renderSegms(ctx, img, data) {
  var cats = Object.keys(data);
  for (var i=0; i<cats.length; i++){
    // set color for each object
    var segms = data[cats[i]];
    for (var j=0; j<segms.length; j++){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      ctx.fillStyle = 'rgba('+r+','+g+','+b+',0.7)';
      var polys = JSON.parse(segms[j]['segmentation']);
      // loop over all polygons
      for (var k=0; k<polys.length; k++){
        var poly = polys[k];
        ctx.beginPath();
        ctx.moveTo(poly[0], poly[1]);
        for (m=0; m<poly.length-2; m+=2){
          // let's draw!!!!
          ctx.lineTo(poly[m+2],poly[m+3]);
        }
        ctx.lineTo(poly[0],poly[1]);
        ctx.lineWidth = 3;
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
      }
    }
  }
}

function renderImage(ctx, img) {
  ctx.clearRect(0, 0, img.width, img.height);
  ctx.drawImage(img, 0, 0);
}

function loadSearch(ids) {
  var tags = $("#exploreTags").tagit("assignedTags");
  // disable search button and show loading
  $('#exploreSearchBtn').prop("disabled", true);
  $('#exploreLoading').show();
  $('#exploreDone').hide();
  if (ids != undefined){
    loadVisualizations(ids);
  } else if($.isNumeric(tags[0])){
    loadVisualizations([tags[0]]);
    imIdList = [];
  } else {
    loadImageByCats(tags);
  }
}

function clearCanvas() {
  imIdList = [];
  $('.imageDisplay').remove();
}
