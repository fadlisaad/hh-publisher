/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'bm';

export interface Journal {
  id: string;
  title: string;
  status: 'scopus' | 'myjournal' | 'non-indexed';
  image: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  reportsTo?: string;
}

export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      journals: 'Our Journals',
      policies: 'Policies',
      contact: 'Contact Us',
    },
    hero: {
      title: 'HH Publisher',
      subtitle: 'Upholding the Integrity of Knowledge & Research',
      description: 'An international journal publishing company established in 2017. We invite all scholars from any background all over the world to collaborate with us without prejudice.',
      cta: 'Explore Journals',
    },
    about: {
      title: 'About Us',
      intro: 'HH Publisher is a brand of HH Academic; registered under the Companies Commission of Malaysia in 2017. HH Publisher is committed to supporting the advancement and dissemination of high-quality scholarly research across a broad range of academic disciplines.',
      mission: 'Our mission is to provide a reliable platform for researchers, academics, and professionals to share original research, innovative ideas, and knowledge that contribute to scientific and societal development.',
      teamTitle: 'Our Team',
      teamDesc: 'All selected members of HH Publisher have extensive experience in scientific publishing, with many years of experience in the field.',
    },
    journals: {
      title: 'Our Journals',
      categories: {
        scopus: 'Scopus Indexed',
        myjournal: 'MyJournal Indexed',
        nonIndexed: 'Non-indexed',
      },
    },
    policies: {
      title: 'Editorial and Publishing Policies',
      intro: 'HH Publisher is committed to advancing scholarly communication by providing a trusted, ethical, transparent, and accessible platform for the dissemination of high-quality academic and scientific research.',
    },
    contact: {
      title: 'Contact Us',
      addressLabel: 'Address',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
    },
  },
  bm: {
    nav: {
      home: 'Laman Utama',
      about: 'Tentang Kami',
      journals: 'Jurnal Kami',
      policies: 'Polisi',
      contact: 'Hubungi Kami',
    },
    hero: {
      title: 'HH Publisher',
      subtitle: 'Memartabatkan Integriti Ilmu & Penyelidikan',
      description: 'Syarikat penerbitan jurnal antarabangsa yang ditubuhkan pada 2017. Kami menjemput semua sarjana dari pelbagai latar belakang di seluruh dunia untuk bekerjasama dengan kami tanpa prejudis.',
      cta: 'Teroka Jurnal',
    },
    about: {
      title: 'Tentang Kami',
      intro: 'HH Publisher adalah jenama di bawah HH Academic; berdaftar di bawah Suruhanjaya Syarikat Malaysia pada 2017. HH Publisher komited untuk menyokong kemajuan dan penyebaran penyelidikan ilmiah berkualiti tinggi merentasi pelbagai disiplin akademik.',
      mission: 'Misi kami adalah untuk menyediakan platform yang boleh dipercayai bagi penyelidik, ahli akademik, dan profesional untuk berkongsi penyelidikan asli, idea inovatif, dan pengetahuan yang menyumbang kepada pembangunan saintifik dan masyarakat.',
      teamTitle: 'Pasukan Kami',
      teamDesc: 'Semua ahli HH Publisher yang dipilih mempunyai pengalaman luas dalam penerbitan saintifik, dengan pengalaman bertahun-tahun dalam bidang tersebut.',
    },
    journals: {
      title: 'Jurnal Kami',
      categories: {
        scopus: 'Indeks Scopus',
        myjournal: 'Indeks MyJournal',
        nonIndexed: 'Tidak Berindeks',
      },
    },
    policies: {
      title: 'Polisi Editorial dan Penerbitan',
      intro: 'HH Publisher komited untuk memajukan komunikasi ilmiah dengan menyediakan platform yang dipercayai, beretika, telus, dan mudah diakses untuk penyebaran penyelidikan akademik dan saintifik berkualiti tinggi.',
    },
    contact: {
      title: 'Hubungi Kami',
      addressLabel: 'Alamat',
      emailLabel: 'E-mel',
      phoneLabel: 'Telefon',
    },
  },
};

export const journals: Journal[] = [
  {
    id: 'pmmb',
    title: 'Progress in Microbes & Molecular Biology',
    status: 'scopus',
    image: '/src/assets/images/journal_microbes_biology_1790832100281.jpg',
    link: '#',
  },
  {
    id: 'mjae',
    title: 'Malaysian Journal of Agricultural Economics',
    status: 'scopus',
    image: '/src/assets/images/journal_agricultural_economics_1790832116491.jpg',
    link: '#',
  },
  {
    id: 'pddbs',
    title: 'Progress in Drug Discovery & Biomedical Science',
    status: 'myjournal',
    image: '/src/assets/images/journal_drug_discovery_1790832125088.jpg',
    link: '#',
  },
  {
    id: 'jwer',
    title: 'Journal of Workforce Education & Research',
    status: 'non-indexed',
    image: '/src/assets/images/journal_workforce_education_1790832141266.jpg',
    link: '#',
  },
];

export const team: TeamMember[] = [
  { name: 'Nor Hidayah Mustafa', role: 'Manager' },
  { name: 'Siti Nurbainun Parjo', role: 'Journal Manager', department: 'Operational Department', reportsTo: 'Nor Hidayah Mustafa' },
  { name: 'Ruzira Suboh', role: 'Assistant Editor', department: 'Operational Department', reportsTo: 'Siti Nurbainun Parjo' },
  { name: 'Haritharan Weloosamy', role: 'IT Executive', department: 'Operational Department', reportsTo: 'Nor Hidayah Mustafa' },
];
