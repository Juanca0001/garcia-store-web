'use strict';
const WHATSAPP_NUMBER='50660042799';
const menu=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
 const data=new FormData(form);const val=k=>String(data.get(k)||'').trim();
 const message=`Hola, deseo solicitar una cotización a The Garcia Store and Solutions.\n\nNombre: ${val('nombre')}\nTeléfono: ${val('telefono')}\nServicio: ${val('servicio')}\nUbicación: ${val('ubicacion')}\nDescripción: ${val('descripcion')}`;
 const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
 const opened=window.open(url,'_blank','noopener,noreferrer');
 if(!opened){document.getElementById('formHint').textContent='Si WhatsApp no se abrió, utiliza el botón «Enviar por WhatsApp» o permite ventanas emergentes.';window.location.href=url;}
});
