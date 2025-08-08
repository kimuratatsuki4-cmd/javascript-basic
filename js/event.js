// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('クリックされました！');
});

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'これはリスト要素です';
    parentList.appendChild(li);
});

// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');
// area-btnがクリックされたときの処理を追加
areaBtn.addEventListener('click', () => {
    const area = document.forms.areaForm.area.value;
    console.log(areaBtn);
});

// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');
// os-btnがクリックされたときの処理を追加
osBtn.addEventListener('click', () => {
    const osList = document.forms.osForm.os;
    for (let i = 0; i < osList.length; i++) {
        if (osList[i].checked) {
            console.log(osList[i].value);
        }
    }
});
