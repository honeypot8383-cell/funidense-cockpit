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

//--------------------------------------------------
// ふにの発言欄 → ロックブーケ応答
//--------------------------------------------------

const funiInput = document.getElementById("funiInput");
const sendBtn = document.getElementById("sendBtn");
const chatLog = document.getElementById("chatLog");

// ロックブーケの軽い返事パターン
const bouquetReplies = [
    "ふに……かわいいこと言うじゃない。",
    "ふふっ、もっと話して？",
    "それで……ふにはどうしたいの？",
    "あなたの声、好きよ？",
    "そんなふうに言われたら……魅了しちゃうわよ？",
    "安心して、ずっとそばにいるわ。",
];

function bouquetReply() {
    const idx = Math.floor(Math.random() * bouquetReplies.length);
    return bouquetReplies[idx];
}

// 送信処理
function sendMessage() {
    const text = funiInput.value.trim();
    if (!text) return;

    // ふにの発言を追加
    const funiMsg = document.createElement("div");
    funiMsg.className = "funi";
    funiMsg.textContent = "ふに：「" + text + "」";
    chatLog.appendChild(funiMsg);

    // ロックブーケの返事
    setTimeout(() => {
        const bou = document.createElement("div");
        bou.className = "bouquet";
        bou.textContent = "ロックブーケ：「" + bouquetReply() + "」";
        chatLog.appendChild(bou);

        chatLog.scrollTop = chatLog.scrollHeight;
    }, 600);

    funiInput.value = "";
}

// ボタン
sendBtn.addEventListener("click", sendMessage);

// Enterキー
funiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

