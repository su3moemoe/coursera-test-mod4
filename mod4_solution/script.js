(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	// 使用for迴圈
	for (var i = 0; i < names.length; i++) {
	  // 設定所有名字字首為小寫
	  var firstLetter = names[i].charAt(0).toLowerCase();

	  // 若名字為"j"開頭則向該成員sayGoodbye
	  if (firstLetter === 'j') {
		byeSpeaker.speak(names[i]);
	  } else {
		//否則向該成員sayHello
		helloSpeaker.speak(names[i]);
	  }
	}
})(window);
