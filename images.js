/** Original photos from michaelenright.wixsite.com/enright-lab (Wix CDN) */
const WIX = (id, file, w = 1200, h = 800) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85/${encodeURIComponent(file)}`;

const IMAGES = {
  homeHero: WIX('e5b837_36929d6a415940748ea099e5bd4658a3~mv2.jpg', 'e5b837_36929d6a415940748ea099e5bd4658a3~mv2.jpg', 1400, 900),
  pageHero: WIX('e5b837_b4bb35a33e3246b3b30abbb1632c073b~mv2.jpg', '20230720_151535.jpg', 1400, 700),
  sfsuShield: 'https://static.wixstatic.com/media/e5b837_d8842db85371486184c0c031d640b89a~mv2.png/v1/fill/w_200,h_200,al_c,q_85/sfsu-shield_0.png',
  contactPanorama: WIX('e5b837_5cd8557657a849b091334d628fd82b73~mv2.jpg', 'e5b837_5cd8557657a849b091334d628fd82b73~mv2.jpg', 1400, 400),
  research: {
    photocatalysis: WIX('e5b837_4572f5c6230f4b748539d71ecc40daaa~mv2.jpg', 'Image from iOS (1).jpg', 800, 600),
    lsc1: WIX('e5b837_af3055ea43db4b38ab0910d10b274d6d~mv2.png', '22_15_4_CuAlS2-ZnS_18_tif.png', 800, 600),
    lsc2: WIX('e5b837_b4bb35a33e3246b3b30abbb1632c073b~mv2.jpg', '20230720_151535.jpg', 800, 600),
    mof1: WIX('e5b837_edf3ec43a70b40468726e6b753867603~mv2.jpg', 'e5b837_edf3ec43a70b40468726e6b753867603~mv2.jpg', 800, 400),
    mof2: WIX('e5b837_6dd33b91e41b4d48bf292079bac16be0~mv2.jpg', 'e5b837_6dd33b91e41b4d48bf292079bac16be0~mv2.jpg', 800, 600),
  },
  pub: {
    p13: 'https://static.wixstatic.com/media/e5b837_970c5882b88e4dde9ed8ed5339404771~mv2.jpeg/v1/fill/w_800,h_500,al_c,q_85/JPhysChemC_TOC.jpeg',
    p12: 'https://static.wixstatic.com/media/e5b837_dd014ded7af94747b85cd21a364b0bee~mv2.jpeg/v1/fill/w_800,h_400,al_c,q_85/am1c11122_0008.jpeg',
    p11: 'https://static.wixstatic.com/media/e5b837_8b539470c80241fdae3cc5df93301bdf~mv2.jpg/v1/fill/w_800,h_440,al_c,q_85/adfm202010246-fig-0001-m.jpg',
    p10: 'https://static.wixstatic.com/media/e5b837_8f7ae4bb9cf7491c9275e9da9ed006c3~mv2.png/v1/fill/w_800,h_400,al_c,q_85/41467_2021_21132_Fig7_HTML.png',
    p9: 'https://static.wixstatic.com/media/e5b837_9412401752b24952bdd1dfd275bf12bd~mv2.jpeg/v1/fill/w_800,h_400,al_c,q_85/cm0c01407_0011.jpeg',
    p8: 'https://static.wixstatic.com/media/e5b837_b0facce702d74780a2dd3d131a628958~mv2.jpeg/v1/fill/w_800,h_400,al_c,q_85/nl0c00162_0005.jpeg',
    p7: 'https://static.wixstatic.com/media/e5b837_64e2f7045c7a4970854fe62b4dc457ae~mv2.png/v1/fill/w_800,h_400,al_c,q_85/Picture1%20processes.png',
    p6: 'https://static.wixstatic.com/media/e5b837_75d9d85f88124440a8d17a8d5a9be851~mv2.jpeg/v1/fill/w_800,h_440,al_c,q_85/ae9b01987_0008.jpeg',
    p5: 'https://static.wixstatic.com/media/e5b837_cf6c25972e2f4ebc923969fb0886ed22~mv2.jpeg/v1/fill/w_800,h_660,al_c,q_85/1_5126971_figures_online_f1.jpeg',
    p4: 'https://static.wixstatic.com/media/e5b837_362043b748704eb2b88f01ae8b037f8c~mv2.jpeg/v1/fill/w_800,h_400,al_c,q_85/cm-2019-009439_0004.jpeg',
    p3: 'https://static.wixstatic.com/media/e5b837_52bd6a6124a04c3e8bccf7f6121d32fe~mv2.gif',
    p2: 'https://static.wixstatic.com/media/e5b837_f2e4f952ce8048b6bc4d786d7f5b4e8e~mv2.png/v1/fill/w_600,h_550,al_c,q_85/Picture2.png',
    p1: 'https://static.wixstatic.com/media/e5b837_621f6dd552c54a9f97acd42272bf6b43~mv2.jpeg/v1/fill/w_600,h_550,al_c,q_85/cm-2016-04215j_0007.jpeg',
  },
  members: {
    enright: WIX('e5b837_afda488adf4e4d44a39f3c82b0f179dd~mv2.jpg', 'DSCF1158.jpg', 600, 700),
    adeline: WIX('e5b837_68028d992ebf487aacf40bdd67020260~mv2.jpg', 'IMG_2384.jpg', 600, 700),
    hani: WIX('e5b837_f4e1f8ea7c944ed1b819dd96f759b491~mv2.jpg', 'IMG_7059.jpg', 600, 700),
    fay: WIX('e5b837_4ed1665483864bbda2f0b2e98b3fc4e7~mv2.jpg', '908F579A-3E88-4024-B361-440418E2B281 (1).jpg', 600, 700),
    cameron: WIX('e5b837_8b92f7ad4fdf462daf899f4a91de48cf~mv2.png', 'image (2).png', 600, 700),
    chidera: WIX('e5b837_ef917134d3bb4ac5a3943d9dd808ac3d~mv2.jpg', 'IMG_8805.jpg', 600, 700),
    charlotte: WIX('e5b837_8c61a5e4e2db4012bed3f77c2ed3e4cd~mv2.jpg', '08CF2671-5D21-4648-8BEB-D68A5ADC34D4.JPG', 600, 700),
    marcello: WIX('e5b837_54b9ec61e4bc44b797b250148614dca7~mv2.jpg', 'e5b837_54b9ec61e4bc44b797b250148614dca7~mv2.jpg', 600, 700),
    chloe: WIX('e5b837_c83d896e5f134897a84854878b7ab7e7~mv2.jpg', 'e5b837_c83d896e5f134897a84854878b7ab7e7~mv2.jpg', 600, 700),
    emilio: WIX('e5b837_fe55ce83174b4a20b2791b20eba8b739~mv2.jpg', '20240708_112624.jpg', 600, 700),
    alex: WIX('e5b837_e150f0d51e714c9b8850785f6a86b745~mv2.jpg', 'asg headshot.jpg', 600, 700),
    robert: WIX('e5b837_d504ee87e1714b2ea34cc01247b3e910~mv2.jpg', '20191203_230002~2.jpg', 600, 700),
    jonah: WIX('e5b837_51d19bdf0db344589e4756e02179ab7d~mv2.jpg', '20240625_151617-POP_OUT.jpg', 600, 700),
    gabi: WIX('e5b837_9c8274003f2e4e89bceef2b1db657049~mv2.jpg', 'IMG_3706 (1).jpg', 600, 700),
    catie: WIX('e5b837_5f67bd33aec049a8aa57d6f519bf9dd8~mv2.jpg', 'Image from iOS (2).jpg', 600, 700),
    duck: WIX('e5b837_375a04e4f34441d1bd95f1a394567a57~mv2.jpg', '20211213_163917.jpg', 600, 700),
    grace: WIX('e5b837_ce4458d716954e529647ce9fa8ebad30~mv2.jpg', 'IMG_1669.jpg', 600, 700),
    gayatri: WIX('e5b837_6ba3c86a234a480d92eacb65efe68a79~mv2.jpg', 'IMG_0061_Original.jpg', 600, 700),
    jenai: WIX('e5b837_63dbd8cd74a3461b9e6abc3c71365fd4~mv2.jpg', 'IMG_9688.jpg', 600, 700),
  },
};

const APPLY_FORM = 'https://forms.gle/ArCUbxu78vEYLCsC8';
