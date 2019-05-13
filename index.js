const avatar = document.getElementById('avatar');

avatar.onmouseover = function () {
    avatar.classList.remove('bluredAvatar');
};

avatar.onmouseout = function () {
    setTimeout(() => {
        avatar.classList.add('bluredAvatar');
    }, 1000);
};
