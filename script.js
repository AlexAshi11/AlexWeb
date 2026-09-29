document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)d.querySelector('summary b').textContent='−';else d.querySelector('summary b').textContent='+'}));
