# 號碼機

這是一個實作號碼機功能的專案，用 Svelte 搭配 SCSS 寫成，
可至 [Github](https://github.com/ro1963855/numbering-machine) 觀看詳細程式碼

## 使用教學
### 1. 安裝 Nodejs
請先確保已經安裝好 [Node.js](https://nodejs.org)

### 2. 解壓縮 numbering-machine.zip

```bash
unzip numbering-machine.zip
```

### 3. 安裝相關 library

```bash
cd numbering-machine
npm install
```

### 4. 調整櫃檯人數

請到 `src/main.js` 路徑底下，修改 `countersName` 陣列的內容來增減數量(櫃員的處理速度將由接到任務當下隨機設定為 0.5 秒至 1.5 秒)


```js
countersName: ['Amy', 'Bob', 'Cory', 'Dora', 'NEW']
```

### 執行專案

```bash
npm run dev
```

若 `5000` port 尚未佔用，可透過 [localhost:5000](http://localhost:5000) 來開啟頁面，詳細狀況可觀看當下 Bash 資訊

### 專案介紹

此網頁模擬銀行 `號碼機` 的功能，使用者可以透過按鈕來抽取 `號碼牌`，
並等待行員有空時，就會叫號處理，下列為頁面上的名詞解釋:

> Waiting: 代表尚未處理的人數   
> Counter: 櫃檯人員名稱   
> Processing: 櫃檯人員狀態，`Idle` 代表閒置，`號碼` 則代表正在處理客戶的號碼牌數字     
> Processed: 已處理過客戶 `號碼` 的紀錄，會用 `逗號` 隔開，尚未處理任何客戶時為空   
> Next `號碼`: 按鈕後的數字代表即將抽到的 `號碼牌`