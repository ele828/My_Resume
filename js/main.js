$("#name").html(r.info.name);
$(".fe").html(r.info.position);
$("#qq").html(r.info.qq);
$("#wechat").html(r.info.wechat);
$("#weibo").html(r.info.weibo);

$(".tech>h1").html(r.tech.title);

r.tech.lang.forEach(function() {
  var langNode = $("<div class='progress-bar' role='progressbar'><div class='percent'></div></div>");
  $(".lang").append(langNode);
});

$(".lang").children().each(function(index) {
  var lang = r.tech.lang[index];
  $(this).css({"width": lang.percent+"%"});
  $(this).css("background", lang.bar_bg);
  $(this).children().css("background", lang.bg);
  $(this).children().css("color", lang.color);
  $(this).children().html(lang.lang);
});

$(".content>h1").html(r.basic.title);
$(".content>h2").html(r.basic.sub_title);

var rows = parseInt(r.basic.info.length / 2);
for(var i = 0; i < rows; i++) {
  var node = $("<span></span>");
  $(".p-left-c").append(node);
  $(".p-right-c").append(node.clone());
}
// Left column
$(".p-left-c").children().each(function(index) {
  var info = r.basic.info[index];
  $(this).html(info);
});
// Right column
$(".p-right-c").children().each(function(index) {
  var index = index + rows;
  var info = r.basic.info[index];
  $(this).html(info);
});

$(".sk>h1").html(r.skill.title);
$(".sk>h2").html(r.skill.sub_title);

r.skill.spec.forEach(function() {
  var node = $("<li></li>");
  $(".sk ul").append(node);
});
$(".sk ul").children().each(function(index) {
  var sp = r.skill.spec[index];
  $(this).html(sp);
});

/* Projects */
var proj = r.proj;
$(".proj>h1").html(proj.title);
$(".proj>h2").html(proj.sub_title);

proj.spec.reverse().forEach(function(spec, index) {
    var node = $('<div class="item"><section class="pro-left"><span class="pro-title"><span class="t"></span><span class="pro-time"></span></span><p class="pro-detail"></p></section><section class="pro-right"><img></section></div>');
    $(".proj").append(node);

    // gen tag
    var currentNode = $(".item")[index];
    var sec = $(currentNode).children(".pro-left");
    var right = $(currentNode).children(".pro-right");

    spec.tag.forEach(function(tag, idx) {
      var node = $('<span class="tag '+ tag.color +'">'+ tag.name +'</span>');
      $(sec).append(node);
    });
    $(right).children("img").attr("src", spec.img);

    $(sec).children(".pro-title").children(".t").html(spec.name);
    $(sec).children(".pro-title").children(".pro-time").html(spec.time);
    $(sec).children(".pro-detail").html(spec.desc);
});

// Prize
$(".pr>h1").html(r.prize.title);
$(".pr>h2").html(r.prize.sub_title);
r.prize.spec.forEach(function(s, i) {
  var node = $("<li></li>");
  $(".arc ul").append(node);
  var cur = $(".arc ul li")[i];
  $(cur).html(s);
});

// Experience
$(".exp>h1").html(r.exp.title);
$(".exp>h2").html(r.exp.sub_title);
r.exp.stage.forEach(function(s, i) {
    var node = $('<div class="block"><div class="dot"></div><span class="title"></span><p><img><p class="desc"></p></p></div>');
    $(".exp").append(node);
    // alter dot's bg color
    var block = $(".exp").children(".block")[i];
    $(block).children(".dot").css("backgroundColor", s.bg);
    $(block).children(".title").html(s.name);
    $(block).children("p").children("img").attr("src", s.img);
    $(block).children(".desc").html(s.desc);
});

// Footer
$("footer .info").html(r.footer.info);
