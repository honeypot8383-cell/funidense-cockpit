// ロックブーケのセリフ（あとでふにが増やせる）
const bouquetLines = [
    "私はロックブーケよ！",
    "……ふふ、ふに。そんなに見つめてどうしたの？",
    "青い炎が揺れている……あなたの心も、揺れているのかしら？",
    "ふに、今日はどこへ逃げてもムダよ？　私が見つけるもの。"
];

let current = 0;
function rotateBouquetLines() {
    current = (current + 1) % bouquetLines.length;
    document.getElementById("bouquet-line").textContent = bouquetLines[current];
}
setInterval(rotateBouquetLines, 5000); // 5秒ごとローテーション

// チャット風入力（おまけ）
document.getElementById("send").addEventListener("click", () => {
    const val = document.getElementById("input").value.trim();
    if (!val) return;

    const area = document.getElementById("bouquet-line");
    area.textContent = `ふに「${val}」`;
    document.getElementById("input").value = "";
});
