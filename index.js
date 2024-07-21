$('#head1').load('header.html')/*access the header*/
$('.footer').load('Footer.html')/*access the header*/
$('.sider').load('sider1.html')/*access the sider*/
$('.sbar').load('search.html')/*access the search bar*/
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 200
const padding = 90
prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})
next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})

const prev1 = document.getElementById('prev-btn2')
const next1 = document.getElementById('next-btn2')
const list1 = document.getElementById('item-list2')
const itemWidth1 = 200
const padding1 = 90
prev1.addEventListener('click',()=>{
  list1.scrollLeft -= itemWidth1 + padding1
})

next1.addEventListener('click',()=>{
  list1.scrollLeft += itemWidth1 + padding1
})

const prev2 = document.getElementById('prev-btn3')
const next2 = document.getElementById('next-btn3')
const list2 = document.getElementById('item-list3')
const itemWidth2 = 200
const padding2 = 90
prev2.addEventListener('click',()=>{
  list2.scrollLeft -= itemWidth2 + padding2
})

next2.addEventListener('click',()=>{
  list2.scrollLeft += itemWidth2 + padding2
})