const containers = document.querySelectorAll('.scroll-animations');

window.addEventListener('scroll', checkContainers);

checkContainers();

function checkContainers(){

    const triggerBottom = window.innerHeight / 3.8 * 4;

    containers.forEach(container => {

        const containerTop = container.getBoundingClientRect().top

        if(containerTop < triggerBottom){

            container.classList.add('show');

        }else{

            container.classList.remove('show')

        };

    });

}