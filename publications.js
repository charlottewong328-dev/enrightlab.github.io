const PUBLICATIONS = [
  { num: 13, img: IMAGES.pub.p13, cite: 'Enright, M. J.,* Jasrasaria, D., Hanchard, M. M., Needell, D. R., Phelan, M. E., Weinberg, D., McDowell, B. E., Hsiao, H-W., Akbari, H., Kottwitz, M., Potter, M. M., Wong, J., Zuo, J-M., Atwater, H. A., Rabani, E., Nuzzo, R. G. Role of Atomic Structure on Exciton Dynamics and Photoluminescence in NIR Emissive InAs/InP/ZnSe Quantum Dots, <em>J. Phys. Chem. C</em>, 2022, 126, 7576–7587.' },
  { num: 12, img: IMAGES.pub.p12, cite: 'Potter, M. M., Phelan, M. E., Balaji, P., Jahelka, P., Bauser, H., Glaudell, R., Went, C. M., Enright, M. J., Needell, D. R., Augusto, A., Atwater, H. A., Nuzzo, R. G. Silicon Heterojunction Microcells. <em>ACS Appl. Mater. Interfaces</em>, 2021, 13, 45600–45608.' },
  { num: 11, img: IMAGES.pub.p11, cite: 'Wang, C., Rubakhin, S. S., Enright, M. J., Sweedler, J. V., Nuzzo, R. G. 3D Particle Free Printing of Biocompatible Conductive Hydrogel Platforms for Neuron Growth and Electrophysiological Recording. <em>Adv. Funct. Mater.</em> 2021, 2010246.' },
  { num: 10, img: IMAGES.pub.p10, cite: 'Li, Y., Kottwitz, M, Vincent, J. L., Enright, M. J., Liu, Z., Zhang, L. Huang, J. Senanayke, S. D., Yang, W. C. D. Crozier, P. A., Nuzzo, R. G., Frenkel, A. I. Dynamic Structure of Active Sites in Ceria-Supported Pt Catalysts for the Water Gas Shift Reaction. <em>Nat. Commun.</em> 2021, 12, 914.' },
  { num: 9, img: IMAGES.pub.p9, cite: 'Enright, M. J., Dou, F. Y., Wu, S., Monahan, M., Rabe, E., Friedfeld, M. R., Schlenker, C. W., Cossairt, B. M., Seeded growth of nanoscale semiconductor tetrapods. <em>Chem. Mater.</em> 2020, 31, 4774-4784.' },
  { num: 8, img: IMAGES.pub.p8, cite: 'Henckel, D. A., Enright, M. J., Panahpour, Eslami, N., Kroupa, D. M., Gamelin, D. R., Cossairt, B. M., Modeling Equilibrium Binding at Quantum Dot Surfaces Using Cyclic Voltammetry, <em>Nano Lett.</em> 2020, 20, 2620-2624.' },
  { num: 7, img: IMAGES.pub.p7, cite: 'Enright, M. J., Ritchhart, A., Cossairt, B. M. (2020) Nucleation and Growth of Colloidal Semiconductor Nanoparticles. In <em>Encyclopedia of Inorganic and Bioinorganic Chemistry</em>, R.A. Scott (Ed.). doi:10.1002/9781119951438.eibc2723' },
  { num: 6, img: IMAGES.pub.p6, cite: 'Potter, M. M., Yoder, M. A., Petronico, A., Lehman, S. E., Nicolau, B. G., Enright, M. J., Phelan, M. E., He, J., Atwater, H. A., Nuzzo, R. G., Autonomous Light Management in Flexible Photoelectrochromic Films Integrating High Performance Silicon Solar Microcells <em>ACS Appl. Energy Mater.</em> 2020, 3, 1540-1551.' },
  { num: 5, img: IMAGES.pub.p5, cite: 'Friedfeld, M. R., Stein, J. L., Johnson, D. A., Park, N., Henry, N. A., Enright, M. J., Mocatta, D., Cossairt, B. M. Effects of Zn2+ and Ga3+ on the Quantum Yield of Cluster-Derived InP Quantum Dots. <em>J. Chem. Phys.</em> 2019, 151, 194702.' },
  { num: 4, img: IMAGES.pub.p4, cite: 'Enright, M. J., Gilbert-Bass, K., Sarsito, H., Cossairt, B. M. Photolytic C–O bond cleavage with quantum dots, <em>Chem. Mater.</em> 2019, 31, 2677-2682.' },
  { num: 3, img: IMAGES.pub.p3, cite: 'Enright, M. J., and Cossairt, B. M. Synthesis of tailor-made colloidal semiconductor heterostructures, <em>Chem. Commun.</em> 2018, 54, 7109-7122.' },
  { num: 2, img: IMAGES.pub.p2, cite: 'Enright, M. J., Sarsito, H., Cossairt, B. M. Kinetically controlled assembly of cadmium chalcogenide nanorods and nanorod heterostructures, <em>Mater. Chem. Front.</em> 2018, 2, 1296-1305.' },
  { num: 1, img: IMAGES.pub.p1, cite: 'Enright, M. J., Sarsito, H., Cossairt, B. M. Quantifying Cation Exchange of Cd2+ in ZnTe: A Challenge for Accessing Type II Heterostructures, <em>Chem. Mater.</em> 2017, 29, 666-672.' },
];

function renderPublications() {
  const root = document.getElementById('pub-root');
  root.innerHTML = PUBLICATIONS.map(
    (p) => `<article class="pub-item reveal">
      <div class="pub-image"><img src="${p.img}" alt="Publication ${p.num} figure" loading="lazy"></div>
      <div class="pub-body">
        <span class="pub-num">${p.num}</span>
        <p class="pub-cite">${p.cite}</p>
      </div>
    </article>`
  ).join('');
  initReveal();
}

document.addEventListener('DOMContentLoaded', renderPublications);
