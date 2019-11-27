"use strict";
mpop$drawProgramHtmlStructure();
mpop$OPERATIONBARBORDERWIDTH = 1;
mpop$setfStyleBorderWidth(mpop$getElementById('extended-operation-bar'), mpop$px(mpop$OPERATIONBARBORDERWIDTH));
mpop$DEVICEWIDTH = Math.max(mpop$windowWidth(), mpop$windowHeight());
mpop$DEVICEHEIGHT = Math.min(mpop$windowWidth(), mpop$windowHeight());
mpop$KEYBORDERWIDTH = mpop$DEVICEWIDTH * (8 / 640);
mpop$KEYSROWS = Math.floor(Math.min(mpop$windowWidth(), mpop$windowHeight()) / (360 / 2));
mpop$KEYSCOLUMNS = 7 * (mpop$DEVICEWIDTH / 640);
mpop$KEYSCOUNT = 88;
mpop$setfKeyssStyle(mpop$getElementById('keyss'), mpop$KEYSROWS);
mpop$setfKeysStyle(mpop$getElementsByClassName('keys'), mpop$midi(), mpop$KEYSCOUNT, mpop$keyHeight(mpop$keysHeight(mpop$DEVICEHEIGHT, 'extended-operation-bar', mpop$OPERATIONBARBORDERWIDTH), mpop$KEYSROWS), mpop$KEYSROWS);
mpop$setfKeyStyle(mpop$getElementsByClassName('key'), mpop$KEYBORDERWIDTH);
mpop$setfWhiteKeyStyle(mpop$getElementsByClassName('white-key'), mpop$KEYBORDERWIDTH, mpop$DEVICEWIDTH, mpop$KEYSCOLUMNS);
mpop$setfBlackKeyStyle(mpop$getElementsByClassName('black-key'), mpop$whiteKeyWidth(mpop$DEVICEWIDTH, mpop$KEYSCOLUMNS, mpop$KEYBORDERWIDTH), mpop$keyHeight(mpop$keysHeight(mpop$DEVICEHEIGHT, 'extended-operation-bar', mpop$OPERATIONBARBORDERWIDTH), mpop$KEYSROWS), mpop$KEYBORDERWIDTH);
mpop$setfKeyLabelStyle(mpop$getElementsByClassName('key-label'), mpop$keyHeight(mpop$keysHeight(mpop$DEVICEHEIGHT, 'extended-operation-bar', mpop$OPERATIONBARBORDERWIDTH), mpop$KEYSROWS));
mpop$adjustThePositionAndNumberOfButtons(mpop$getElementsByClassName('keys'), mpop$adjustThePositionAndNumberOfButtonsInnerHtml());
mpop$setfKeyPositionWhenProgramInitialized(mpop$getElementsByClassName('keys'), mpop$KEYBORDERWIDTH);
mpop$INSTRUMENTSALIST = [['accordion', '手风琴', 'Accordion'], ['acoustic_bass', '原声贝司（拨奏低音提琴）', 'Acoustic Bass'], ['acoustic_grand_piano', '大钢琴', 'Acoustic Grand Piano'], ['acoustic_guitar_nylon', '原声吉他（尼龙）', 'Acoustic Guitar (nylon)'], ['acoustic_guitar_steel', '原声吉他（钢）', 'Acoustic Guitar (steel)'], ['agogo', '拉丁打铃', 'Agogo'], ['alto_sax', '中音萨克斯', 'Alto Sax'], ['applause', '欢呼鼓掌声', 'Applause'], ['bagpipe', '风笛', 'Bagpipe'], ['banjo', '班卓', 'Banjo'], ['baritone_sax', '上低音萨克斯', 'Baritone Sax'], ['bassoon', '大管', 'Bassoon'], ['bird_tweet', '鸟鸣声', 'Bird Tweet'], ['blown_bottle', '吹瓶', 'Blown Bottle'], ['brass_section', '铜管组', 'Brass Section'], ['breath_noise', '呼吸声', 'Breath Noise'], ['bright_acoustic_piano', '亮音立式钢琴', 'Bright Acoustic Piano'], ['celesta', '钢片琴', 'Celesta'], ['cello', '大提琴', 'Cello'], ['choir_aahs', '合唱＂啊＂音', 'Choir Aahs'], ['church_organ', '管风琴', 'Church Organ'], ['clarinet', '单簧管', 'Clarinet'], ['clavinet', '击弦古钢琴', 'Clavinet'], ['contrabass', '低音提琴', 'Contrabass'], ['distortion_guitar', '失真（破音）音效电吉他', 'Distortion Guitar'], ['drawbar_organ', '拉杆式管风琴', 'Drawbar Organ'], ['dulcimer', '扬琴', 'Dulcimer'], ['electric_bass_finger', '电贝司（手指）', 'Electric Bass (finger)'], ['electric_bass_pick', '电贝司（选）', 'Electric Bass (pick)'], ['electric_grand_piano', '电声大钢琴', 'Electric Grand Piano'], ['electric_guitar_clean', '电吉他（清洁）', 'Electric Guitar (clean)'], ['electric_guitar_jazz', '电吉他（爵士乐）', 'Electric Guitar (jazz)'], ['electric_guitar_muted', '电吉他（静音）', 'Electric Guitar (muted)'], ['electric_piano_1', '电钢琴1', 'Electric Piano 1'], ['electric_piano_2', '电钢琴2', 'Electric Piano 2'], ['english_horn', '英国管', 'English Horn'], ['fiddle', '类提琴乐器', 'Fiddle'], ['flute', '长笛', 'Flute'], ['french_horn', '圆号', 'French Horn'], ['fretless_bass', '无品贝司', 'Fretless Bass'], ['fx_1_rain', 'FX 1（雨）', 'FX 1 (rain)'], ['fx_2_soundtrack', 'FX 2（电影配乐）', 'FX 2 (soundtrack)'], ['fx_3_crystal', 'FX 3（水晶）', 'FX 3 (crystal)'], ['fx_4_atmosphere', 'FX 4（大气）', 'FX 4 (atmosphere)'], ['fx_5_brightness', 'FX 5（亮度）', 'FX 5 (brightness)'], ['fx_6_goblins', 'FX 6（地精）', 'FX 6 (goblins)'], ['fx_7_echoes', 'FX 7（回声）', 'FX 7 (echoes)'], ['fx_8_scifi', 'FX 8（科幻）', 'FX 8 (sci-fi)'], ['glockenspiel', '钟琴', 'Glockenspiel'], ['guitar_fret_noise', '磨弦声', 'Guitar Fret Noise'], ['guitar_harmonics', '吉他泛音', 'Guitar Harmonics'], ['gunshot', '枪声', 'Gunshot'], ['harmonica', '口琴', 'Harmonica'], ['harpsichord', '拨弦古钢琴', 'Harpsichord'], ['helicopter', '直升机声', 'Helicopter'], ['honkytonk_piano', 'Honky-tonk钢琴', 'Honky-tonk Piano'], ['kalimba', '卡林巴', 'Kalimba'], ['koto', '日本十三弦筝', 'Koto'], ['lead_1_square', '铅1（方形）', 'Lead 1 (square)'], ['lead_2_sawtooth', '铅2（锯齿）', 'Lead 2 (sawtooth)'], ['lead_3_calliope', '铅3（calliope）', 'Lead 3 (calliope)'], ['lead_4_chiff', '铅4（chiff）', 'Lead 4 (chiff)'], ['lead_5_charang', '铅5（charang）', 'Lead 5 (charang)'], ['lead_6_voice', '铅6（声音）', 'Lead 6 (voice)'], ['lead_7_fifths', '铅7（五分之一）', 'Lead 7 (fifths)'], ['lead_8_bass__lead', '铅8（低音+铅）', 'Lead 8 (bass + lead)'], ['marimba', '马林巴', 'Marimba'], ['melodic_tom', '嗵鼓', 'Melodic Tom'], ['music_box', '八音盒', 'Music Box'], ['muted_trumpet', '弱音小号', 'Muted Trumpet'], ['oboe', '双簧管', 'Oboe'], ['ocarina', '洋埙', 'Ocarina'], ['orchestra_hit', '管弦乐队重音齐奏', 'Orchestra Hit'], ['orchestral_harp', '竖琴', 'Orchestral Harp'], ['overdriven_guitar', '驱动（失真）音效电吉他', 'Overdriven Guitar'], ['pad_1_new_age', '垫1（新时代）', 'Pad 1 (new age)'], ['pad_2_warm', '垫2（温暖）', 'Pad 2 (warm)'], ['pad_3_polysynth', '垫3（polysynth）', 'Pad 3 (polysynth)'], ['pad_4_choir', '垫4（合唱团）', 'Pad 4 (choir)'], ['pad_5_bowed', '垫5（鞠躬）', 'Pad 5 (bowed)'], ['pad_6_metallic', '垫6（金属）', 'Pad 6 (metallic)'], ['pad_7_halo', '垫7（晕）', 'Pad 7 (halo)'], ['pad_8_sweep', '垫8（扫描）', 'Pad 8 (sweep)'], ['pan_flute', '排箫／排笛', 'Pan Flute'], ['percussion', '（管弦乐团的）打击乐器组', 'Percussion'], ['percussive_organ', '打击型风琴', 'Percussive Organ'], ['piccolo', '短笛', 'Piccolo'], ['pizzicato_strings', '弦乐拨奏', 'Pizzicato Strings'], ['recorder', '竖笛', 'Recorder'], ['reed_organ', '簧风琴', 'Reed Organ'], ['reverse_cymbal', '镲波形反转', 'Reverse Cymbal'], ['rock_organ', '摇滚风琴', 'Rock Organ'], ['seashore', '海浪声', 'Seashore'], ['shakuhachi', '尺八', 'Shakuhachi'], ['shamisen', '三味线', 'Shamisen'], ['shanai', '唢呐', 'Shanai'], ['sitar', '印度西塔琴', 'Sitar'], ['slap_bass_1', '低音贝司1', 'Slap Bass 1'], ['slap_bass_2', '低音贝司2', 'Slap Bass 2'], ['soprano_sax', '高音萨克斯', 'Soprano Sax'], ['steel_drums', '钢鼓', 'Steel Drums'], ['string_ensemble_1', '弦乐合奏1', 'String Ensemble 1'], ['string_ensemble_2', '弦乐合奏2', 'String Ensemble 2'], ['synth_bass_1', '合成低音1', 'Synth Bass 1'], ['synth_bass_2', '合成低音2', 'Synth Bass 2'], ['synth_brass_1', '合成器黄铜1', 'Synth Brass 1'], ['synth_brass_2', 'Synth Brass 2', 'Synth Brass 2'], ['synth_choir', '合成唱诗班', 'Synth Choir'], ['synth_drum', '合成鼓', 'Synth Drum'], ['synth_strings_1', '合成弦1', 'Synth Strings 1'], ['synth_strings_2', 'Synth Strings 2', 'Synth Strings 2'], ['taiko_drum', '太鼓', 'Taiko Drum'], ['tango_accordion', '探戈手风琴', 'Tango Accordion'], ['telephone_ring', '电话铃声', 'Telephone Ring'], ['tenor_sax', '次中音萨克斯', 'Tenor Sax'], ['timpani', '定音鼓', 'Timpani'], ['tinkle_bell', '铃铛', 'Tinkle Bell'], ['tremolo_strings', '弦乐震音', 'Tremolo Strings'], ['trombone', '长号', 'Trombone'], ['trumpet', '小号', 'Trumpet'], ['tuba', '大号', 'Tuba'], ['tubular_bells', '管钟', 'Tubular Bells'], ['vibraphone', '电颤琴', 'Vibraphone'], ['viola', '中提琴', 'Viola'], ['violin', '小提琴', 'Violin'], ['voice_oohs', '人声＂嘟＂音', 'Voice Oohs'], ['whistle', '哨', 'Whistle'], ['woodblock', '木块', 'Woodblock'], ['xylophone', '木琴', 'Xylophone']];
if (mpop$localStorageGetItem('reset-instruments-list-p')) {
    mpop$localStorageRemoveItem('reset-instruments-list-p');
    mpop$clickToPopupInstrumentSelectWindow();
};
mpop$SOUNDFONTURL = 'https://sundawning.github.io/midi-js-soundfonts/MusyngKite/';
if (mpop$localStorageGetItem('added-instruments')) {
    mpop$addInstruments(mpop$midi(), mpop$localStorageGetItem('added-instruments'));
};
(function () {
    var mpop$option = mpop$localStorageGetItem('last-changed-instrument');
    if (mpop$localStorageGetItem('soundfont-user-js')) {
        __PS_MV_REG = [];
        return mpop$addInstruments(mpop$midi(), mpop$localStorageGetItem('soundfont-user-js'));
    } else if (mpop$option && mpop$validInstrumentUri(mpop$option)) {
        __PS_MV_REG = [];
        return mpop$ensureKeySoundQuickstart(mpop$soundfontUrlByUri(mpop$option), mpop$instrumentIdByUri(mpop$option), function () {
            mpop$keydownToFilterOfflineInstruments('.*');
            __PS_MV_REG = [];
            return mpop$setfLastChangedInstrumentIndex(mpop$getElementById('select-instrument'), mpop$option);
        });
    } else {
        __PS_MV_REG = [];
        return mpop$ensureKeySoundQuickstart('./', mpop$option || 'glockenspiel', function () {
            __PS_MV_REG = [];
            return mpop$keydownToFilterOfflineInstruments('.*');
        });
    };
})();
mpop$keydownToFilterOnlineInstruments('.*');
mpop$clickToToggleOverflow(mpop$getElementById('toggle-overflow'));
mpop$clickClosePopups();
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
