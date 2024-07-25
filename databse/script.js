// 一度Sign Inのボタンが押されたら次回以降、emailとpasswordが自動入力される機能

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');

    // ページ読み込み時にlocalStorageからデータを取得して自動入力
    if (localStorage.getItem('email')) {
        emailInput.value = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
        passwordInput.value = localStorage.getItem('password');
    }

    // フォーム送信時にemailとpasswordをlocalStorageに保存
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルト動作を防ぐ
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        // ここで実際のログイン処理を行う
        alert('ログイン情報が保存されました');
    });
});