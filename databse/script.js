// 一度Sign Inのボタンが押されたら次回以降、emailとpasswordが自動入力される機能

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');

    // loginFormが存在するか確認
    if (loginForm) {
        // ページ読み込み時にlocalStorageからデータを取得して自動入力
        emailInput.value = localStorage.getItem('email') || '';
        passwordInput.value = localStorage.getItem('password') || '';

        // フォーム送信時にemailとpasswordをlocalStorageに保存
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // フォームのデフォルト動作を防ぐ
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('password', passwordInput.value);
            // ここで実際のログイン処理を行う
            alert('ログイン情報が保存されました');
        }); // ここで閉じる
    } else {
        console.error('loginFormが見つかりません');
    }
});