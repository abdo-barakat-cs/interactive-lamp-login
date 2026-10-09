// تعريف العناصر
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const cord = document.getElementById('cord');
const message = document.getElementById('message');
const body = document.body;

// دالة لتشغيل/إطفاء المصباح
function toggleLight(isOn) {
    if (isOn) {
        body.classList.add('light-on');
    } else {
        body.classList.remove('light-on');
    }
}

// دالة لمحاكاة سحب الحبل
function pullCord() {
    cord.classList.add('pulled');
    setTimeout(() => {
        cord.classList.remove('pulled');
    }, 200); // يعود الحبل لمكانه بسرعة
}

// عند الضغط على زر الدخول
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // سحب الحبل أولاً كأننا نشغل النور
    pullCord();

    // تشغيل الإضاءة
    toggleLight(true);

    // التحقق من المدخلات (بسيط)
    if (username !== "" && password !== "") {
        message.textContent = "✅ Welcome, " + username + "!";
        message.style.color = "#4caf50";
    } else {
        message.textContent = "️ Please fill all fields";
        message.style.color = "#ff5252";
        
        // إذا كانت الحقول فارغة، نطفئ النور بعد ثانية
        setTimeout(() => toggleLight(false), 1000);
    }
});

// إمكانية سحب الحبل بيدك (اختياري)
cord.addEventListener('click', () => {
    pullCord();
    // تبديل حالة الإضاءة عند سحب الحبل مباشرة
    const isOn = body.classList.contains('light-on');
    toggleLight(!isOn);
});