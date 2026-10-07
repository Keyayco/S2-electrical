'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menu && nav) {
 const closedIcon = menu.innerHTML;
 const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
 menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.innerHTML = open ? closeIcon : closedIcon;
 });
 document.addEventListener('keydown', e => {if (e.key === 'Escape' && nav.classList.contains('open')) {menu.click();menu.focus();}});
}
const panel = document.querySelector('.quote-panel');
if (panel) {
 const form = panel.querySelector('form');
 const successTemplate = "<div class=\"quote-success\" role=\"status\" data-tsd-source=\"/src/components/site/site.tsx:22:529\"><span class=\"success-icon\" data-tsd-source=\"/src/components/site/site.tsx:22:574\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-check\" aria-hidden=\"true\" data-tsd-source=\"/src/components/site/site.tsx:22:605\"><path d=\"M20 6 9 17l-5-5\"></path></svg></span><div class=\"eyebrow\" data-tsd-source=\"/src/components/site/site.tsx:22:630\">READY FOR THE NEXT STEP</div><h3 data-tsd-source=\"/src/components/site/site.tsx:22:684\">Your enquiry is ready.</h3><p data-tsd-source=\"/src/components/site/site.tsx:22:715\">Nothing has been sent yet. Open WhatsApp, review your message and send it to S\u00b2 Electrical.</p><p class=\"message-preview\" data-tsd-source=\"/src/components/site/site.tsx:22:813\">Hello S\u00b2 Electrical, I would like to request a quote.\n\nName: Customer\nPhone: 0791234567\nWork: Lighting installation\nDetails: Electrical enquiry details</p><a href=\"https://wa.me/27791512446?text=Hello%20S%C2%B2%20Electrical%2C%20I%20would%20like%20to%20request%20a%20quote.%0A%0AName%3A%20Customer%0APhone%3A%200791234567%0AWork%3A%20Lighting%20installation%0ADetails%3A%20Electrical%20enquiry%20details\" target=\"_blank\" rel=\"noopener noreferrer\" data-tsd-source=\"/src/components/site/site.tsx:22:922\" class=\"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 site-control h-9 px-4 py-2 action action-primary\">Send via WhatsApp <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-message-circle\" aria-hidden=\"true\" data-tsd-source=\"/src/components/site/site.tsx:22:1042\"><path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"></path></svg></a><button class=\"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 site-control h-9 px-4 py-2 edit-enquiry\" data-tsd-source=\"/src/components/site/site.tsx:22:1081\">Edit your enquiry</button></div>";
 if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const d = new FormData(form);
  const message = `Hello S² Electrical, I would like to request a quote.\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\n${d.get('email') ? `Email: ${d.get('email')}\n` : ''}Work: ${d.get('work')}\nDetails: ${d.get('message')}`;
  form.remove();
  panel.innerHTML = successTemplate;
  panel.querySelector('.message-preview').textContent = message;
  panel.querySelector('.quote-success a').href = 'https://wa.me/27791512446?text=' + encodeURIComponent(message);
  panel.querySelector('.edit-enquiry').addEventListener('click', () => {form.reset();panel.replaceChildren(form);});
 });
}
