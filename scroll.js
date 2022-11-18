if(window.innerWidth > 568){
    sr = ScrollReveal({ reset:true});
    ScrollReveal({    
        viewOffset: {
            top: 0
        }
    });
    sr.reveal('.title_name', {duration : 2000, origin: 'right'})
    sr.reveal('.title_description', {duration : 2000, origin: 'right'})
    sr.reveal('.aboutme_title', {duration : 2000, origin: 'left'})
    sr.reveal('.aboutme_description', {duration : 2000, origin: 'left'})
    sr.reveal('.experience_title', {duration : 2000, origin: 'right'})
    sr.reveal('.experience_list', {duration : 2000, origin: 'right'})
    sr.reveal('.projects_title', {duration : 2000, origin:'bottom'})
    sr.reveal('.projects_description', {duration : 2000, origin:'left'})
    sr.reveal('.projects_subtitle', {duration : 2000, origin:'left'})
    sr.reveal('.skills_title', {duration : 2000, origin:'left'})
    sr.reveal('.skills_subtitle', {duration : 2000, origin:'left'})
    sr.reveal('.skills_text', {duration : 2000, origin:'left'})
    sr.reveal('footer', {duration : 2000, origin:'bottom'})
}