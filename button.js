document.addEventListener("DOMContentLoaded", function () {
    function setActiveTab(tabId) {
        console.log("切換到:", tabId);

        // 移除所有 `tab-content` 的 active 類別
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // 移除所有按鈕的 active 樣式
        document.querySelectorAll('nav button').forEach(btn => {
            btn.classList.remove('active');
        });

        // 設定新的 active 樣式
        document.getElementById(tabId).classList.add('active');
        document.getElementById(`btn-${tabId.replace("-tab", "")}`).classList.add('active');
    }

    // 綁定按鈕點擊事件
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.id.replace("btn-", "") + "-tab";
            setActiveTab(tabId);
        });
    });

    // 預設顯示 weather-tab
    setActiveTab("weather-tab");

    // 綁定 "獲取穿搭推薦" 按鈕點擊事件
    document.getElementById("btn-get-recommendation").addEventListener('click', function () {
        // 這裡可以換成你需要轉到的頁面 URL
        window.location.href = "newpage.html";  // 改成你要轉移到的頁面地址
    });
});
