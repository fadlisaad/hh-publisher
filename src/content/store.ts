/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'bm';

export interface Journal {
  title: string;
  indexing_status: 'scopus' | 'myjournal' | 'non-indexed';
  cover?: unknown;
  link: string;
  sort_order: number;
}

export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  reports_to?: string;
  sort_order: number;
}

export interface EditorialMember {
  name: string;
  role?: string;
  institution?: string;
  focus?: { area: string }[];
  photo?: unknown;
  sort_order?: number;
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
    about: {
      title: 'About Us',
      teamTitle: 'Our Team',
      missionTitle: 'Our Mission',
    },
    journals: {
      title: 'Our Journals',
      categories: {
        scopus: 'Scopus Indexed',
        myjournal: 'MyJournal Indexed',
        'non-indexed': 'Non-indexed',
      },
    },
    policies: {
      title: 'Editorial and Publishing Policies',
      corePrinciples: 'Core Ethics Principles',
    },
    contact: {
      title: 'Contact Us',
      addressLabel: 'Address',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      formTitle: 'Quick Inquiry',
      firstName: 'First Name',
      lastName: 'Last Name',
      emailPlaceholder: 'Email Address',
      message: 'Your Message',
      submit: 'Send Message',
    },
    editorial: {
      title: 'Editorial Board',
      subtitle: 'Distinguished scholars guiding our publishing standards',
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
    about: {
      title: 'Tentang Kami',
      teamTitle: 'Pasukan Kami',
      missionTitle: 'Misi Kami',
    },
    journals: {
      title: 'Jurnal Kami',
      categories: {
        scopus: 'Indeks Scopus',
        myjournal: 'Indeks MyJournal',
        'non-indexed': 'Tidak Berindeks',
      },
    },
    policies: {
      title: 'Polisi Editorial dan Penerbitan',
      corePrinciples: 'Prinsip Etika Teras',
    },
    contact: {
      title: 'Hubungi Kami',
      addressLabel: 'Alamat',
      emailLabel: 'E-mel',
      phoneLabel: 'Telefon',
      formTitle: 'Pertanyaan Pantas',
      firstName: 'Nama Depan',
      lastName: 'Nama Belakang',
      emailPlaceholder: 'Alamat E-mel',
      message: 'Mesej Anda',
      submit: 'Hantar Mesej',
    },
    editorial: {
      title: 'Lembaga Editorial',
      subtitle: 'Sarjana terkemuka yang membimbing piawaian penerbitan kami',
    },
  },
};
