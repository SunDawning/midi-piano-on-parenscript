function mpop$clTypeOf(object) {
    __PS_MV_REG = [];
    return typeof(object);
};
function mpop$clPush(obj, place) {
    __PS_MV_REG = [];
    return place.push(obj);
};
function mpop$clNth(n, list) {
    return list[n];
};
function mpop$regexExpression(pattern, attributes) {
    __PS_MV_REG = [];
    return new RegExp(pattern, attributes);
};
function mpop$clObjectKeys(object) {
    __PS_MV_REG = [];
    return Object.keys(object);
};
function mpop$clStringMatch(regex, targetString) {
    __PS_MV_REG = [];
    return targetString.match(regex);
};
function mpop$clConcatenateList(list1, list2) {
    __PS_MV_REG = [];
    return list1.concat(list2);
};
function mpop$clIndexOf(object, index) {
    __PS_MV_REG = [];
    return object.indexOf(index);
};
function mpop$clJoin(arrayObject, separator) {
    __PS_MV_REG = [];
    return arrayObject.join(separator);
};
function mpop$clStringUpcase(string) {
    __PS_MV_REG = [];
    return string.toUpperCase();
};
function mpop$clStringDowncase(string) {
    __PS_MV_REG = [];
    return string.toLowerCase();
};
function mpop$clSplit(regex, string) {
    __PS_MV_REG = [];
    return string.split(regex);
};
function mpop$clRegexReplace(regex, targetString, replacement) {
    __PS_MV_REG = [];
    return targetString.replace(regex, replacement);
};
function mpop$clString(object) {
    __PS_MV_REG = [];
    return String(object);
};
function mpop$clSort(array, sortBy) {
    __PS_MV_REG = [];
    return array.sort(sortBy);
};
function mpop$clSubseq(arrayObject, start, end) {
    __PS_MV_REG = [];
    return arrayObject.slice(start, end);
};
/** JavaScript reduce() 方法 | 菜鸟教程: http://www.runoob.com/jsref/jsref-reduce.html */
function mpop$clReduce(fFunction, aList) {
    var _js2 = arguments.length;
    for (var n1 = 2; n1 < _js2; n1 += 2) {
        switch (arguments[n1]) {
        case 'initial-value':
            initialValue = arguments[n1 + 1];
        };
    };
    var initialValue;
    __PS_MV_REG = [];
    return aList.reduce(fFunction, initialValue);
};
function mpop$createElement(tag) {
    __PS_MV_REG = [];
    return document.createElement(tag);
};
function mpop$appendChild(parent, child) {
    __PS_MV_REG = [];
    return parent.appendChild(child);
};
function mpop$tagName(element) {
    return element.tagName;
};
function mpop$getElementById(id) {
    __PS_MV_REG = [];
    return document.getElementById(id);
};
function mpop$getElementsByClassName(className, element) {
    if (element === undefined) {
        element = document;
    };
    __PS_MV_REG = [];
    return element.getElementsByClassName(className);
};
function mpop$getElementsByTagName(tagName) {
    __PS_MV_REG = [];
    return document.getElementsByTagName(tagName);
};
function mpop$elementChildren(element) {
    return element.children;
};
function mpop$elementParentNode(element) {
    return element.parentNode;
};
function mpop$elementValue(element) {
    return element.value;
};
function mpop$elementInnerHtml(element) {
    return element.innerHTML;
};
function mpop$innerText(element) {
    return element.innerText;
};
function mpop$elementClassName(element) {
    return element.className;
};
function mpop$elementSrc(element) {
    return element.src;
};
function mpop$elementType(element) {
    return element.type;
};
function mpop$getComputedStyle(element, pseudoClass) {
    __PS_MV_REG = [];
    return window.getComputedStyle(element, pseudoClass);
};
function mpop$elementStyleOverflow(element) {
    return element.style.overflow;
};
function mpop$styleMinWidth(element) {
    return element.style.minWidth;
};
function mpop$elementOffsetHeight(element) {
    return element.offsetHeight;
};
function mpop$elementScrollLeft(element) {
    return element.scrollLeft;
};
function mpop$elementScrollWidth(element) {
    return element.scrollWidth;
};
function mpop$selectedIndex(element) {
    return element.selectedIndex;
};
function mpop$selectedOptions(element) {
    return element.options;
};
function mpop$currentPageUri() {
    return window.location.href;
};
function mpop$documentElement() {
    return document.documentElement;
};
function mpop$targetTouches(event) {
    return event.targetTouches;
};
function mpop$changedTouches(event) {
    return event.changedTouches;
};
function mpop$clientX(touch) {
    return touch.clientX;
};
function mpop$clientY(touch) {
    return touch.clientY;
};
function mpop$rectLeft(rect) {
    return rect.left;
};
function mpop$rectRight(rect) {
    return rect.right;
};
function mpop$rectTop(rect) {
    return rect.top;
};
function mpop$rectBottom(rect) {
    return rect.bottom;
};
function mpop$getBoundingClientRect(element) {
    __PS_MV_REG = [];
    return element.getBoundingClientRect();
};
function mpop$setfInnerHtml(element, value) {
    return element.innerHTML = value;
};
function mpop$setfOuterHtml(element, value) {
    return element.outerHTML = value;
};
function mpop$setfClassName(element, className) {
    return element.className = className;
};
function mpop$setfFor(element, forValue) {
    return element.for = forValue;
};
function mpop$setfId(element, id) {
    return element.id = id;
};
function mpop$setfValue(element, value) {
    return element.value = value;
};
function mpop$setfScrollLeft(element, scrollLeft) {
    return element.scrollLeft = scrollLeft;
};
function mpop$setfScrollWidth(element, scrollWidth) {
    return element.scrollWidth = scrollWidth;
};
function mpop$setfStyleWidth(element, width) {
    return element.style.width = width;
};
function mpop$setfStyleMinWidth(element, minWidth) {
    return element.style.minWidth = minWidth;
};
function mpop$setfStyleHeight(element, height) {
    return element.style.height = height;
};
function mpop$setfStyleMarginLeft(element, marginLeft) {
    return element.style.marginLeft = marginLeft;
};
function mpop$setfStyleMarginRight(element, marginRight) {
    return element.style.marginRight = marginRight;
};
function mpop$setfStyleMarginBottom(element, marginBottom) {
    return element.style.marginBottom = marginBottom;
};
function mpop$setfStyleMarginTop(element, marginTop) {
    return element.style.marginTop = marginTop;
};
function mpop$setfStyleBottom(element, bottom) {
    return element.style.bottom = bottom;
};
function mpop$setfStyleBorderWidth(element, borderWidth) {
    return element.style.borderWidth = borderWidth;
};
function mpop$setfStyleOverflow(element, overflow) {
    return element.style.overflow = overflow;
};
function mpop$setAttribute(element, attribute, value) {
    __PS_MV_REG = [];
    return element.setAttribute(attribute, value);
};
function mpop$setfElementDisabled(element, disabledP) {
    return element.disabled = disabledP;
};
function mpop$setfElementOntouchstart(element, ontouchstart) {
    return element.ontouchstart = ontouchstart;
};
function mpop$setfSelectedIndex(select, index) {
    return select.selectedIndex = index;
};
function mpop$f5() {
    __PS_MV_REG = [];
    return window.location.reload();
};
function mpop$clFormat(controlString) {
    var formatArguments = Array.prototype.slice.call(arguments, 1);
    __PS_MV_REG = [];
    return console.log.apply(this, [controlString].concat(formatArguments));
};
function mpop$setTimeout(code, millisec) {
    __PS_MV_REG = [];
    return setTimeout(code, millisec);
};
function mpop$addEventListener(element, event, callback, useCapture) {
    __PS_MV_REG = [];
    return element.addEventListener(event, callback, useCapture);
};
function mpop$preventDefaultEvent(event) {
    return event.preventDefault;
};
function mpop$windowWidth() {
    return window.screen.width;
};
function mpop$windowHeight() {
    return window.screen.height;
};
function mpop$launchFullScreen(element) {
    if (element.requestFullscreen) {
        __PS_MV_REG = [];
        return element.requestFullscreen();
    } else if (element.requestFullScreen) {
        __PS_MV_REG = [];
        return element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        __PS_MV_REG = [];
        return element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        __PS_MV_REG = [];
        return element.webkitRequestFullscreen();
    } else if (element.webkitRequestFullScreen) {
        __PS_MV_REG = [];
        return element.webkitRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        __PS_MV_REG = [];
        return element.msRequestFullscreen();
    } else if (element.msRequestFullScreen) {
        __PS_MV_REG = [];
        return element.msRequestFullScreen();
    };
};
function mpop$unlaunchFullScreen() {
    if (document.webkitCancelFullScreen) {
        __PS_MV_REG = [];
        return document.webkitCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        __PS_MV_REG = [];
        return document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        __PS_MV_REG = [];
        return document.mozCancelFullScreen();
    } else if (document.exitFullScreen) {
        __PS_MV_REG = [];
        return document.exitFullScreen();
    };
};
function mpop$fullScreenP() {
    return document.webkitIsFullScreen || document.mozFullScreen;
};
function mpop$clHttpRequest(uri) {
    var _js4 = arguments.length;
    for (var n3 = 1; n3 < _js4; n3 += 2) {
        switch (arguments[n3]) {
        case 'asynchronous-p':
            asynchronousP = arguments[n3 + 1];
            break;
        case 'method':
            method = arguments[n3 + 1];
        };
    };
    var asynchronousP;
    var method = 'undefined' === typeof method ? 'get' : method;
    var request = new XMLHttpRequest();
    request.open(method, uri, asynchronousP);
    request.send(null);
    __PS_MV_REG = [];
    return request.responseText();
};
function mpop$newFileReader() {
    return new FileReader;
};
function mpop$files(element) {
    return element.files;
};
function mpop$fileReaderReadAsText(fileReader, file) {
    __PS_MV_REG = [];
    return fileReader.readAsText(file);
};
function mpop$setfFileReaderOnloadend(fileReader, onloadend) {
    return fileReader.onloadend = onloadend;
};
function mpop$fileReaderResult(fileReader) {
    return fileReader.result;
};
function mpop$objectToJson(object) {
    __PS_MV_REG = [];
    return JSON.stringify(object);
};
function mpop$parseJson(json) {
    __PS_MV_REG = [];
    return JSON.parse(json);
};
function mpop$midi() {
    return MIDI;
};
function mpop$noteToKey(midi) {
    return midi.noteToKey;
};
function mpop$keyToNote(midi) {
    return midi.keyToNote;
};
function mpop$noteOn(midi, channelId, noteNumber, velocity, delay) {
    __PS_MV_REG = [];
    return midi.noteOn(channelId, noteNumber, velocity, delay);
};
function mpop$noteOff(midi, channelId, noteNumber, delay) {
    __PS_MV_REG = [];
    return midi.noteOff(channelId, noteNumber, delay);
};
function mpop$useXhr(midi) {
    return midi.USE_XHR;
};
function mpop$eventProgramNumber(event) {
    return event.number;
};
function mpop$gm(midi) {
    return midi.GM;
};
function mpop$byName(gm) {
    return gm.byName;
};
function mpop$byId(gm) {
    return gm.byId;
};
function mpop$soundfont(midi) {
    return midi.Soundfont;
};
function mpop$player(midi) {
    return midi.Player;
};
function mpop$startPlayMusic(player) {
    __PS_MV_REG = [];
    return player.start();
};
function mpop$stopPlayMusic(player) {
    __PS_MV_REG = [];
    return player.stop();
};
function mpop$pausePlayMusic(player) {
    __PS_MV_REG = [];
    return player.pause();
};
function mpop$resumePlayMusic(player) {
    __PS_MV_REG = [];
    return player.resume();
};
function mpop$playingMusicP(player) {
    return player.playing;
};
function mpop$currentPlayingTime(player) {
    return player.currentTime;
};
function mpop$currentPlayingData(player) {
    return player.currentData;
};
function mpop$playingData(player) {
    return player.data;
};
function mpop$musicEndTime(player) {
    return player.endTime;
};
function mpop$playingDataNote(data) {
    return data.note;
};
function mpop$playingDataMessage(data) {
    return data.message;
};
function mpop$playingFileInstruments(player) {
    __PS_MV_REG = [];
    return player ? player.getFileInstruments() : null;
};
function mpop$createLoadPluginOptions() {
    var _js6 = arguments.length;
    for (var n5 = 0; n5 < _js6; n5 += 2) {
        switch (arguments[n5]) {
        case 'soundfont-url':
            soundfontUrl = arguments[n5 + 1];
            break;
        case 'instrument':
            instrument = arguments[n5 + 1];
            break;
        case 'onprogress':
            onprogress = arguments[n5 + 1];
            break;
        case 'onsuccess':
            onsuccess = arguments[n5 + 1];
        };
    };
    var soundfontUrl;
    var instrument;
    var onprogress;
    var onsuccess;
    return { 'soundfontUrl' : soundfontUrl,
             'instrument' : instrument,
             'onprogress' : onprogress,
             'onsuccess' : onsuccess
           };
};
function mpop$loadPlugin(midi) {
    var options = Array.prototype.slice.call(arguments, 1);
    __PS_MV_REG = [];
    return midi.loadPlugin.apply(this, options);
};
function mpop$loadMusicFile(player, file, onsuccess) {
    __PS_MV_REG = [];
    return player.loadFile(file, onsuccess);
};
function mpop$loadMidiFile(player, onsuccess, onprogress, onerror, instruments) {
    __PS_MV_REG = [];
    return player.loadMidiFile(onsuccess, onprogress, onerror, instruments);
};
function mpop$addPlayListener(player, onsuccess) {
    __PS_MV_REG = [];
    return player.addListener(onsuccess);
};
function mpop$removePlayListener(player) {
    __PS_MV_REG = [];
    return player.removeListener();
};
function mpop$setVolume(midi, min, max) {
    __PS_MV_REG = [];
    return midi.setVolume(min, max);
};
function mpop$setfUseXhr(midi, useXhrP) {
    return midi.USE_XHR = useXhrP;
};
function mpop$programChange(midi, channelId, programNumber, delay) {
    __PS_MV_REG = [];
    return midi.programChange(channelId, programNumber, delay);
};
function mpop$setfCurrentPlayingTime(player, currentTime) {
    return player.currentTime = currentTime;
};
function mpop$setfCurrentPlayingData(player, currentPlayingData) {
    return player.currentData = currentPlayingData;
};
function mpop$setfPlayingAnimation(player, animation) {
    __PS_MV_REG = [];
    return player.setAnimation(animation);
};
function mpop$createLoader(midi) {
    return midi.loader = new sketch.ui.Timer;
};
function mpop$loaderSetValue(loader, value) {
    __PS_MV_REG = [];
    return loader.setValue(value);
};
/** https://sundawning.github.io/flex-textarea/index.html */
function mpop$flexTextarea(textarea) {
    var mirrorId = 'flex-textarea-mirror';
    if (!document.getElementById(mirrorId)) {
        var createMirror = document.createElement('pre');
        createMirror.id = mirrorId;
        createMirror.style.display = 'none';
        textarea.appendChild(createMirror);
        textarea.style.overflow = 'hidden';
        for (var attribute = null, _js_arrvar8 = ['onkeydown', 'onkeypress', 'onkeyup'], _js_idx7 = 0; _js_idx7 < _js_arrvar8.length; _js_idx7 += 1) {
            attribute = _js_arrvar8[_js_idx7];
            textarea.setAttribute(attribute, 'javascript:' + 'mpop$flexTextarea(this)');
        };
    };
    var mirrorElement = document.getElementById(mirrorId);
    mirrorElement.innerHTML = textarea.value;
    textarea.style.height = mirrorElement.offsetHeight + 'px';
    __PS_MV_REG = [];
    return textarea.style.height = textarea.scrollHeight + 'px';
};
function mpop$localStorageGetItem(key) {
    __PS_MV_REG = [];
    return localStorage.getItem(key);
};
function mpop$localStorageSetItem(key, value) {
    __PS_MV_REG = [];
    return localStorage.setItem(key, value);
};
function mpop$localStorageRemoveItem(key) {
    __PS_MV_REG = [];
    return localStorage.removeItem(key);
};
function mpop$skewer(host) {
    if (host === undefined) {
        host = 'http://127.0.0.1:8080';
    };
    var skewer = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    window.skewerNativeXHR = XMLHttpRequest;
    skewer.src = host + '/skewer';
    head.appendChild(skewer);
    __PS_MV_REG = [];
    return console.log('Skewer is Running.');
};
function mpop$test() {
    var mpop$TESTEXPRESSIONSRESULT = [];
    (function () {
    var mpop$is = eval('javascript:mpop$clTypeOf(1)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clTypeOf(1)',
                         'should-be' : 'number',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'number')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clStringUpcase(\"div\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clStringUpcase(\"div\")',
                         'should-be' : 'DIV',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'DIV')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$tagName(mpop$createElement(\"div\"))');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$tagName(mpop$createElement(\"div\"))',
                         'should-be' : 'DIV',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'DIV')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clFormat(1)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clFormat(1)',
                         'should-be' : undefined,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, undefined)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$TESTEXPRESSIONSRESULT.length');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$TESTEXPRESSIONSRESULT.length',
                         'should-be' : 4,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 4)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$createKeysElements(mpop$midi(), 20).length');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$createKeysElements(mpop$midi(), 20).length',
                         'should-be' : 20,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 20)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$appendKeysElements(mpop$getElementById(\"midi-piano-on-parenscript\"), mpop$createKeysElements(mpop$midi(), 20))');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$appendKeysElements(mpop$getElementById(\"midi-piano-on-parenscript\"), mpop$createKeysElements(mpop$midi(), 20))',
                         'should-be' : undefined,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, undefined)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$appendClassName(\"key\", \"white-key\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$appendClassName(\"key\", \"white-key\")',
                         'should-be' : 'key white-key',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'key white-key')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clFormat(\"%s%d\", \"1+1=\", 2)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clFormat(\"%s%d\", \"1+1=\", 2)',
                         'should-be' : undefined,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, undefined)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$setfUseXhr(mpop$midi(), null)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$setfUseXhr(mpop$midi(), null)',
                         'should-be' : null,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, null)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$useXhr(mpop$midi())');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$useXhr(mpop$midi())',
                         'should-be' : null,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, null)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$eventProgramNumber(mpop$clNth(\"acoustic_grand_piano\", mpop$gmByName(mpop$midi())))');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$eventProgramNumber(mpop$clNth(\"acoustic_grand_piano\", mpop$gmByName(mpop$midi())))',
                         'should-be' : 0,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 0)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$ensureKeySound(mpop$midi(), null, \"https://sundawning.github.io/midi-js-soundfonts/MusyngKite/\", \"pan_flute\", 0, 1000, 80, [0, 127], 0, 51, 127, 0, 0.75, function () {\n    __PS_MV_REG = [];\n    return mpop$clFormat(\"success to make %s sound\", mpop$clNth(51, mpop$midiNoteToKey()));\n})');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$ensureKeySound(mpop$midi(), null, \"https://sundawning.github.io/midi-js-soundfonts/MusyngKite/\", \"pan_flute\", 0, 1000, 80, [0, 127], 0, 51, 127, 0, 0.75, function () {\n    __PS_MV_REG = [];\n    return mpop$clFormat(\"success to make %s sound\", mpop$clNth(51, mpop$midiNoteToKey()));\n})',
                         'should-be' : 51,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 51)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clRemoveIf(function (mpop$i) {\n    __PS_MV_REG = [];\n    return mpop$clEqual(mpop$i, 1);\n}, [2, 3, 1, 2])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clRemoveIf(function (mpop$i) {\n    __PS_MV_REG = [];\n    return mpop$clEqual(mpop$i, 1);\n}, [2, 3, 1, 2])',
                         'should-be' : [2, 3, 2],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, [2, 3, 2])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clSplit(\" \", \"key white-key press\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clSplit(\" \", \"key white-key press\")',
                         'should-be' : ['key', 'white-key', 'press'],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, ['key', 'white-key', 'press'])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$removeClassName(\"key white-key press\", \"white-key\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$removeClassName(\"key white-key press\", \"white-key\")',
                         'should-be' : 'key press',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'key press')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$instrumentNameToChineseName(\"pan_flute\", [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"pan_flute\", \"排箫\"], [\"violin\", \"小提琴\"]])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$instrumentNameToChineseName(\"pan_flute\", [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"pan_flute\", \"排箫\"], [\"violin\", \"小提琴\"]])',
                         'should-be' : '排箫',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, '排箫')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$instrumentNameToChineseName(\"pan_flute\", [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"violin\", \"小提琴\"]])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$instrumentNameToChineseName(\"pan_flute\", [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"violin\", \"小提琴\"]])',
                         'should-be' : null,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, null)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$regexExpression(\"( |^)[a-z]\", \"g\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$regexExpression(\"( |^)[a-z]\", \"g\")',
                         'should-be' : /( |^)[a-z]/g,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, /( |^)[a-z]/g)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$initialCapital(\"pAn flUte\", true)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$initialCapital(\"pAn flUte\", true)',
                         'should-be' : 'Pan Flute',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'Pan Flute')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$instrumentNameToEnglishName(\"pan_flute\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$instrumentNameToEnglishName(\"pan_flute\")',
                         'should-be' : 'Pan Flute',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'Pan Flute')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clScanToStrings(\"d\", \"b\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clScanToStrings(\"d\", \"b\")',
                         'should-be' : null,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, null)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$filterAndSortInstruments(\"箫\", [\"acoustic_grand_piano\", \"violin\", \"pan_flute\", \"flute\"], \"key\", function (mpop$instrument) {\n    __PS_MV_REG = [];\n    return mpop$instrumentNameToChineseName(mpop$instrument, [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"violin\", \"小提琴\"], [\"pan_flute\", \"排箫\"], [\"flute\", \"长笛\"]]);\n})');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$filterAndSortInstruments(\"箫\", [\"acoustic_grand_piano\", \"violin\", \"pan_flute\", \"flute\"], \"key\", function (mpop$instrument) {\n    __PS_MV_REG = [];\n    return mpop$instrumentNameToChineseName(mpop$instrument, [[\"acoustic_grand_piano\", \"原声大钢琴\"], [\"violin\", \"小提琴\"], [\"pan_flute\", \"排箫\"], [\"flute\", \"长笛\"]]);\n})',
                         'should-be' : 'pan_flute',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'pan_flute')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$filterOggFilenames([\"whistle-ogg.js\", \"voice_oohs-mp3.js\", \"violin-mp3.js\", \"viola-ogg.js\"])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$filterOggFilenames([\"whistle-ogg.js\", \"voice_oohs-mp3.js\", \"violin-mp3.js\", \"viola-ogg.js\"])',
                         'should-be' : ['whistle-ogg.js', 'viola-ogg.js'],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, ['whistle-ogg.js', 'viola-ogg.js'])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$validInstruments(mpop$midi(), [\"./midi-js-soundfonts/FluidR3_GM/flute-ogg.js\"], [])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$validInstruments(mpop$midi(), [\"./midi-js-soundfonts/FluidR3_GM/flute-ogg.js\"], [])',
                         'should-be' : ['./midi-js-soundfonts/FluidR3_GM/flute-ogg.js'],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, ['./midi-js-soundfonts/FluidR3_GM/flute-ogg.js'])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clRemoveDuplicates([2, 1, 2, 3, 1])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clRemoveDuplicates([2, 1, 2, 3, 1])',
                         'should-be' : [2, 1, 3],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, [2, 1, 3])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clFind(1, [1])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clFind(1, [1])',
                         'should-be' : true,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, true)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$inputInstruments(\"./midi-js-soundfonts/FluidR3_GM/flute-ogg.js\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$inputInstruments(\"./midi-js-soundfonts/FluidR3_GM/flute-ogg.js\")',
                         'should-be' : ['./midi-js-soundfonts/FluidR3_GM/flute-ogg.js'],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, ['./midi-js-soundfonts/FluidR3_GM/flute-ogg.js'])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$filenameWithoutSuffix(\"/tmp/js.js.js\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$filenameWithoutSuffix(\"/tmp/js.js.js\")',
                         'should-be' : 'js.js',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, 'js.js')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$sameLibraryP(\"/tmp/Base64.js\", \"https://github.com/Base64.js\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$sameLibraryP(\"/tmp/Base64.js\", \"https://github.com/Base64.js\")',
                         'should-be' : true,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, true)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clMapcar(function (mpop$i) {\n    __PS_MV_REG = [];\n    return mpop$libraryExistsP(mpop$i, [\"file:///tmp/Base64.js\"]);\n}, [\"Base64\", \"Base64.js\", \"/tmp/Base64.js\", \"./Base64.js\", \"https://domain.org/Base64.js\"])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clMapcar(function (mpop$i) {\n    __PS_MV_REG = [];\n    return mpop$libraryExistsP(mpop$i, [\"file:///tmp/Base64.js\"]);\n}, [\"Base64\", \"Base64.js\", \"/tmp/Base64.js\", \"./Base64.js\", \"https://domain.org/Base64.js\"])',
                         'should-be' : [true, true, true, true, true],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, [true, true, true, true, true])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$inputInstrumentsClassifier([\"/tmp/sounfont.user.js\", \"pan_flute\", \"music_box\", \"https://sundawning.github.io/midi-js-soundfonts/MusyngKite/pan_flute-ogg.js\"], [\"flute\", \"pan_flute\"])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$inputInstrumentsClassifier([\"/tmp/sounfont.user.js\", \"pan_flute\", \"music_box\", \"https://sundawning.github.io/midi-js-soundfonts/MusyngKite/pan_flute-ogg.js\"], [\"flute\", \"pan_flute\"])',
                         'should-be' : { 'instrument-user-jss' : ['https://sundawning.github.io/midi-js-soundfonts/MusyngKite/pan_flute-ogg.js'],
                                         'valid-instruments' : ['pan_flute', '/tmp/sounfont.user.js'],
                                         'unvalid-urls' : ['music_box']
                                       },
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, { 'instrument-user-jss' : ['https://sundawning.github.io/midi-js-soundfonts/MusyngKite/pan_flute-ogg.js'],
                                                              'valid-instruments' : ['pan_flute', '/tmp/sounfont.user.js'],
                                                              'unvalid-urls' : ['music_box']
                                                            })
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clConcatenateLists([1], [\"mpop$a\", \"mpop$b\", \"mpop$c\"], [\"d\"])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clConcatenateLists([1], [\"mpop$a\", \"mpop$b\", \"mpop$c\"], [\"d\"])',
                         'should-be' : [1, 'mpop$a', 'mpop$b', 'mpop$c', 'd'],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, [1, 'mpop$a', 'mpop$b', 'mpop$c', 'd'])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$clMapcar(mpop$inputValueNullP, [\"\", \" \", \"\\r\\n\", null, undefined])');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$clMapcar(mpop$inputValueNullP, [\"\", \" \", \"\\r\\n\", null, undefined])',
                         'should-be' : [true, true, true, true, true],
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, [true, true, true, true, true])
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$looseFilterRegex(\" f lu\")');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$looseFilterRegex(\" f lu\")',
                         'should-be' : '.*.*f.*lu',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, '.*.*f.*lu')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:(function () {\n    var string = \"a\";\n    __PS_MV_REG = [];\n    return mpop$base64StringToString(mpop$stringToBase64String(string)) == string;\n})()');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:(function () {\n    var string = \"a\";\n    __PS_MV_REG = [];\n    return mpop$base64StringToString(mpop$stringToBase64String(string)) == string;\n})()',
                         'should-be' : true,
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, true)
                       }, mpop$TESTEXPRESSIONSRESULT);
})();
(function () {
    var mpop$is = eval('javascript:mpop$timeFormatting(72)');
    __PS_MV_REG = [];
    return mpop$clPush({ 'form' : 'javascript:mpop$timeFormatting(72)',
                         'should-be' : '1:12',
                         'is' : mpop$is,
                         'passed-p' : mpop$clEqual(mpop$is, '1:12')
                       }, mpop$TESTEXPRESSIONSRESULT);
})();;
    __PS_MV_REG = [];
    return mpop$analysisOfTestResults(mpop$TESTEXPRESSIONSRESULT);
};
function mpop$analysisOfTestResults(mpop$testExpressionsResult) {
    var mpop$success = [];
    var mpop$failure = [];
    var _js10 = mpop$testExpressionsResult.length;
    for (var _js9 = 0; _js9 < _js10; _js9 += 1) {
        var mpop$testExpressionResult = mpop$testExpressionsResult[_js9];
        if (mpop$testExpressionResult['passed-p']) {
            mpop$clPush(mpop$testExpressionResult, mpop$success);
        } else {
            mpop$clPush(mpop$testExpressionResult, mpop$failure);
        };
    };
    __PS_MV_REG = [];
    return { 'failure' : mpop$failure, 'success' : mpop$success };
};
function mpop$liveLoadApp(mpop$appJs) {
    __PS_MV_REG = [];
    return mpop$loadJavascriptFile(mpop$appJs, mpop$clFirst(mpop$getElementsByTagName('head')), 'javascript:' + 'mpop$clPrint(\"live loaded app\")', 'force-p', true);
};
function mpop$appendClassName(mpop$old, mpop$new) {
    __PS_MV_REG = [];
    return mpop$clJoin([mpop$old, mpop$new], ' ');
};
function mpop$removeClassName(mpop$old, mpop$toRemove) {
    __PS_MV_REG = [];
    return mpop$clJoin(mpop$clRemoveIf(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$clEqual(mpop$toRemove, mpop$i);
    }, mpop$clSplit(' ', mpop$old)), ' ');
};
function mpop$setfAppendedClassName(mpop$element, mpop$toAppend) {
    __PS_MV_REG = [];
    return mpop$setfClassName(mpop$element, mpop$appendClassName(mpop$elementClassName(mpop$element), mpop$toAppend));
};
function mpop$setfRemovedClassName(mpop$element, mpop$toRemove) {
    __PS_MV_REG = [];
    return mpop$setfClassName(mpop$element, mpop$removeClassName(mpop$elementClassName(mpop$element), mpop$toRemove));
};
function mpop$clFirst(list) {
    __PS_MV_REG = [];
    return mpop$clNth(0, list);
};
function mpop$clSecond(list) {
    __PS_MV_REG = [];
    return mpop$clNth(1, list);
};
function mpop$clLast(sequence) {
    __PS_MV_REG = [];
    return mpop$clNth(sequence.length - 1, sequence);
};
function mpop$clZerop(number) {
    return number === 0;
};
function mpop$clEqual(mpop$x, mpop$y) {
    var _js12 = arguments.length;
    for (var n11 = 2; n11 < _js12; n11 += 2) {
        switch (arguments[n11]) {
        case 'key':
            mpop$key = arguments[n11 + 1];
        };
    };
    var mpop$key;
    __PS_MV_REG = [];
    return mpop$key ? mpop$clEqual(mpop$key(mpop$x), mpop$key(mpop$y)) : mpop$x === mpop$y || mpop$x == mpop$y || mpop$clString(mpop$x) == mpop$clString(mpop$y);
};
function mpop$clAllMatchesAsStrings(mpop$regex, mpop$targetString) {
    __PS_MV_REG = [];
    return mpop$clStringMatch(mpop$regexExpression(mpop$regex, 'g'), mpop$targetString);
};
function mpop$clScanToStrings(mpop$regex, mpop$targetString) {
    if (mpop$targetString) {
        var mpop$result = mpop$clAllMatchesAsStrings(mpop$regex, mpop$targetString);
        __PS_MV_REG = [];
        return mpop$result ? mpop$clFirst(mpop$result) : null;
    };
};
function mpop$clRemoveIf(mpop$predicate, mpop$object) {
    __PS_MV_REG = [];
    return (function () {
        var _js13 = mpop$object.length - 1;
        var collect14 = [];
        for (var mpop$i = 0; mpop$i <= _js13; mpop$i += 1) {
            if (mpop$predicate(mpop$clNth(mpop$i, mpop$object))) {
                continue;
            };
            collect14.push(mpop$clNth(mpop$i, mpop$object));
        };
        __PS_MV_REG = [];
        return collect14;
    })();
};
function mpop$clRemoveIfNot(mpop$predicate, sequence) {
    __PS_MV_REG = [];
    return mpop$clRemoveIf(function (mpop$item) {
        __PS_MV_REG = [];
        return !mpop$predicate(mpop$item);
    }, sequence);
};
function mpop$clFind(mpop$item, sequence) {
    __PS_MV_REG = [];
    return mpop$clIndexOf(sequence, mpop$item) !== -1 || !mpop$clZerop(mpop$clRemoveIfNot(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$clEqual(mpop$i, mpop$item);
    }, sequence).length);
};
function mpop$clMapcar(mpop$predicate, sequence) {
    __PS_MV_REG = [];
    return (function () {
        var _js16 = sequence.length;
        var collect17 = [];
        for (var _js15 = 0; _js15 < _js16; _js15 += 1) {
            var mpop$i = sequence[_js15];
            collect17.push(mpop$predicate(mpop$i));
        };
        __PS_MV_REG = [];
        return collect17;
    })();
};
function mpop$clConcatenateLists() {
    var mpop$moreList = Array.prototype.slice.call(arguments, 0);
    __PS_MV_REG = [];
    return mpop$clReduce(function (mpop$i, mpop$j) {
        __PS_MV_REG = [];
        return mpop$clConcatenateList(mpop$i, mpop$j);
    }, mpop$moreList, 'initial-value', []);
};
function mpop$nthParentNode(mpop$element, mpop$n) {
    __PS_MV_REG = [];
    return mpop$clZerop(mpop$n) ? mpop$elementParentNode(mpop$element) : mpop$nthParentNode(mpop$elementParentNode(mpop$element), mpop$n - 1);
};
function mpop$clNull(mpop$object) {
    __PS_MV_REG = [];
    return !mpop$object || mpop$object == null || mpop$clZerop(mpop$object.length);
};
function mpop$setfInputValue(mpop$input, mpop$value) {
    __PS_MV_REG = [];
    return mpop$setAttribute(mpop$input, 'value', mpop$value);
};
function mpop$clRemoveDuplicates(sequence) {
    if (sequence) {
        var mpop$result = [];
        mpop$clMapcar(function (mpop$i) {
            __PS_MV_REG = [];
            return !mpop$clFind(mpop$i, mpop$result) ? mpop$clPush(mpop$i, mpop$result) : null;
        }, sequence);
        __PS_MV_REG = [];
        return mpop$result;
    };
};
function mpop$setfSelectSize(mpop$select, max) {
    __PS_MV_REG = [];
    return mpop$setAttribute(mpop$select, 'size', Math.min(mpop$selectedOptions(mpop$select).length, max));
};
/** JavaScript字符串单词首字母大写的实现方式 - SegmentFault 思否: https://segmentfault.com/q/1010000003020515 */
function mpop$initialCapital(string, mpop$otherLetterLowercaseP) {
    __PS_MV_REG = [];
    return mpop$clRegexReplace(mpop$regexExpression('( |^)[a-z]', 'g'), mpop$otherLetterLowercaseP ? mpop$clStringDowncase(string) : string, mpop$clStringUpcase);
};
/**
 * `function-before'是单个函数调用的形式，不能是匿名函数
 * `function-after'函数的名字，可以是匿名函数。默认暂停时间是100毫秒。
 * 返回值是一个递增的计数，副作用函数。
 */
function mpop$afterLoad(mpop$functionBefore, mpop$functionAfter) {
    var _js19 = arguments.length;
    for (var n18 = 2; n18 < _js19; n18 += 2) {
        switch (arguments[n18]) {
        case 'timeout':
            mpop$timeout = arguments[n18 + 1];
        };
    };
    var mpop$timeout = 'undefined' === typeof mpop$timeout ? 100 : mpop$timeout;
    mpop$functionBefore;
    __PS_MV_REG = [];
    return mpop$setTimeout(mpop$functionAfter, mpop$timeout);
};
function mpop$buttonOnOff(mpop$button) {
    var _js21 = arguments.length;
    for (var n20 = 1; n20 < _js21; n20 += 2) {
        switch (arguments[n20]) {
        case 'on-p':
            mpop$onP = arguments[n20 + 1];
            break;
        case 'on':
            mpop$on = arguments[n20 + 1];
            break;
        case 'off':
            mpop$off = arguments[n20 + 1];
            break;
        case 'class-name':
            className = arguments[n20 + 1];
        };
    };
    var mpop$onP;
    var mpop$on;
    var mpop$off;
    var className = 'undefined' === typeof className ? 'on' : className;
    if (mpop$onP()) {
        if (mpop$off) {
            mpop$off();
        };
        __PS_MV_REG = [];
        return mpop$setfRemovedClassName(mpop$button, className);
    } else {
        if (mpop$on) {
            mpop$on();
        };
        __PS_MV_REG = [];
        return mpop$setfAppendedClassName(mpop$button, className);
    };
};
function mpop$phoneP() {
    __PS_MV_REG = [];
    return mpop$windowWidth() <= 960;
};
function mpop$pcP() {
    __PS_MV_REG = [];
    return mpop$windowWidth() >= 1080;
};
function mpop$clickToToggleFullscreen(mpop$clickButton) {
    __PS_MV_REG = [];
    return mpop$buttonOnOff(mpop$clickButton, 'on-p', function () {
        __PS_MV_REG = [];
        return mpop$fullScreenP();
    }, 'on', function () {
        __PS_MV_REG = [];
        return mpop$launchFullScreen(mpop$documentElement());
    }, 'off', function () {
        __PS_MV_REG = [];
        return mpop$unlaunchFullScreen();
    });
};
function mpop$windowHorizontalP() {
    __PS_MV_REG = [];
    return mpop$windowWidth() >= mpop$windowHeight();
};
function mpop$clickToToggleOverflow(mpop$clickButton) {
    var mpop$scrollBarsElements = [];
    mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$clPush(mpop$element, mpop$scrollBarsElements);
    }, mpop$getElementsByTagName('body'));
    mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$clPush(mpop$element, mpop$scrollBarsElements);
    }, mpop$getElementsByClassName('keys'));
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$buttonOnOff(mpop$clickButton, 'on-p', function () {
            __PS_MV_REG = [];
            return mpop$clEqual(mpop$elementStyleOverflow(mpop$element), 'hidden');
        }, 'on', function () {
            mpop$setfStyleOverflow(mpop$element, 'hidden');
            __PS_MV_REG = [];
            return mpop$clMapcar(function (mpop$element) {
                __PS_MV_REG = [];
                return mpop$setfAppendedClassName(mpop$element, 'hidden');
            }, mpop$getElementsByClassName('key-adjustment'));
        }, 'off', function () {
            mpop$setfStyleOverflow(mpop$element, '');
            __PS_MV_REG = [];
            return mpop$clMapcar(function (mpop$element) {
                __PS_MV_REG = [];
                return mpop$setfRemovedClassName(mpop$element, 'hidden');
            }, mpop$getElementsByClassName('key-adjustment'));
        });
    }, mpop$scrollBarsElements);
};
function mpop$actionNotAllowed(mpop$element, mpop$notAllowedClassName) {
    mpop$setfElementDisabled(mpop$element, true);
    __PS_MV_REG = [];
    return mpop$setfAppendedClassName(mpop$element, mpop$notAllowedClassName);
};
function mpop$actionAllowed(mpop$element, mpop$notAllowedClassName) {
    mpop$setfElementDisabled(mpop$element, null);
    __PS_MV_REG = [];
    return mpop$setfRemovedClassName(mpop$element, mpop$notAllowedClassName);
};
function mpop$px(number) {
    return number + 'px';
};
function mpop$unpx(string) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('\\d+', string);
};
function mpop$filename(mpop$filespec) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('[^/]*\\.[a-z]*$', mpop$filespec);
};
function mpop$filenameSuffix(mpop$filespec) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('\\.[^\\.]*$', mpop$filespec);
};
function mpop$filenameWithoutSuffix(mpop$filespec) {
    var mpop$trueFilename = mpop$filename(mpop$filespec);
    __PS_MV_REG = [];
    return mpop$filenameSuffix(mpop$trueFilename) ? mpop$clSubseq(mpop$trueFilename, 0, mpop$trueFilename.length - mpop$filenameSuffix(mpop$trueFilename).length) : mpop$trueFilename;
};
function mpop$sameLibraryP(mpop$library1, mpop$library2) {
    __PS_MV_REG = [];
    return mpop$clEqual(mpop$library1, mpop$library2) || mpop$clEqual(mpop$filenameWithoutSuffix(mpop$library1), mpop$filenameWithoutSuffix(mpop$library2));
};
function mpop$existsLibraries(mpop$existsJavascriptFiles) {
    __PS_MV_REG = [];
    return mpop$clMapcar(mpop$filenameWithoutSuffix, mpop$existsJavascriptFiles);
};
function mpop$libraryExistsP(mpop$library, mpop$existsJavascriptFiles) {
    __PS_MV_REG = [];
    return mpop$clFind(mpop$library, mpop$existsJavascriptFiles) || mpop$clFind(mpop$library, mpop$existsLibraries(mpop$existsJavascriptFiles)) || mpop$clFind(mpop$filenameWithoutSuffix(mpop$library), mpop$existsLibraries(mpop$existsJavascriptFiles));
};
function mpop$existsJavascriptFiles() {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$elementSrc(mpop$i);
    }, mpop$clRemoveIfNot(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$clEqual(mpop$elementType(mpop$i), 'text/javascript') || mpop$clScanToStrings('\\.js$', mpop$elementSrc(mpop$i));
    }, mpop$getElementsByTagName('script')));
};
function mpop$loadJavascriptFile(mpop$src, mpop$parent, mpop$onload) {
    var _js23 = arguments.length;
    for (var n22 = 3; n22 < _js23; n22 += 2) {
        switch (arguments[n22]) {
        case 'force-p':
            mpop$forceP = arguments[n22 + 1];
        };
    };
    var mpop$forceP;
    if (mpop$forceP) {
        var mpop$script = mpop$createElement('script');
        mpop$setAttribute(mpop$script, 'src', mpop$src);
        mpop$setAttribute(mpop$script, 'type', 'text/javascript');
        mpop$setAttribute(mpop$script, 'onload', mpop$onload);
        __PS_MV_REG = [];
        return mpop$appendChild(mpop$parent, mpop$script);
    } else {
        __PS_MV_REG = [];
        return !mpop$libraryExistsP(mpop$src, mpop$existsJavascriptFiles()) ? mpop$loadJavascriptFile(mpop$src, mpop$parent, mpop$onload, 'force-p', true) : null;
    };
};
function mpop$touchInElementP(mpop$touch, mpop$element) {
    var mpop$touchRect = mpop$getBoundingClientRect(mpop$element);
    __PS_MV_REG = [];
    return mpop$clientX(mpop$touch) >= mpop$rectLeft(mpop$touchRect) && mpop$clientX(mpop$touch) <= mpop$rectRight(mpop$touchRect) && mpop$clientY(mpop$touch) >= mpop$rectTop(mpop$touchRect) && mpop$clientY(mpop$touch) <= mpop$rectBottom(mpop$touchRect);
};
function mpop$touchInElements(mpop$touch, mpop$elements) {
    __PS_MV_REG = [];
    return mpop$clRemoveIfNot(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$touchInElementP(mpop$touch, mpop$element);
    }, mpop$elements);
};
function mpop$onlineUriP(mpop$uri) {
    __PS_MV_REG = [];
    return !mpop$clScanToStrings('^file:///.*', mpop$uri);
};
function mpop$clPrint(mpop$object) {
    __PS_MV_REG = [];
    return mpop$clFormat('%o', mpop$object);
};
function mpop$gmByName(mpop$midi) {
    __PS_MV_REG = [];
    return mpop$byName(mpop$gm(mpop$midi));
};
function mpop$gmById(mpop$midi) {
    __PS_MV_REG = [];
    return mpop$byId(mpop$gm(mpop$midi));
};
function mpop$midiNoteToKey() {
    __PS_MV_REG = [];
    return mpop$noteToKey(mpop$midi());
};
function mpop$instrumentExistP(mpop$midi, mpop$instrument) {
    __PS_MV_REG = [];
    return mpop$clNth(mpop$instrument, mpop$soundfont(mpop$midi));
};
function mpop$keyToNoteByElement(mpop$midi, mpop$element) {
    __PS_MV_REG = [];
    return mpop$clNth(mpop$innerText(mpop$element), mpop$keyToNote(mpop$midi));
};
function mpop$drawProgramHtmlStructure() {
    return mpop$setfOuterHtml(mpop$getElementById('midi-piano-on-parenscript'), '\n<div id=\'midi-piano-on-parenscript\'>\n  <div id=\'extended-operation-bar\'>\n    <div onclick=\'mpop$clickToToggleFullscreen(this);\' class=\'button\'>全屏\n    </div>\n    <div class=\'button\' id=\'toggle-overflow\' onclick=\'mpop$clickToToggleOverflow(this);\'>锁定键盘\n    </div>\n    <div class=\'button\' onclick=\'mpop$clickToPopupInstrumentSelectWindow();\'>♪更换乐器\n    </div>\n    <div class=\'button\' onclick=\'mpop$clickToPopupMoreWindow();\'>更多\n    </div>\n  </div>\n  <div id=\'keyss\'></div>\n  <div id=\'popups\'>\n    <div id=\'full-screen-popups\' class=\'popup\'>\n      <div id=\'close-popup\' class=\'button\' onclick=\'mpop$clickToCloseFullScreenPopup();\'>关闭窗口\n      </div>\n      <div id=\'instrument-select-window\' class=\'popup\'>\n        <div class=\'manage-instrument\'>\n          <div class=\'title\'>♪从乐器列表里更换乐器\n          </div>\n          <div class=\'content\'>\n            <input type=\'text\' onkeydown=\'mpop$keydownToFilterOfflineInstruments(this.value);\' onkeyup=\'mpop$keydownToFilterOfflineInstruments(this.value);\' autocomplete=\'on\' placeholder=\'输入乐器的名称来筛选乐器列表（可选）\' />\n            <select id=\'select-instrument\' class=\'select\'></select>\n            <div class=\'button\' onclick=\'mpop$clickToSelectInstrument(this);\'>更换\n            </div>\n          </div>\n        </div>\n        <div class=\'manage-instrument\'>\n          <div class=\'title\'>♪设置乐器的路径\n          </div>\n          <div class=\'content\'>\n            <textarea id=\'add-instruments\'></textarea>\n            <input type=\'file\' id=\'add-instruments-by-file\' onchange=\'mpop$onChangeToAddInstrumentsByFile(this);\' />\n            <div class=\'button\' onclick=\'mpop$clickToAddInstruments();\'>添加到乐器列表\n            </div>\n            <div class=\'button\' onclick=\'mpop$clickToResetInstrumentsList();\'>删除乐器列表\n            </div>\n          </div>\n        </div>\n        <div class=\'manage-instrument\'>\n          <div class=\'title\'>♪从网络乐器库下载乐器到本地\n          </div>\n          <div class=\'content\'>\n            <input type=\'text\' onkeydown=\'mpop$keydownToFilterOnlineInstruments(this.value);\' onkeyup=\'mpop$keydownToFilterOnlineInstruments(this.value);\' placeholder=\'输入乐器的名称来筛选下载列表（可选）\' />\n            <select id=\'select-instrument-to-download\' class=\'select\' onchange=\'mpop$onchangeToUpdateDownloadInstrumentLink(this);\'></select>\n            <a class=\'button\' id=\'click-to-download-instrument\'>下载到本地\n            </a>\n          </div>\n        </div>\n      </div>\n      <div id=\'more-window\' class=\'popup\'>\n        <div class=\'manage-more\'>\n          <div class=\'title\'>♪外链\n          </div>\n          <div class=\'content\'>\n            <a href=\'https://sundawning.github.io/midi-piano-on-parenscript/mpop\' class=\'button\'>在线\n            </a>\n            <a href=\'https://github.com/SunDawning/midi-piano-on-parenscript/blob/master/readme.org\' class=\'button\'>教程\n            </a>\n            <a href=\'https://codeload.github.com/SunDawning/midi-piano-on-parenscript/zip/master\' download=\'midi-piano-on-parenscript.zip\' class=\'button\'>下载软件\n            </a>\n          </div>\n        </div>\n        <div class=\'manage-more\'>\n          <div class=\'title\'>♪评论\n          </div>\n          <div id=\'anonymous-comment\'></div>\n        </div>\n      </div>\n    </div>\n    <div id=\'floating-popups\' class=\'popup\'>\n      <div id=\'midi-player-window\'></div>\n    </div>\n  </div>\n</div>');
};
function mpop$clickToPopupMoreWindow() {
    __PS_MV_REG = [];
    return mpop$popupWindow(mpop$getElementById('more-window'));
};
function mpop$keyHeight(mpop$height, mpop$rows) {
    return mpop$height / mpop$rows;
};
function mpop$keyWidth(mpop$width, mpop$columns) {
    return mpop$width / mpop$columns;
};
function mpop$whiteKeyWidth(mpop$deviceWidth, mpop$keysColumns, mpop$keyBorderWidth) {
    __PS_MV_REG = [];
    return mpop$keyWidth(mpop$deviceWidth - mpop$keysColumns * 2 * mpop$keyBorderWidth - (mpop$keysColumns - 1) * (mpop$keyBorderWidth / 2), mpop$keysColumns);
};
function mpop$keysHeight(mpop$deviceHeight, mpop$operationBarId, mpop$operationBarBorderWidth) {
    __PS_MV_REG = [];
    return mpop$deviceHeight - (mpop$elementOffsetHeight(mpop$getElementById(mpop$operationBarId)) + 2 * mpop$operationBarBorderWidth);
};
function mpop$setfKeyStyle(mpop$keys, mpop$keyBorderWidth) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        mpop$setfStyleBorderWidth(mpop$key, mpop$px(mpop$keyBorderWidth));
        __PS_MV_REG = [];
        return mpop$setfStyleMarginTop(mpop$key, mpop$px(mpop$keyBorderWidth / 2));
    }, mpop$keys);
};
function mpop$setfWhiteKeyStyle(mpop$whiteKey, mpop$keyBorderWidth, mpop$deviceWidth, mpop$keysColumns) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        var mpop$intervalBetweenKeys = mpop$px(mpop$keyBorderWidth / 2);
        mpop$setfStyleMinWidth(mpop$key, mpop$px(mpop$whiteKeyWidth(mpop$deviceWidth, mpop$keysColumns, mpop$keyBorderWidth)));
        __PS_MV_REG = [];
        return mpop$setfStyleMarginRight(mpop$key, mpop$intervalBetweenKeys);
    }, mpop$whiteKey);
};
function mpop$setfBlackKeyStyle(mpop$blackKey, mpop$whiteKeyWidth, mpop$keyHeight, mpop$keyBorderWidth) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        var mpop$width = mpop$whiteKeyWidth * 0.6666667;
        mpop$setfStyleMinWidth(mpop$key, mpop$px(mpop$width));
        mpop$setfStyleHeight(mpop$key, mpop$px((mpop$keyHeight - 4 * mpop$keyBorderWidth) * 0.6666667));
        var mpop$marginLeft = mpop$px(-(mpop$width / 2 + mpop$keyBorderWidth));
        mpop$setfStyleMarginLeft(mpop$key, mpop$marginLeft);
        __PS_MV_REG = [];
        return mpop$setfStyleMarginRight(mpop$key, mpop$marginLeft);
    }, mpop$blackKey);
};
function mpop$setfKeyLabelStyle(mpop$keyLabel, mpop$keyHeight) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        mpop$setfStyleBottom(mpop$key, mpop$px(mpop$keyHeight * 0.33333334 * 0.33333334));
        __PS_MV_REG = [];
        return mpop$setfElementOntouchstart(mpop$key, function (mpop$event) {
            __PS_MV_REG = [];
            return mpop$event.preventDefault();
        });
    }, mpop$keyLabel);
};
function mpop$whiteBlackKeyClassName(mpop$key) {
    switch (mpop$key.length) {
    case 2:
        return 'white-key';
    case 3:
        return 'black-key';
    };
};
function mpop$createKeysElements(mpop$midi, count) {
    if (count === undefined) {
        count = 88;
    };
    var mpop$keysElements = [];
    for (var mpop$n = 0; mpop$n < count; mpop$n += 1) {
        var mpop$key = mpop$createElement('div');
        var mpop$label = mpop$createElement('div');
        var mpop$noteNumber = mpop$n + 21;
        var mpop$keyLabel = mpop$noteToKey(mpop$midi)[mpop$noteNumber];
        mpop$setfClassName(mpop$key, 'key' + ' ' + mpop$whiteBlackKeyClassName(mpop$keyLabel));
        mpop$setfInnerHtml(mpop$label, mpop$keyLabel);
        mpop$setfClassName(mpop$label, 'key-label');
        mpop$addNthKeyEventListener(mpop$midi, mpop$noteNumber, mpop$key);
        mpop$appendChild(mpop$key, mpop$label);
        mpop$clPush(mpop$key, mpop$keysElements);
    };
    __PS_MV_REG = [];
    return mpop$keysElements;
};
function mpop$appendKeysElements(mpop$keysElement, mpop$keysElements) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$keyElement) {
        __PS_MV_REG = [];
        return mpop$appendChild(mpop$keysElement, mpop$keyElement);
    }, mpop$keysElements);
};
function mpop$setfKeysStyle(mpop$keysElements, mpop$midi, mpop$keysCount, mpop$keyHeight, mpop$keysRows) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$keys) {
        mpop$appendKeysElements(mpop$keys, mpop$createKeysElements(mpop$midi, mpop$keysCount));
        __PS_MV_REG = [];
        return mpop$setfStyleHeight(mpop$keys, mpop$px(mpop$keyHeight));
    }, mpop$keysElements);
};
function mpop$setfKeyssStyle(mpop$keyss, mpop$keysRows) {
    for (var mpop$i = 0; mpop$i < mpop$keysRows; mpop$i += 1) {
        var mpop$keys = mpop$createElement('div');
        mpop$setfClassName(mpop$keys, 'keys');
        mpop$appendChild(mpop$keyss, mpop$keys);
    };
};
function mpop$drawKeyboard(mpop$whiteKeys, mpop$blackKeys, mpop$deviceWidth, mpop$keysColumns, mpop$keyHeight) {
    var mpop$keyBorderWidth = mpop$deviceWidth * (8 / 640);
    mpop$clMapcar(function (mpop$key) {
        var mpop$intervalBetweenKeys = mpop$px(mpop$keyBorderWidth / 2);
        mpop$setfStyleMinWidth(mpop$key, mpop$px(mpop$whiteKeyWidth(mpop$deviceWidth, mpop$keysColumns, mpop$keyBorderWidth)));
        __PS_MV_REG = [];
        return mpop$setfStyleMarginRight(mpop$key, mpop$intervalBetweenKeys);
    }, mpop$whiteKeys);
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        var mpop$width = mpop$whiteKeyWidth(mpop$deviceWidth, mpop$keysColumns, mpop$keyBorderWidth) * 0.6666667;
        mpop$setfStyleMinWidth(mpop$key, mpop$px(mpop$width));
        mpop$setfStyleHeight(mpop$key, mpop$px((mpop$keyHeight - 4 * mpop$keyBorderWidth) * 0.6666667));
        var mpop$marginLeft = mpop$px(-(mpop$width / 2 + mpop$keyBorderWidth));
        mpop$setfStyleMarginLeft(mpop$key, mpop$marginLeft);
        __PS_MV_REG = [];
        return mpop$setfStyleMarginRight(mpop$key, mpop$marginLeft);
    }, mpop$blackKeys);
};
function mpop$changeInstrument(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$channelId, mpop$delay, mpop$callback) {
    mpop$setfUseXhr(mpop$midi, mpop$useXhr);
    mpop$loadPlugin(mpop$midi, mpop$createLoadPluginOptions('soundfont-url', mpop$soundfontUrl, 'instrument', mpop$instrument, 'onprogress', function (mpop$state, mpop$progress) {
        __PS_MV_REG = [];
        return mpop$clFormat('%s %s %s', mpop$state, mpop$instrument, (function () {
            switch (mpop$progress) {
            case 1:
                return 'success';
            default:
                return 'failure';
            };
        })());
    }, 'onsuccess', function () {
        mpop$programChange(mpop$midi, mpop$channelId, mpop$eventProgramNumber(mpop$clNth(mpop$instrument, mpop$gmByName(mpop$midi))), mpop$delay);
        __PS_MV_REG = [];
        return mpop$setTimeout(mpop$callback, mpop$DEFAULTMINCHANGEINTERNALINSTRUMENTNOTEONDELAY);
    }));
    __PS_MV_REG = [];
    return mpop$instrument;
};
function mpop$makeKeySound(mpop$midi, mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback) {
    mpop$setVolume.apply(this, [mpop$midi].concat(mpop$volumeAlist));
    mpop$noteOn(mpop$midi, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay);
    mpop$noteOff(mpop$midi, mpop$channelId, mpop$noteNumber, mpop$noteOffDelay);
    __PS_MV_REG = [];
    return (mpop$callback ? mpop$callback() : null) || mpop$noteNumber;
};
function mpop$changeInstrumentNoteOnDelay(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$changeInstrumentDelay, mpop$changeInstrumentNoteOnDelay, mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback) {
    mpop$changeInstrument(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$channelId, mpop$changeInstrumentDelay, function () {
        __PS_MV_REG = [];
        return mpop$makeKeySound(mpop$midi, mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback);
    }, mpop$changeInstrumentNoteOnDelay);
    __PS_MV_REG = [];
    return mpop$noteNumber;
};
/** 切换外部乐器时需要更大的延时，切换内部乐器时也需要延时。 */
function mpop$ensureKeySound(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$changeInstrumentDelay, mpop$changeExternalInstrumentNoteOnDelay, mpop$changeInternalInstrumentNoteOnDelay, mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback) {
    __PS_MV_REG = [];
    return mpop$instrumentExistP(mpop$midi, mpop$instrument) ? mpop$changeInstrumentNoteOnDelay(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$changeInstrumentDelay, Math.max(mpop$changeInternalInstrumentNoteOnDelay, mpop$DEFAULTMINCHANGEINTERNALINSTRUMENTNOTEONDELAY), mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback) : mpop$changeInstrumentNoteOnDelay(mpop$midi, mpop$useXhr, mpop$soundfontUrl, mpop$instrument, mpop$changeInstrumentDelay, Math.max(mpop$changeExternalInstrumentNoteOnDelay, mpop$DEFAULTMINCHANGEINTERNALINSTRUMENTNOTEONDELAY), mpop$volumeAlist, mpop$channelId, mpop$noteNumber, mpop$velocity, mpop$noteOnDelay, mpop$noteOffDelay, mpop$callback);
};
function mpop$pressNthKey(mpop$midi, mpop$n, mpop$key) {
    mpop$noteOn(mpop$midi, 0, mpop$n, 127, 0);
    __PS_MV_REG = [];
    return mpop$setfClassName(mpop$key, mpop$appendClassName(mpop$elementClassName(mpop$key), 'press-key'));
};
function mpop$unpressNthKey(mpop$midi, mpop$n, mpop$key) {
    mpop$noteOff(mpop$midi, 0, mpop$n, 0);
    __PS_MV_REG = [];
    return mpop$setfClassName(mpop$key, mpop$removeClassName(mpop$elementClassName(mpop$key), 'press-key'));
};
function mpop$addNthKeyEventListener(mpop$midi, mpop$n, mpop$key) {
    if (mpop$phoneP()) {
        mpop$addEventListener(mpop$key, 'touchstart', function (mpop$event) {
            __PS_MV_REG = [];
            return mpop$insertTouchmove(mpop$midi, mpop$key, mpop$touchIdentifierByEvent(mpop$event));
        });
        mpop$addEventListener(mpop$key, 'touchmove', function (mpop$event) {
            __PS_MV_REG = [];
            return mpop$insertTouchmoveByStartKey(mpop$midi, mpop$event, mpop$key);
        });
        __PS_MV_REG = [];
        return mpop$addEventListener(mpop$key, 'touchend', function (mpop$event) {
            mpop$unpressNthKey(mpop$midi, mpop$n, mpop$key);
            __PS_MV_REG = [];
            return mpop$dropTouchmoveByEndEvent(mpop$midi, mpop$event);
        });
    } else if (mpop$pcP()) {
        mpop$addEventListener(mpop$key, 'mousedown', function (mpop$event) {
            mpop$pressNthKey(mpop$midi, mpop$n, mpop$key);
            __PS_MV_REG = [];
            return mpop$PRESSEDP = true;
        });
        mpop$addEventListener(mpop$key, 'mouseover', function () {
            __PS_MV_REG = [];
            return mpop$PRESSEDP ? mpop$pressNthKey(mpop$midi, mpop$n, mpop$key) : null;
        });
        mpop$addEventListener(mpop$key, 'mouseup', function () {
            mpop$unpressNthKey(mpop$midi, mpop$n, mpop$key);
            __PS_MV_REG = [];
            return mpop$PRESSEDP = null;
        });
        __PS_MV_REG = [];
        return mpop$addEventListener(mpop$key, 'mouseout', function () {
            __PS_MV_REG = [];
            return mpop$unpressNthKey(mpop$midi, mpop$n, mpop$key);
        });
    };
};
function mpop$currentPressedKey(mpop$elements) {
    __PS_MV_REG = [];
    return !mpop$clZerop(mpop$elements.length) ? mpop$clNth(mpop$elements.length - 1, mpop$elements) : null;
};
function mpop$pressKeyByElement(mpop$midi, mpop$key) {
    __PS_MV_REG = [];
    return mpop$key ? mpop$pressNthKey(mpop$midi, mpop$keyToNoteByElement(mpop$midi, mpop$key), mpop$key) : null;
};
function mpop$pressCurrentPressedKey(mpop$midi, mpop$touchInElements) {
    __PS_MV_REG = [];
    return mpop$pressKeyByElement(mpop$midi, mpop$currentPressedKey(mpop$touchInElements));
};
function mpop$pressCurrentPressedKeyByTouch(mpop$midi, mpop$touch, mpop$keyElements) {
    __PS_MV_REG = [];
    return mpop$pressCurrentPressedKey(mpop$midi, mpop$touchInElements(mpop$touch, mpop$keyElements));
};
function mpop$unpressKeyByElement(mpop$midi, mpop$key) {
    __PS_MV_REG = [];
    return mpop$key ? mpop$unpressNthKey(mpop$midi, mpop$keyToNoteByElement(mpop$midi, mpop$key), mpop$key) : null;
};
function mpop$sameKeyP(mpop$key1, mpop$key2) {
    __PS_MV_REG = [];
    return mpop$key1 && mpop$key2 && mpop$clEqual(mpop$key1, mpop$key2, 'key', mpop$innerText);
};
function mpop$touchIdentifier(mpop$touch) {
    __PS_MV_REG = [];
    return mpop$clNth('identifier', mpop$touch);
};
function mpop$sameTouchP(mpop$touch1, mpop$touch2) {
    __PS_MV_REG = [];
    return mpop$clEqual(mpop$touch1, mpop$touch2, 'key', mpop$touchIdentifier);
};
if ('undefined' === typeof mpop$TOUCHMOVE) {
    var mpop$TOUCHMOVE = [];
};
function mpop$touchIdentifierByEvent(mpop$event) {
    __PS_MV_REG = [];
    return mpop$touchIdentifier(mpop$clFirst(mpop$targetTouches(mpop$event)));
};
function mpop$selectTouchmove(mpop$touchIdentifier) {
    __PS_MV_REG = [];
    return mpop$clRemoveIfNot(function (mpop$object) {
        __PS_MV_REG = [];
        return mpop$clEqual(mpop$clNth('touch-identifier', mpop$object), mpop$touchIdentifier);
    }, mpop$TOUCHMOVE);
};
function mpop$touchExistsP(mpop$touchIdentifier) {
    __PS_MV_REG = [];
    return !mpop$clNull(mpop$selectTouchmove(mpop$touchIdentifier));
};
function mpop$lastPressedKeyP(mpop$key, mpop$keys) {
    __PS_MV_REG = [];
    return mpop$sameKeyP(mpop$clLast(mpop$keys), mpop$key);
};
function mpop$selectKeys(mpop$touchmove) {
    __PS_MV_REG = [];
    return mpop$clNth('keys', mpop$clFirst(mpop$touchmove));
};
function mpop$selectKeysByIdentifier(mpop$touchIdentifier) {
    __PS_MV_REG = [];
    return mpop$selectKeys(mpop$selectTouchmove(mpop$touchIdentifier));
};
function mpop$selectLastKey(mpop$touchIdentifier) {
    __PS_MV_REG = [];
    return mpop$clLast(mpop$selectKeysByIdentifier(mpop$touchIdentifier));
};
function mpop$dropTouchmove(mpop$touchIdentifier) {
    __PS_MV_REG = [];
    return mpop$touchExistsP(mpop$touchIdentifier) ? (mpop$TOUCHMOVE = mpop$clRemoveIf(function (mpop$object) {
        __PS_MV_REG = [];
        return mpop$clEqual(mpop$clNth('touch-identifier', mpop$object), mpop$touchIdentifier);
    }, mpop$TOUCHMOVE)) : null;
};
function mpop$dropTouchmoveByEndEvent(mpop$midi, mpop$event) {
    var touchIdentifier24 = mpop$touchIdentifier(mpop$clFirst(mpop$changedTouches(mpop$event)));
    mpop$unpressKeyByElement(mpop$midi, mpop$selectLastKey(touchIdentifier24));
    __PS_MV_REG = [];
    return mpop$dropTouchmove(touchIdentifier24);
};
function mpop$insertTouchmoveByStartKey(mpop$midi, mpop$event, mpop$key) {
    mpop$preventDefaultEvent(mpop$event);
    __PS_MV_REG = [];
    return mpop$insertTouchmove(mpop$midi, mpop$currentPressedKey(mpop$touchInElements(mpop$clFirst(mpop$targetTouches(mpop$event)), mpop$elementChildren(mpop$elementParentNode(mpop$key)))), mpop$touchIdentifierByEvent(mpop$event));
};
function mpop$insertTouchmove(mpop$midi, mpop$key, mpop$touchIdentifier) {
    if (mpop$touchExistsP(mpop$touchIdentifier)) {
        var mpop$keys = mpop$selectKeysByIdentifier(mpop$touchIdentifier);
        if (!mpop$lastPressedKeyP(mpop$key, mpop$keys)) {
            mpop$unpressKeyByElement(mpop$midi, mpop$clLast(mpop$keys));
            mpop$clPush(mpop$key, mpop$keys);
            __PS_MV_REG = [];
            return mpop$pressKeyByElement(mpop$midi, mpop$key);
        };
    } else {
        mpop$clPush({ 'touch-identifier' : mpop$touchIdentifier, 'keys' : [mpop$key] }, mpop$TOUCHMOVE);
        __PS_MV_REG = [];
        return mpop$pressKeyByElement(mpop$midi, mpop$key);
    };
};
function mpop$clickToPopupInstrumentSelectWindow() {
    mpop$popupWindow(mpop$getElementById('instrument-select-window'));
    __PS_MV_REG = [];
    return mpop$flexTextarea(mpop$getElementById('add-instruments'));
};
function mpop$selectedInstrument(mpop$element) {
    var mpop$option = mpop$clNth(mpop$selectedIndex(mpop$element), mpop$selectedOptions(mpop$element));
    __PS_MV_REG = [];
    return mpop$option ? mpop$elementValue(mpop$option) : null;
};
function mpop$soundfontUrlByUri(mpop$uri) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('(.*)/', mpop$uri);
};
function mpop$instrumentIdByUri(mpop$uri) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('[^-]*', mpop$clScanToStrings('[^/]*-(ogg|mp3).js', mpop$uri));
};
function mpop$selectedInstrumentOnprogress(mpop$button) {
    __PS_MV_REG = [];
    return mpop$actionNotAllowed(mpop$button, 'disabled');
};
function mpop$selectedInstrumentOnsuccess(mpop$button) {
    mpop$actionAllowed(mpop$button, 'disabled');
    __PS_MV_REG = [];
    return mpop$clickToCloseFullScreenPopup();
};
function mpop$ensureKeySoundQuickstart(mpop$soundfontUrl, mpop$instrument, mpop$callback) {
    __PS_MV_REG = [];
    return mpop$ensureKeySound(mpop$midi(), null, mpop$soundfontUrl, mpop$instrument, 0, 1000, 80, [0, 127], 0, 51, 127, 0, 0.75, mpop$callback);
};
function mpop$ensureKeySoundByButton(mpop$soundfontUrl, mpop$instrument, mpop$button) {
    __PS_MV_REG = [];
    return mpop$ensureKeySoundQuickstart(mpop$soundfontUrl, mpop$instrument, function () {
        __PS_MV_REG = [];
        return mpop$selectedInstrumentOnsuccess(mpop$button);
    });
};
function mpop$clickToSelectInstrument(mpop$button) {
    var mpop$option = mpop$selectedInstrument(mpop$getElementById('select-instrument'));
    mpop$selectedInstrumentOnprogress(mpop$button);
    if (mpop$validInstrumentUri(mpop$option)) {
        mpop$ensureKeySoundByButton(mpop$soundfontUrlByUri(mpop$option), mpop$instrumentIdByUri(mpop$option), mpop$button);
    } else {
        mpop$ensureKeySoundByButton(mpop$SOUNDFONTURL, mpop$option, mpop$button);
    };
    __PS_MV_REG = [];
    return mpop$localStorageSetItem('last-changed-instrument', mpop$option);
};
function mpop$instrumentNameToChineseName(mpop$instrumentName, mpop$instrumentsAlist) {
    var mpop$alist = mpop$clRemoveIf(function (mpop$instrumentAlist) {
        __PS_MV_REG = [];
        return !mpop$clEqual(mpop$clFirst(mpop$instrumentAlist), mpop$instrumentName);
    }, mpop$instrumentsAlist);
    __PS_MV_REG = [];
    return !mpop$clZerop(mpop$alist.length) ? mpop$clSecond(mpop$clFirst(mpop$alist)) : null;
};
function mpop$instrumentNameToEnglishName(mpop$instrumentValue) {
    __PS_MV_REG = [];
    return mpop$initialCapital(mpop$clJoin(mpop$clSplit('_', mpop$instrumentValue), ' '));
};
function mpop$instrumentsNames(mpop$midi) {
    var mpop$objectById = mpop$gmById(mpop$midi);
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        __PS_MV_REG = [];
        return mpop$clNth('id', mpop$clNth(mpop$key, mpop$objectById));
    }, mpop$clObjectKeys(mpop$objectById));
};
function mpop$onlineInstruments(mpop$midi) {
    var mpop$objectById = mpop$gmById(mpop$midi);
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        __PS_MV_REG = [];
        return mpop$clNth('instrument', mpop$clNth(mpop$key, mpop$objectById));
    }, mpop$clObjectKeys(mpop$objectById));
};
function mpop$offlineInstruments(mpop$midi) {
    __PS_MV_REG = [];
    return mpop$clObjectKeys(mpop$soundfont(mpop$midi));
};
function mpop$instrumentsAlist(mpop$midi) {
    var mpop$objectById = mpop$gmById(mpop$midi);
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$key) {
        var mpop$object = mpop$clNth(mpop$key, mpop$objectById);
        __PS_MV_REG = [];
        return [mpop$clNth('id', mpop$object), mpop$clNth('instrument', mpop$object)];
    }, mpop$clObjectKeys(mpop$objectById));
};
function mpop$looseFilterRegex(mpop$regex) {
    __PS_MV_REG = [];
    return mpop$clRegexReplace(mpop$regexExpression(' ', 'g'), mpop$clRegexReplace('', mpop$regex, '.*'), '.*');
};
function mpop$looseInstrumentRegexFilter(mpop$regex, mpop$instrument, mpop$key) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings(mpop$looseFilterRegex(mpop$regex), mpop$key ? mpop$key(mpop$instrument) + mpop$instrument : mpop$instrument);
};
function mpop$filterAndSortInstruments(mpop$regex, mpop$instruments) {
    var _js26 = arguments.length;
    for (var n25 = 2; n25 < _js26; n25 += 2) {
        switch (arguments[n25]) {
        case 'key':
            mpop$key = arguments[n25 + 1];
        };
    };
    var mpop$key;
    __PS_MV_REG = [];
    return mpop$clSort(mpop$clRemoveIfNot(function (mpop$instrument) {
        __PS_MV_REG = [];
        return mpop$looseInstrumentRegexFilter(mpop$regex, mpop$instrument, mpop$key) ? mpop$instrument : null;
    }, mpop$instruments));
};
function mpop$instrumentDescription(mpop$instrumentValue, mpop$instrumentsAlist) {
    if (mpop$validInstrumentUri(mpop$instrumentValue)) {
        var mpop$instrumentId = mpop$instrumentIdByUri(mpop$instrumentValue);
        __PS_MV_REG = [];
        return mpop$instrumentNameToChineseName(mpop$instrumentId, mpop$instrumentsAlist) + '（' + mpop$instrumentNameToEnglishName(mpop$instrumentId) + '）' + '［' + mpop$instrumentId + '］';
    } else {
        __PS_MV_REG = [];
        return mpop$instrumentNameToChineseName(mpop$instrumentValue, mpop$instrumentsAlist) + '（' + mpop$instrumentNameToEnglishName(mpop$instrumentValue) + '）' + '［' + mpop$instrumentValue + '］';
    };
};
function mpop$keydownToFilterInstruments(mpop$regex, mpop$selectInstrument, mpop$instruments, mpop$instrumentsAlist, mpop$maximum) {
    mpop$setfInnerHtml(mpop$selectInstrument, '');
    mpop$clMapcar(function (mpop$instrumentValue) {
        var mpop$instrument = mpop$createElement('option');
        mpop$setfInputValue(mpop$instrument, mpop$instrumentValue);
        mpop$setfInnerHtml(mpop$instrument, mpop$instrumentDescription(mpop$instrumentValue, mpop$instrumentsAlist));
        __PS_MV_REG = [];
        return mpop$appendChild(mpop$selectInstrument, mpop$instrument);
    }, mpop$filterAndSortInstruments(mpop$regex, mpop$instruments, 'key', function (mpop$instrument) {
        __PS_MV_REG = [];
        return mpop$instrumentDescription(mpop$instrument, mpop$instrumentsAlist);
    }));
    __PS_MV_REG = [];
    return mpop$setfSelectSize(mpop$selectInstrument, mpop$maximum);
};
function mpop$keydownToFilterOfflineInstruments(mpop$inputValue) {
    __PS_MV_REG = [];
    return mpop$keydownToFilterInstruments(mpop$inputValue, mpop$getElementById('select-instrument'), mpop$clConcatenateList(mpop$onlineUriP(mpop$currentPageUri()) ? mpop$instrumentsNames(mpop$midi()) : mpop$offlineInstruments(mpop$midi()), mpop$ADDEDINSTRUMENTS), mpop$INSTRUMENTSALIST, 8);
};
function mpop$toFilterOnlineInstruments(mpop$regex, mpop$selectInstrument, mpop$instrumentsIds, mpop$instrumentsAlist, mpop$maximum) {
    mpop$keydownToFilterInstruments(mpop$regex, mpop$selectInstrument, mpop$instrumentsIds, mpop$instrumentsAlist, mpop$maximum);
    __PS_MV_REG = [];
    return mpop$onchangeToUpdateDownloadInstrumentLink(mpop$selectInstrument);
};
function mpop$keydownToFilterOnlineInstruments(mpop$inputValue) {
    __PS_MV_REG = [];
    return mpop$toFilterOnlineInstruments(mpop$inputValue, mpop$getElementById('select-instrument-to-download'), mpop$instrumentsNames(mpop$midi()), mpop$INSTRUMENTSALIST, 8);
};
function mpop$onchangeToUpdateDownloadInstrumentLink(mpop$select) {
    var mpop$download = mpop$getElementById('click-to-download-instrument');
    var mpop$filename = mpop$selectedInstrument(mpop$select) + '-ogg.js';
    mpop$setAttribute(mpop$download, 'download', mpop$filename);
    __PS_MV_REG = [];
    return mpop$setAttribute(mpop$download, 'href', mpop$SOUNDFONTURL + mpop$filename);
};
function mpop$inputFiles(mpop$inputFile) {
    __PS_MV_REG = [];
    return mpop$clNth('files', mpop$inputFile);
};
function mpop$inputFilesById(mpop$id) {
    __PS_MV_REG = [];
    return mpop$inputFiles(mpop$getElementById(mpop$id));
};
function mpop$inputFilenames(mpop$inputFile) {
    var mpop$files = mpop$inputFiles(mpop$inputFile);
    var mpop$filenames = [];
    for (var mpop$i = 0; mpop$i < mpop$files.length; mpop$i += 1) {
        mpop$clPush(mpop$clNth('name', mpop$clNth(mpop$i, mpop$files)), mpop$filenames);
    };
    __PS_MV_REG = [];
    return mpop$filenames;
};
function mpop$filterFilenames(mpop$regex, mpop$filenames) {
    __PS_MV_REG = [];
    return mpop$clRemoveIfNot(function (mpop$filename) {
        __PS_MV_REG = [];
        return mpop$clScanToStrings(mpop$regex, mpop$filename);
    }, mpop$filenames);
};
function mpop$filterOggFilenames(mpop$filenames) {
    __PS_MV_REG = [];
    return mpop$filterFilenames('-ogg.js$', mpop$filenames);
};
function mpop$oggFilenameWithoutSuffix(mpop$filename) {
    __PS_MV_REG = [];
    return mpop$clFirst(mpop$clSplit('-ogg.js', mpop$filename));
};
function mpop$inputInstruments(mpop$inputValue) {
    __PS_MV_REG = [];
    return mpop$clRemoveIf(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$clZerop(mpop$i.length);
    }, mpop$clSplit('\r\n', mpop$inputValue));
};
function mpop$validInstrumentUri(mpop$uri) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('.*-(ogg|mp3).js$', mpop$uri);
};
function mpop$validInstruments(mpop$midi, mpop$inputInstruments, mpop$instruments) {
    __PS_MV_REG = [];
    return mpop$clRemoveIf(function (mpop$i) {
        __PS_MV_REG = [];
        return mpop$clFind(mpop$i, mpop$instruments) || mpop$clFind(mpop$i, mpop$offlineInstruments(mpop$midi)) || !mpop$validInstrumentUri(mpop$i) || mpop$clFind(mpop$instrumentIdByUri(mpop$i), mpop$offlineInstruments(mpop$midi));
    }, mpop$clRemoveDuplicates(mpop$inputInstruments));
};
function mpop$inputValueNullP(mpop$inputValue) {
    __PS_MV_REG = [];
    return !mpop$inputValue || mpop$clZerop(mpop$inputValue.length) || mpop$clZerop(mpop$clRegexReplace(mpop$regexExpression('(\\n|\\s)', 'g'), mpop$inputValue, '').length);
};
function mpop$unvalidJsUriP(mpop$uri) {
    __PS_MV_REG = [];
    return !mpop$clScanToStrings('\\.js$', mpop$uri);
};
function mpop$instrumentUserJsP(mpop$uri) {
    __PS_MV_REG = [];
    return mpop$clScanToStrings('\\.user\\.js$', mpop$uri);
};
function mpop$inputInstrumentsClassifier(mpop$inputInstruments, mpop$instrumentsIds) {
    var mpop$unvalidUris = [];
    var mpop$validInstruments = [];
    var mpop$instrumentUserJss = [];
    mpop$clMapcar(function (mpop$i) {
        if (mpop$clFind(mpop$i, mpop$instrumentsIds)) {
            __PS_MV_REG = [];
            return mpop$clPush(mpop$i, mpop$validInstruments);
        } else if (mpop$unvalidJsUriP(mpop$i)) {
            __PS_MV_REG = [];
            return mpop$clPush(mpop$i, mpop$unvalidUris);
        } else if (mpop$validInstrumentUri(mpop$i)) {
            __PS_MV_REG = [];
            return mpop$clPush(mpop$i, mpop$validInstruments);
        } else if (mpop$instrumentUserJsP(mpop$i)) {
            __PS_MV_REG = [];
            return mpop$clPush(mpop$i, mpop$instrumentUserJss);
        };
    }, mpop$inputInstruments);
    __PS_MV_REG = [];
    return { 'user-jss' : mpop$instrumentUserJss,
             'instruments' : mpop$validInstruments,
             'unvalid' : mpop$unvalidUris
           };
};
function mpop$concatenateInstruments(mpop$midi, mpop$inputValue, mpop$instruments) {
    if (!mpop$inputValueNullP(mpop$inputValue)) {
        var inputInstruments27 = mpop$inputInstruments(mpop$inputValue);
        var mpop$classifier = mpop$inputInstrumentsClassifier(inputInstruments27, mpop$instrumentsNames(mpop$midi));
        __PS_MV_REG = [];
        return mpop$clConcatenateLists(mpop$instruments, mpop$validInstruments(mpop$midi, inputInstruments27, mpop$instruments), mpop$loadInstrumentUserJs(mpop$clFirst(mpop$clNth('user-jss', mpop$classifier))));
    };
};
function mpop$addInstruments(mpop$midi, mpop$inputValue) {
    mpop$ADDEDINSTRUMENTS = mpop$clRemoveDuplicates(mpop$concatenateInstruments(mpop$midi, mpop$inputValue, mpop$ADDEDINSTRUMENTS));
    mpop$localStorageSetItem('added-instruments', mpop$clJoin(mpop$ADDEDINSTRUMENTS, '\r\n'));
    __PS_MV_REG = [];
    return mpop$keydownToFilterOfflineInstruments('.*');
};
function mpop$loadInstrumentUserJs(mpop$filespec) {
    if (mpop$filespec) {
        mpop$clFormat('loading %s', mpop$filespec);
        mpop$localStorageSetItem('soundfont-user-js', mpop$filespec);
        mpop$loadJavascriptFile(mpop$filespec, mpop$clFirst(mpop$getElementsByTagName('head')), 'javascript:' + 'mpop$loadInstrumentUserJsOnload()');
    };
    __PS_MV_REG = [];
    return mpop$INSTRUMENTSINUSERJS;
};
function mpop$loadInstrumentUserJsOnload() {
    mpop$clFormat('loaded success %s', mpop$clString(mpop$INSTRUMENTSINUSERJS));
    mpop$addInstruments(mpop$midi(), '.');
    __PS_MV_REG = [];
    return mpop$localStorageGetItem('last-changed-instrument') ? mpop$changeInstrument(mpop$midi(), null, mpop$soundfontUrlByUri(mpop$clFirst(mpop$INSTRUMENTSINUSERJS)), mpop$localStorageGetItem('last-changed-instrument'), 0, 0, function () {
        __PS_MV_REG = [];
        return mpop$keydownToFilterOfflineInstruments('.*');
    }) : null;
};
function mpop$clickToAddInstruments() {
    var mpop$input = mpop$getElementById('add-instruments');
    var mpop$inputValue = mpop$elementValue(mpop$input);
    if (!mpop$inputValueNullP(mpop$inputValue)) {
        mpop$addInstruments(mpop$midi(), mpop$inputValue);
        mpop$setfValue(mpop$input, '');
        __PS_MV_REG = [];
        return mpop$flexTextarea(mpop$input);
    };
};
function mpop$loadInstrumentsFiles(mpop$instrumentsFiles) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$instrumentFile) {
        __PS_MV_REG = [];
        return mpop$loadJavascriptFile(mpop$instrumentFile, mpop$clFirst(mpop$getElementsByTagName('head')), 'javascript:' + 'mpop$clFormat(\"loaded\")');
    }, mpop$instrumentsFiles);
};
function mpop$clickToResetInstrumentsList() {
    mpop$localStorageRemoveItem('added-instruments');
    mpop$localStorageRemoveItem('soundfont-user-js');
    mpop$localStorageRemoveItem('last-changed-instrument');
    mpop$localStorageSetItem('reset-instruments-list-p', true);
    __PS_MV_REG = [];
    return mpop$f5();
};
function mpop$concatenateSoundfonts(mpop$midi, mpop$soundfont1, mpop$soundfont2) {
    __PS_MV_REG = [];
    return mpop$clConcatenateList(mpop$soundfont1, mpop$validInstruments(mpop$midi, mpop$soundfont2, mpop$soundfont1));
};
function mpop$getOnlineInstrumentsIds(mpop$soundfontJs) {
    __PS_MV_REG = [];
    return mpop$loadJavascriptFile(mpop$soundfontJs, mpop$clFirst(mpop$getElementsByTagName('head')), function () {
        __PS_MV_REG = [];
        return mpop$concatenateSoundfonts(mpop$midi, mpop$ONLINESOUNDFONT, mpop$soundfontJs);
    });
};
function mpop$loadSoundfontConfigure(mpop$configureJs) {
    __PS_MV_REG = [];
    return mpop$loadJavascriptFile(mpop$configureJs, mpop$clFirst(mpop$getElementsByTagName('head')), mpop$concatenateSoundfonts(mpop$midi, mpop$ONLINESOUNDFONT, mpop$soundfontJs));
};
function mpop$clickToGetInstrumentsIds(mpop$inputSoundfontJs) {
    __PS_MV_REG = [];
    return mpop$toFilterOnlineInstruments('.*', mpop$getElementById('select-instrument-to-download'), mpop$getOnlineInstrumentsIds(mpop$inputSoundfontJs), mpop$INSTRUMENTSALIST);
};
function mpop$lastChangedInstrumentIndex(mpop$options, mpop$lastChangedInstrument) {
    __PS_MV_REG = [];
    return mpop$clIndexOf(mpop$clMapcar(mpop$elementValue, mpop$options), mpop$lastChangedInstrument);
};
function mpop$setfLastChangedInstrumentIndex(mpop$select, mpop$lastChangedInstrument) {
    __PS_MV_REG = [];
    return mpop$setfSelectedIndex(mpop$select, mpop$lastChangedInstrumentIndex(mpop$selectedOptions(mpop$select), mpop$lastChangedInstrument));
};
function mpop$onChangeToAddInstrumentsByFile(mpop$element) {
    var mpop$fileReader = mpop$newFileReader();
    mpop$fileReaderReadAsText(mpop$fileReader, mpop$clFirst(mpop$files(mpop$element)));
    __PS_MV_REG = [];
    return mpop$setfFileReaderOnloadend(mpop$fileReader, function () {
        __PS_MV_REG = [];
        return !mpop$inputValueNullP(mpop$fileReaderResult(mpop$fileReader)) ? mpop$addInstruments(mpop$midi(), mpop$fileReaderResult(mpop$fileReader)) : null;
    });
};
function mpop$scrollKeyLeft(mpop$n, mpop$keys, mpop$whiteKeysCount, mpop$keyBorderWidth) {
    __PS_MV_REG = [];
    return mpop$setfScrollLeft(mpop$keys, (mpop$elementScrollLeft(mpop$keys) - (mpop$elementScrollWidth(mpop$keys) / mpop$whiteKeysCount) * mpop$n) + (function () {
        switch (mpop$n) {
        case -1:
            return mpop$keyBorderWidth * (1 / 8);
        default:
            return 0;
        };
    })());
};
function mpop$clickToScrollKeyLeft(mpop$n, mpop$element) {
    __PS_MV_REG = [];
    return mpop$scrollKeyLeft(-mpop$n, mpop$nthParentNode(mpop$element, 2), 52, mpop$KEYBORDERWIDTH);
};
function mpop$keysColumns(mpop$deviceWidth, mpop$keyMinWidth) {
    return mpop$deviceWidth / mpop$keyMinWidth;
};
function mpop$clickToIncfKeysColumns(mpop$n) {
    var mpop$whiteKeys = mpop$getElementsByClassName('white-key');
    var mpop$blackKeys = mpop$getElementsByClassName('black-key');
    __PS_MV_REG = [];
    return mpop$drawKeyboard(mpop$whiteKeys, mpop$blackKeys, mpop$DEVICEWIDTH, mpop$KEYSCOLUMNS += mpop$n, mpop$keyHeight(mpop$keysHeight(mpop$DEVICEHEIGHT, 'extended-operation-bar', mpop$OPERATIONBARBORDERWIDTH), mpop$KEYSROWS));
};
function mpop$adjustThePositionAndNumberOfButtonsInnerHtml() {
    return '\n<div class=\'adjust-key\'>\n  <div class=\'key-scroll button scroll-left\' onclick=\'mpop$clickToScrollKeyLeft(-1, this);\'><\n  </div>\n  <div class=\'key-scroll button scroll-right\' onclick=\'mpop$clickToScrollKeyLeft(1, this);\'>>\n  </div>\n</div>\n<div class=\'adjust-key\'>\n  <div class=\'key-scroll button scroll-left\' onclick=\'mpop$clickToScrollKeyLeft(-7, this);\'><<\n  </div>\n  <div class=\'key-scroll button scroll-right\' onclick=\'mpop$clickToScrollKeyLeft(7, this);\'>>>\n  </div>\n</div>\n<div class=\'adjust-key\'>\n  <div class=\'key-scroll button scroll-left\' onclick=\'mpop$clickToScrollKeyLeft(-88, this);\'><<<\n  </div>\n  <div class=\'key-scroll button scroll-right\' onclick=\'mpop$clickToScrollKeyLeft(88, this);\'>>>>\n  </div>\n</div>\n<div class=\'adjust-key\'>\n  <div class=\'key-scroll button scroll-left\' onclick=\'mpop$clickToIncfKeysColumns(-1);\'>-\n  </div>\n  <div class=\'key-scroll button scroll-right\' onclick=\'mpop$clickToIncfKeysColumns(1);\'>+\n  </div>\n</div>';
};
function mpop$adjustThePositionAndNumberOfButtons(mpop$keyss, mpop$keyAdjustmentInnerHtml) {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$keys) {
        var mpop$keyAdjustment = mpop$createElement('div');
        mpop$setfClassName(mpop$keyAdjustment, 'key-adjustment');
        mpop$setfInnerHtml(mpop$keyAdjustment, mpop$keyAdjustmentInnerHtml);
        __PS_MV_REG = [];
        return mpop$appendChild(mpop$keys, mpop$keyAdjustment);
    }, mpop$keyss);
};
function mpop$setfKeyPositionWhenProgramInitialized(mpop$keysElements, mpop$keyBorderWidth) {
    var _js29 = mpop$keysElements.length;
    var FIRST30 = true;
    for (var _js28 = 0; _js28 < _js29; _js28 += 1) {
        var mpop$keys = mpop$keysElements[_js28];
        var mpop$i = FIRST30 ? 0 : mpop$i + 1;
        if (mpop$i > null) {
            break;
        };
        mpop$setfScrollLeft(mpop$keys, (mpop$elementScrollWidth(mpop$keys) / 52) * (30 - 7 * mpop$i) + mpop$keyBorderWidth * ((mpop$clZerop(mpop$i) ? 3 : 2) / 8));
        FIRST30 = null;
    };
};
function mpop$clickToCloseFullScreenPopup() {
    mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$setfAppendedClassName(mpop$element, 'hidden');
    }, mpop$getElementsByClassName('popup', mpop$getElementById('full-screen-popups')));
    __PS_MV_REG = [];
    return mpop$setfAppendedClassName(mpop$getElementById('full-screen-popups'), 'hidden');
};
function mpop$clickToCloseFloatingPopups() {
    mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$setfAppendedClassName(mpop$element, 'hidden');
    }, mpop$getElementsByClassName('popup', mpop$getElementById('floating-popups')));
    __PS_MV_REG = [];
    return mpop$setfAppendedClassName(mpop$getElementById('floating-popups'), 'hidden');
};
function mpop$clickClosePopups() {
    __PS_MV_REG = [];
    return mpop$clMapcar(function (mpop$element) {
        __PS_MV_REG = [];
        return mpop$setfAppendedClassName(mpop$element, 'hidden');
    }, mpop$getElementsByClassName('popup'));
};
function mpop$popupWindow(mpop$element) {
    mpop$setfRemovedClassName(mpop$getElementById('full-screen-popups'), 'hidden');
    __PS_MV_REG = [];
    return mpop$setfRemovedClassName(mpop$element, 'hidden');
};
var mpop$DEVICEWIDTH;
var mpop$DEVICEHEIGHT;
var mpop$KEYBORDERWIDTH;
var mpop$KEYSROWS;
var mpop$KEYSCOLUMNS;
var mpop$KEYSCOUNT;
var mpop$OPERATIONBARBORDERWIDTH;
if ('undefined' === typeof mpop$DEFAULTMINCHANGEINTERNALINSTRUMENTNOTEONDELAY) {
    var mpop$DEFAULTMINCHANGEINTERNALINSTRUMENTNOTEONDELAY = 30;
};
if ('undefined' === typeof mpop$DEFAULTMINCHANGEEXTERNALINSTRUMENTNOTEONDELAY) {
    var mpop$DEFAULTMINCHANGEEXTERNALINSTRUMENTNOTEONDELAY = 650;
};
var mpop$SOUNDFONTURL;
if ('undefined' === typeof mpop$INSTRUMENTSINUSERJS) {
    var mpop$INSTRUMENTSINUSERJS = [];
};
if ('undefined' === typeof mpop$ONLINESOUNDFONT) {
    var mpop$ONLINESOUNDFONT = [];
};
if ('undefined' === typeof mpop$ADDEDINSTRUMENTS) {
    var mpop$ADDEDINSTRUMENTS = [];
};
if ('undefined' === typeof mpop$INSTRUMENTSALIST) {
    var mpop$INSTRUMENTSALIST = [];
};
if ('undefined' === typeof mpop$TESTEXPRESSIONSRESULT) {
    var mpop$TESTEXPRESSIONSRESULT = [];
};
if ('undefined' === typeof mpop$PLAYER) {
    var mpop$PLAYER = mpop$player(mpop$midi());
};
if ('undefined' === typeof mpop$PLAYLIST) {
    var mpop$PLAYLIST = [];
};
if ('undefined' === typeof mpop$PRESSEDP) {
    var mpop$PRESSEDP = null;
};;
/*
Copyright (c) 2018 SunDawning <dpmeichen@gmail.com> https://github.com/SunDawning
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies,
either expressed or implied, of any organization or project.

*/