// ロックブーケ セリフ自動ローテーション
const bouquetLines = [
    "私はロックブーケよ！……ふに、ちゃんと見てなさい？",
    "あら……来てくれたの？ふふ、嬉しいわ。",
    "ねえふに。今日はどうするの？私と遊ぶ？",
    "そんなに見つめると……魅了しちゃうわよ？",
    "魔力の調整？ いいわ、手伝ってあげる。",
    "ふに……あなた、ちょっと可愛いわね？"
];

let index = 0;
const talkBox = document.getElementById("bouquet-talk");

function rotateBouquetTalk() {
    talkBox.textContent = bouquetLines[index];
    index = (index + 1) % bouquetLines.length;
}

setInterval(rotateBouquetTalk, 4000); // 4秒ごとに更新


// おしらせ ローテーション（任意）
const notices = [
    "杏「今日の魔力、いい感じだよふに♪」",
    "風子「ヒトデを拾ってきたよー！」",
    "ことみ「おせんべい……補充しておいたよ……」",
    "ロックブーケ「ふに、夕飯はどうするの？」"
];

const noticeArea = document.getElementById("notice-area");
let nIndex = 0;

function rotateNotice() {
    noticeArea.textContent = notices[nIndex];
    nIndex = (nIndex + 1) % notices.length;
}

setInterval(rotateNotice, 7000); // 7秒ごと
