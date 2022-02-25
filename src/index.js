
const links = [
    {
    name:'Home',
    path:'/home'
},
{
    name: 'About',
    path: '/about'
},
{
    name: 'Contact Us',
    path: '/contact'
},
{
    name: 'Portifolio',
    path: '/portifolio'
}
]

const nav_menu = document.querySelector('#nav_menu')

links.forEach((link_name)=> {

    let link = document.createElement('li')
    link.textContent = link_name.name
    nav_menu.appendChild(link)

})
