function BlurHeight() {
    const navBar = document.querySelector('.navBar');
    // const blur = document.querySelector('.blur');
    const bg = document.querySelector('.bg')

    if (navBar && blur) {
        const navHeight = navBar.offsetHeight;
        // blur.style.minHeight = navHeight + 'px';
        bg.style.paddingTop = navHeight + 'px';
    }
}
window.addEventListener('DOMContentLoaded', BlurHeight);
 window.addEventListener('resize', BlurHeight);