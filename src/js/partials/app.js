
// Show/hide filters
let filterBlock = document.querySelector('.filter__dropdown');
if (filterBlock) {
    let showBtn = document.querySelector('.inputfield__show');
    let showArrow = showBtn.querySelector('.inputfield__arrow');
    let showText = showBtn.querySelector('.show__text');

    filterBlock.style.height = '0px';
    filterBlock.style.overflow = 'hidden';
    filterBlock.style.transition = 'height 1s';

    showBtn.addEventListener('click', () => {
        if (!showBtn.hasAttribute('show')) {
            showBtn.setAttribute('show', '');
            showText.innerHTML = 'Згорнути розширений пошук'
            filterBlock.style.height = 'auto';
            showArrow.style.transform = 'rotate(0deg)'
        } else {
            showBtn.removeAttribute('show');
            showText.innerHTML = 'Розгорнути розширений пошук'
            filterBlock.style.height = '0px';
            showArrow.style.transform = 'rotate(180deg)'
        }

    })
}


// Scroll to top
let toTopBtn = document.querySelector('.copyright__up');

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
toTopBtn.addEventListener('click', topFunction)

// ckeck favorite
let favoriteBtn = [...document.querySelectorAll('.procurement__button')]

favoriteBtn.map(btn => {
    btn.addEventListener('click', e => {
        e.path
            .map(el => {
                if ([...el.classList].includes('procurement__button')) {
                    let favStar = el.querySelector('.procurement__button--star');
                    let favText = el.querySelector('.procurement__button--text');

                    if (!el.hasAttribute('check')) {
                        el.setAttribute('check', '');
                        favText.innerHTML = 'В обраному';
                        favStar.classList.add('check-star')
                    } else {
                        el.removeAttribute('check');
                        favText.innerHTML = 'До обраного';
                        favStar.classList.remove('check-star')
                    }
                }
            })
    })
})

// Choose lang
const checkElementOnce = (slot, tag, clickEl) => {
    clickEl.setAttribute('currentlang', '')
    return [...slot.querySelectorAll(`${tag}`)]
        .filter(el => el !== clickEl)
        .map(el => {
            el.removeAttribute('currentlang')
        })
}
let chooseBtn = document.querySelector('.lang__choose'),
    chooseBlock = document.querySelector('.one_of_lang');

chooseBtn.addEventListener('click', () => {
    if (!chooseBtn.hasAttribute('show')) {
        chooseBtn.setAttribute('show', '');
        chooseBlock.style.height = 'auto';
        chooseBlock.style.marginTop = '70px';
    } else {
        chooseBtn.removeAttribute('show');
        chooseBlock.style.height = '20px';
        chooseBlock.style.marginTop = '0';
    }
});
let allLang = [...document.querySelectorAll('.lang__block')]
allLang.map(btn => {
    btn.addEventListener('click', e => {
        if (e.target.getAttribute('class').includes('lang__flag') || e.target.getAttribute('class').includes('lang__language')) {
            checkElementOnce(chooseBlock, 'div', e.target.parentElement);
            chooseBtn.removeAttribute('show');
            chooseBlock.style.height = '20px';
            chooseBlock.style.marginTop = '0';
        }
    })
})