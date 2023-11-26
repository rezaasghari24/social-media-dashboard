'use strict';

const toggle = document.getElementById('toggle-btn');
const body = document.getElementById('body');

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
})