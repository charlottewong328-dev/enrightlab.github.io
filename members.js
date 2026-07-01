const MEMBER_SECTIONS = [
  {
    title: 'Principal Investigator',
    members: [
      {
        name: 'Dr. Michael J. Enright',
        field: 'Chemistry',
        photo: IMAGES.members.enright,
        bio: 'Michael Enright received his A.B. in chemistry from Ripon College in 2014 and his Ph.D in Inorganic Chemistry from the University of Washington with the guidance of Professor Brandi Cossairt. He accomplished his postdoctoral research with Ralph Nuzzo at the University of Illinois Urbana-Champaign from 2019–2021.',
      },
    ],
  },
  {
    title: 'Graduate Research Assistants',
    members: [
      {
        name: 'Adeline Rickard',
        field: 'Chemistry',
        bio: 'Adeline is a Genentech Dissertation MS Scholar and Gilead Innovation Scholar!',
      },
      {
        name: 'Hani Sobhi',
        field: 'Chemistry',
        photo: IMAGES.members.adeline,
        bio: 'Hani Sobhi is an M.S. student in the Department of Chemistry and Biochemistry at San Francisco State University. He graduated from UC-Davis in Spring 2025 and joined the Enright Lab in Fall 2025. His research focuses on the development of catalytic films using quantum dots for photoelectrocatalytic applications. Hani is a Genentech Foundation Dissertation MS Scholar.',
      },
      {
        name: 'Arun Somasundaram',
        field: 'Chemistry',
        photo: IMAGES.members.hani,
        bio: 'Arun Somasundaram is a Chemistry master\'s student at San Francisco State who graduated in Spring 2026 with a BS in Chemistry and minor in Astronomy. He is investigating the role of exciton dynamics in quantum dots for photocatalysis with Time-Resolved Photoluminescence Spectroscopy. Arun is a Genentech Masters Fellow and recipient of the SF State Department of Chemistry and Biochemistry 2026 Distinction in Chemistry Award.',
      },
    ],
  },
  {
    title: 'Undergraduate Research Assistants',
    members: [
      { name: 'Fay Harris', field: 'Chemistry', photo: IMAGES.members.fay, bio: 'Fay Harris is a senior at San Francisco State University pursuing a BS in chemistry, a minor in music, and a minor in the classics. She feels very passionate about quantum dots. Fay is a Genentech Undergraduate Fellow.' },
      { name: 'Kayla Lee', field: 'Chemistry', bio: 'Kayla is a junior at San Francisco State University majoring in Chemistry with an interest in becoming a perfume chemist. Kayla is a Gilead Summer Research Fellow.' },
      { name: 'Sam Tanabe', field: 'Chemistry', bio: 'Sam is a senior at San Francisco State University majoring in Chemistry. Sam is an SEO Fellow.' },
      { name: 'Nahadi Munoz', field: 'Biochemistry', bio: 'Nahadi is a senior at San Francisco State University majoring in Biochemistry. Nahadi is a Genentech Fellow.' },
      { name: 'Cameron Krolik', field: 'Biochemistry', photo: IMAGES.members.cameron, bio: 'Cameron Krolik researches the surface chemistry and functionalization of nontoxic CuAlS₂/ZnS quantum dots. Cameron is an NIH U-RISE Fellow and recipient of the Analytical Chemistry Award.' },
      { name: 'Chidera Okoye', field: 'Biochemistry', photo: IMAGES.members.chidera, bio: 'Chidera Okoye is a third-year student majoring in B.S. Biochemistry at SF State, researching applications of copper nanoparticles. Chidera is an SEO Scholar.' },
      { name: 'Tarin Brady', field: 'Chemistry', bio: 'Tarin is a junior at San Francisco State University majoring in Chemistry. Tarin is an SEO Scholar.' },
      { name: 'Jollyn Gunardi', field: 'Chemistry', bio: 'Jollyn is a sophomore at San Francisco State University majoring in Chemistry. Jollyn is an SEO Scholar.' },
      { name: 'Charlotte Wong', field: 'Engineering', photo: IMAGES.members.charlotte, bio: 'Charlotte Wong is a sophomore at Harvey Mudd College majoring in engineering with an interest in materials. She is researching copper nanoparticles for CO₂ reduction. Charlotte received a 2026 Summer Experience Funding Award from Harvey Mudd College.' },
    ],
  },
  {
    title: 'Graduates and Former Members',
    members: [
      { name: 'Marcello Garbo', field: 'Chemistry', photo: IMAGES.members.marcello, bio: 'Marcello Garbo earned his M.S. in Chemistry from SFSU in Spring 2026. His work focused on near-infrared–emitting semiconductor nanoparticles for biological imaging and luminescent solar concentrators. Marcello is now a Chemistry Ph.D. student at UC Irvine.' },
      { name: 'Chloe Peak', field: 'Chemistry', photo: IMAGES.members.chloe, bio: 'Chloe Peak earned her B.S. in Chemistry from SFSU in May 2026, studying semiconductor quantum dots for photocatalytic biomass conversion. Chloe is a Chemistry Ph.D. student at UC Merced.' },
      { name: 'Trang Le', field: 'Chemistry', bio: 'Trang is a senior at San Francisco State University majoring in Chemistry.' },
      { name: 'Emilio Aguilar', field: 'Chemistry', photo: IMAGES.members.emilio, bio: 'Emilio Aguilar graduated from SFSU in Spring 2025. His research included photocatalysis using quantum dots and a new synthesis for colloidally stable, colossal quantum dots greater than 40 nm. Emilio is a Compliant Investigation Technician at Abbott.' },
      { name: 'Zoe Lambert', field: 'Chemistry', bio: 'Zoe is a visiting graduate student from Sorbonne Université who has led the development of our group\'s photoelectrochemistry investigations.' },
      { name: 'Alex Gomez', field: 'Biochemistry', photo: IMAGES.members.alex, bio: 'Alex investigated near-infrared emissive quantum dots for bioimaging in the Enright Lab as an undergraduate. Alex is an SEO Fellow and recipient of the 2026 Physical Chemistry Prize for Life Sciences.' },
      { name: 'Robert Lam', field: 'Biochemistry', photo: IMAGES.members.robert, bio: 'Robert Lam explored CO₂ reduction on ordered copper lattices to control product selectivity. Robert is a graduate student at USC and Genentech Undergraduate Fellow.' },
      { name: 'Jonah Glass-Hussain', field: 'Chemistry', photo: IMAGES.members.jonah, bio: 'Jonah explored selective CO₂ reduction to C2+ products on copper nanocrystals. Jonah is a graduate student at Stony Brook University.' },
      { name: 'Gabi Vazquez', field: 'Biology', photo: IMAGES.members.gabi, bio: 'Gabi Vazquez is a senior Biology major at SFSU pursuing a future in the medical field. Gabi was an NIH-URISE Fellow.' },
      { name: 'Catie Bodinger', field: 'Chemistry · Materials Science', photo: IMAGES.members.catie, bio: 'Catie Bodinger is a graduate student at the University of Washington who investigated quantum dots for photocatalysis as an undergraduate at Western Washington University.' },
      { name: 'D. Michael "Duck" Carnahan', field: 'Chemistry · Mathematics', photo: IMAGES.members.duck, bio: 'Duck Carnahan is a graduate student at Stony Brook University. At WWU, he investigated kinetics of selenium nanoparticle growth and anisotropic nanorod elongation.' },
      { name: 'Grace Himka', field: 'Biochemistry', photo: IMAGES.members.grace, bio: 'Grace Himka graduated from Western Washington University in 2023 with a BS in Biochemistry, investigating anisotropy in nanomaterials to improve photocatalysis.' },
      { name: 'Gayatri Kundassery', field: 'Biochemistry', photo: IMAGES.members.gayatri, bio: 'Gayatri Kundassery is an undergraduate at the University of Washington pursuing a BS in Biochemistry with a minor in Climate Science.' },
      { name: 'Jenai Simons', field: 'Chemical Engineering', photo: IMAGES.members.jenai, bio: 'Jenai Simons investigated rates of photocatalysis using molecular probes as an NSF-REU fellow in 2022 at UC Berkeley.' },
    ],
  },
  {
    title: 'Former ACS Seed Students',
    members: [
      { name: 'Alina Liu', field: 'Lowell High School', bio: '' },
      { name: 'Aiden Zhang', field: 'Galileo Academy of Science and Technology', bio: '' },
    ],
  },
];

function memberCard(m) {
  const initials = m.name.split(' ').filter((w) => w[0] && w[0] === w[0].toUpperCase()).slice(0, 2).map((w) => w[0]).join('');
  const photo = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">`
    : `<div class="member-placeholder" aria-hidden="true">${initials}</div>`;
  return `<article class="member-card reveal">
    <div class="member-photo">${photo}</div>
    <div class="member-info">
      <h3>${m.name}</h3>
      <p class="member-field">${m.field}</p>
      ${m.bio ? `<p class="member-bio">${m.bio}</p>` : ''}
    </div>
  </article>`;
}

function renderMembers() {
  const root = document.getElementById('members-root');
  root.innerHTML = MEMBER_SECTIONS.map(
    (section) => `<section class="member-section">
      <h2 class="member-section-title reveal">${section.title}</h2>
      <div class="member-grid">${section.members.map(memberCard).join('')}</div>
    </section>`
  ).join('');
  initReveal();
}

document.addEventListener('DOMContentLoaded', renderMembers);
