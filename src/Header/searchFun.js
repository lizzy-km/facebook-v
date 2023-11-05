export const openSearch = () => {
    const searchData = document.getElementById('searchData')
    const searchClose = document.getElementById('searchClose')
    const sData = document.getElementById('sData')

    searchClose.classList.add('opacity-1')
    searchClose.classList.remove('opacity-0')

    sData.classList.add('opacity-1')
    sData.classList.remove('opacity-0')

    searchData.classList.add('min-h-[200px]')
    searchData.classList.remove('min-h-[0px]')
    searchData.classList.add('p-1')
    searchData.classList.remove('p-0')
}
export const closeSearch = () => {
    const searchData = document.getElementById('searchData')
    const searchClose = document.getElementById('searchClose')
    const sData = document.getElementById('sData')

    searchClose.classList.remove('opacity-1')
    searchClose.classList.add('opacity-0')

    sData.classList.add('opacity-0')
    sData.classList.remove('opacity-1')

    searchData.classList.add('min-h-[0px]')
    searchData.classList.remove('min-h-[200px]')
    searchData.classList.add('p-0')
    searchData.classList.remove('p-1')
}