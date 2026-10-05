import React, { useState, useMemo } from 'react';

// ================= EDIT PROFESSOR DATA ONLY BELOW =================
export const professors: Professor[] = [
  {
    name: 'Dr. Karren V. De Lara',
    title: 'CS Program Chair',
    photo: '/professors/dr-karren-delara.jpg',
    schedule: [
      // Monday
      {
        day: 'MON',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 304',
        subject: 'Software Engineering 2',
        section: 'CS33S1',
        room: 'Q-5310A (Online)',
      },
      {
        day: 'MON',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S3',
        room: 'Lecture',
      },
      // Tuesday
      {
        day: 'TUE',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 201B',
        subject: 'Data Structures and Algorithms Analysis',
        section: 'DS21S1',
        room: 'Lecture - Q-5411D',
      },
      {
        day: 'TUE',
        start: '10:30',
        end: '12:30',
        courseCode: 'CS 304',
        subject: 'Software Engineering 2 (Lab)',
        section: 'CS33S1',
        room: 'Laboratory - Q-6212',
      },
      {
        day: 'TUE',
        start: '13:30',
        end: '15:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1 (Lab)',
        section: 'CS31S1',
        room: 'Laboratory - Q-5215',
      },
      {
        day: 'TUE',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1 (Lab)',
        section: 'CS31S2',
        room: 'Laboratory - Q-5215',
      },
      // Wednesday
      {
        day: 'WED',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S2',
        room: 'Lecture',
      },
      // Thursday
      {
        day: 'THU',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 201B',
        subject: 'Data Structures and Algorithms Analysis (Lab)',
        section: 'DS21S1',
        room: 'Laboratory - Q-5203C',
      },
      {
        day: 'THU',
        start: '10:30',
        end: '12:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1 (Lab)',
        section: 'CS31S3',
        room: 'Laboratory - Q-5313',
      },
      {
        day: 'THU',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S3',
        room: 'Lecture',
      },
      // Saturday
      {
        day: 'SAT',
        start: '07:30',
        end: '10:30',
        courseCode: 'MITBC 113',
        subject: 'Advanced Topics in Computing & Informatics',
        section: 'MIT11G1',
        room: 'Lecture - Q-6506',
      },
    ],
  },
  {
    name: 'Prof. Elsa I. Barcelos',
    title: 'CS Faculty',
    photo: '/professors/prof-elsa-barcelos.png',
    schedule: [
      // Monday
      {
        day: 'MON',
        start: '07:30',
        end: '09:00',
        courseCode: 'CS 201',
        subject: 'Data Structures and Algorithms Analysis',
        section: 'IT21S7',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '09:30',
        end: '10:30',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S3',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '16:30',
        end: '17:30',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S4',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '18:00',
        end: '19:00',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S2',
        room: 'Lecture',
      },
      // Tuesday
      {
        day: 'TUE',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 201',
        subject: 'Data Structures and Algorithms Analysis (Lab)',
        section: 'IT21S7',
        room: 'Laboratory - Q-3205',
      },
      {
        day: 'TUE',
        start: '10:30',
        end: '12:00',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1',
        section: 'CS11S2',
        room: 'Lecture - Q-5312',
      },
      {
        day: 'TUE',
        start: '12:30',
        end: '13:30',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1',
        section: 'CS11S1',
        room: 'Lecture',
      },
      {
        day: 'TUE',
        start: '13:30',
        end: '15:00',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing',
        section: 'CS11S1',
        room: 'Lecture - Q-5320',
      },
      {
        day: 'TUE',
        start: '15:30',
        end: '17:00',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing',
        section: 'CS11S3',
        room: 'Lecture - Q-5312',
      },
      {
        day: 'TUE',
        start: '18:30',
        end: '20:00',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S3',
        room: 'Lecture - Q-5506',
      },
      // Wednesday
      {
        day: 'WED',
        start: '07:30',
        end: '09:00',
        courseCode: 'CS 201',
        subject: 'Data Structures and Algorithms Analysis',
        section: 'IT21S7',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '09:30',
        end: '10:30',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1',
        section: 'CS11S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '10:30',
        end: '12:00',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing (Lab)',
        section: 'CS11S2',
        room: 'Laboratory - Q-6215',
      },
      {
        day: 'WED',
        start: '13:30',
        end: '15:00',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing (Lab)',
        section: 'CS11S3',
        room: 'Laboratory - Q-6215',
      },
      // Thursday
      {
        day: 'THU',
        start: '07:30',
        end: '09:00',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1 (Lab)',
        section: 'CS11S1',
        room: 'Laboratory - Q-5215',
      },
      {
        day: 'THU',
        start: '10:30',
        end: '13:00',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1 (Lab)',
        section: 'CS11S2',
        room: 'Laboratory - Q-6215',
      },
      {
        day: 'THU',
        start: '13:30',
        end: '16:30',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing (Lab)',
        section: 'CS11S1',
        room: 'Laboratory - Q-6215',
      },
      // Friday
      {
        day: 'FRI',
        start: '10:30',
        end: '12:00',
        courseCode: 'CS 001A',
        subject: 'Introduction to Computing',
        section: 'CS11S2',
        room: 'Lecture - Q-6401',
      },
      {
        day: 'FRI',
        start: '13:30',
        end: '15:00',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S1',
        room: 'Lecture - Q-5307A',
      },
      {
        day: 'FRI',
        start: '15:30',
        end: '17:00',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S2',
        room: 'Lecture - Q-5312',
      },
      {
        day: 'FRI',
        start: '17:30',
        end: '19:00',
        courseCode: 'CS 200',
        subject: 'Principles of Programming Languages',
        section: 'CS21S4',
        room: 'Lecture - Q-5312',
      },
    ],
  },
  {
    name: 'Prof. Janice A. Capule',
    title: 'CS Faculty',
    photo: '/professors/prof-janice-capule.png',
    schedule: [
      // Monday
      {
        day: 'MON',
        start: '10:30',
        end: '11:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '11:30',
        end: '12:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '12:30',
        end: '13:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S3',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '14:30',
        end: '15:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '16:00',
        end: '17:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S3',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '17:00',
        end: '18:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '18:00',
        end: '19:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S2',
        room: 'Lecture',
      },
      // Tuesday
      {
        day: 'TUE',
        start: '08:30',
        end: '10:00',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1',
        section: 'CS11S3',
        room: 'Lecture - Q-5312',
      },
      {
        day: 'TUE',
        start: '10:30',
        end: '13:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies (Lab)',
        section: 'CS31S4',
        room: 'Laboratory - Q-6221',
      },
      {
        day: 'TUE',
        start: '15:30',
        end: '16:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'TUE',
        start: '16:30',
        end: '19:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies (Lab)',
        section: 'CS31S3',
        room: 'Laboratory - Q-6219',
      },
      // Wednesday
      {
        day: 'WED',
        start: '07:30',
        end: '10:30',
        courseCode: 'ITE 001',
        subject: 'Computer Programming 1 (Lab)',
        section: 'CS11S3',
        room: 'Laboratory - Q-5215',
      },
      {
        day: 'WED',
        start: '10:30',
        end: '11:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '11:30',
        end: '12:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '12:30',
        end: '13:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies',
        section: 'CS31S3',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '16:00',
        end: '17:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S3',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '17:00',
        end: '18:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '18:00',
        end: '19:00',
        courseCode: 'CS 307',
        subject: 'Thesis 1',
        section: 'CS41S2',
        room: 'Lecture',
      },
      // Thursday
      {
        day: 'THU',
        start: '10:30',
        end: '13:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies (Lab)',
        section: 'CS31S2',
        room: 'Laboratory - Q-5221',
      },
      {
        day: 'THU',
        start: '13:30',
        end: '16:30',
        courseCode: 'CS 307',
        subject: 'Thesis 1 (Lab)',
        section: 'CS41S3',
        room: 'Laboratory - Q-3206',
      },
      {
        day: 'THU',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 307',
        subject: 'Thesis 1 (Lab)',
        section: 'CS41S2',
        room: 'Laboratory - Q-3210',
      },
      // Friday
      {
        day: 'FRI',
        start: '10:30',
        end: '12:30',
        courseCode: 'IS 005',
        subject: 'Introduction to Project Management',
        section: 'CS41S2',
        room: 'Lecture - Q-3204',
      },
      {
        day: 'FRI',
        start: '13:30',
        end: '16:30',
        courseCode: 'ITE 013',
        subject: 'Application Development and Emerging Technologies (Lab)',
        section: 'CS31S1',
        room: 'Laboratory - Q-5219',
      },
      {
        day: 'FRI',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 307',
        subject: 'Thesis 1 (Lab)',
        section: 'CS41S1',
        room: 'Laboratory - Q-5215',
      },
      // Saturday
      {
        day: 'SAT',
        start: '07:30',
        end: '10:30',
        courseCode: 'IS 005',
        subject: 'Introduction to Project Management',
        section: 'CS41S1',
        room: 'Lecture - Q-5215',
      },
    ],
  },
  {
    name: 'Prof. Jess N. Garcia',
    title: 'CS Faculty',
    photo: '/professors/prof-jess-garcia.png',
    schedule: [
      // Monday
      {
        day: 'MON',
        start: '11:30',
        end: '12:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S3',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '12:30',
        end: '13:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S4',
        room: 'Lecture',
      },
      // Tuesday
      {
        day: 'TUE',
        start: '07:30',
        end: '10:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents (Lab)',
        section: 'CS31S4',
        room: 'Laboratory - Q-5313',
      },
      {
        day: 'TUE',
        start: '10:30',
        end: '13:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming (Lab)',
        section: 'CS21S3',
        room: 'Laboratory - Q-6313',
      },
      {
        day: 'TUE',
        start: '13:30',
        end: '15:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming',
        section: 'CS21S1',
        room: 'Lecture - Q-5506',
      },
      {
        day: 'TUE',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents (Lab)',
        section: 'CS31S1',
        room: 'Laboratory - Q-5315',
      },
      // Wednesday
      {
        day: 'WED',
        start: '07:30',
        end: '10:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents (Lab)',
        section: 'CS31S3',
        room: 'Laboratory - Q-5313',
      },
      {
        day: 'WED',
        start: '10:30',
        end: '13:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming (Lab)',
        section: 'CS21S1',
        room: 'Laboratory - Q-5313',
      },
      {
        day: 'WED',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 406',
        subject: 'Machine Learning',
        section: 'CS41S2',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming (Lab)',
        section: 'CS21S2',
        room: 'Laboratory - Q-5205',
      },
      // Thursday
      {
        day: 'THU',
        start: '10:30',
        end: '12:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming',
        section: 'CS21S2',
        room: 'Lecture - Q-5312',
      },
      {
        day: 'THU',
        start: '13:30',
        end: '15:30',
        courseCode: 'CS 406',
        subject: 'Machine Learning',
        section: 'CS41S1',
        room: 'Lecture - Q-5415',
      },
      {
        day: 'THU',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'THU',
        start: '16:30',
        end: '18:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming',
        section: 'CS21S3',
        room: 'Lecture - Q-5312',
      },
      // Friday
      {
        day: 'FRI',
        start: '07:30',
        end: '10:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents (Lab)',
        section: 'CS31S2',
        room: 'Laboratory - Q-3206',
      },
      {
        day: 'FRI',
        start: '10:30',
        end: '13:30',
        courseCode: 'CS 406',
        subject: 'Machine Learning (Lab)',
        section: 'CS41S1',
        room: 'Laboratory - Q-5213',
      },
      {
        day: 'FRI',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'FRI',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 403',
        subject: 'Intelligent Agents',
        section: 'CS31S3',
        room: 'Lecture',
      },
      {
        day: 'FRI',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 406',
        subject: 'Machine Learning',
        section: 'CS41S2',
        room: 'Lecture',
      },
      {
        day: 'FRI',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 301',
        subject: 'Software Engineering 1 (Lab)',
        section: 'CS31S4',
        room: 'Laboratory - Q-5313',
      },
      // Saturday
      {
        day: 'SAT',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming',
        section: 'CS21S4',
        room: 'Lecture - Q-5415',
      },
      {
        day: 'SAT',
        start: '10:30',
        end: '13:30',
        courseCode: 'CS 002',
        subject: 'Advanced Object-Oriented Programming (Lab)',
        section: 'CS21S4',
        room: 'Laboratory - Q-5215',
      },
      {
        day: 'SAT',
        start: '13:30',
        end: '16:30',
        courseCode: 'CS 406',
        subject: 'Machine Learning (Lab)',
        section: 'CS41S2',
        room: 'Laboratory - Q-5215',
      },
    ],
  },
  {
    name: 'Prof. Monaliza C. Gregorio',
    title: 'CS Faculty',
    photo: '/professors/prof-monaliza-gregorio.png',
    schedule: [
      // Monday
      {
        day: 'MON',
        start: '06:30',
        end: '07:00',
        courseCode: 'IT 004',
        subject: 'Information Management',
        section: 'IT21S7',
        room: 'Consultation / Prep',
      },
      {
        day: 'MON',
        start: '07:30',
        end: '08:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '08:30',
        end: '09:00',
        courseCode: 'IT 004',
        subject: 'Information Management',
        section: 'IT21S7',
        room: 'Consultation / Prep',
      },
      {
        day: 'MON',
        start: '09:30',
        end: '11:00',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S3',
        room: 'Lecture - Q-5415',
      },
      {
        day: 'MON',
        start: '11:30',
        end: '12:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '12:30',
        end: '13:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S2',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '14:30',
        end: '15:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S1',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '15:30',
        end: '16:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S4',
        room: 'Lecture',
      },
      {
        day: 'MON',
        start: '19:30',
        end: '20:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S3',
        room: 'Lecture',
      },
      // Tuesday
      {
        day: 'TUE',
        start: '08:00',
        end: '10:00',
        courseCode: 'CS 004',
        subject: 'Networks and Communications (Lab)',
        section: 'CS31S2',
        room: 'Laboratory - Q-5222',
      },
      {
        day: 'TUE',
        start: '09:30',
        end: '10:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S1',
        room: 'Lecture',
      },
      {
        day: 'TUE',
        start: '10:30',
        end: '12:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications (Lab)',
        section: 'CS31S3',
        room: 'Laboratory - Q-5205',
      },
      {
        day: 'TUE',
        start: '13:30',
        end: '15:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization (Lab)',
        section: 'CS21S3',
        room: 'Laboratory - Q-5313',
      },
      {
        day: 'TUE',
        start: '16:30',
        end: '17:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S2',
        room: 'Lecture',
      },
      {
        day: 'TUE',
        start: '17:30',
        end: '19:00',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S3',
        room: 'Lecture',
      },
      // Wednesday
      {
        day: 'WED',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization (Lab)',
        section: 'CS21S2',
        room: 'Laboratory - Q-5205',
      },
      {
        day: 'WED',
        start: '10:30',
        end: '11:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S2',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '11:30',
        end: '12:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S1',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '12:30',
        end: '13:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications',
        section: 'CS31S4',
        room: 'Lecture',
      },
      {
        day: 'WED',
        start: '13:30',
        end: '15:30',
        courseCode: 'ITE 406',
        subject: 'Applied Text Mining / Applied Social Network Analysis',
        section: 'CS41S1',
        room: 'Lecture - Q-9401',
      },
      {
        day: 'WED',
        start: '16:30',
        end: '18:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization (Lab)',
        section: 'CS21S1',
        room: 'Laboratory - Q-5216',
      },
      // Thursday
      {
        day: 'THU',
        start: '09:00',
        end: '11:00',
        courseCode: 'CS 004',
        subject: 'Networks and Communications (Lab)',
        section: 'CS31S2',
        room: 'Laboratory - Q-5222',
      },
      {
        day: 'THU',
        start: '13:30',
        end: '14:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization',
        section: 'CS21S4',
        room: 'Lecture',
      },
      {
        day: 'THU',
        start: '14:30',
        end: '16:30',
        courseCode: 'ITE 406',
        subject: 'Applied Text Mining / Applied Social Network Analysis',
        section: 'CS41S2',
        room: 'Lecture - Q-9410',
      },
      {
        day: 'THU',
        start: '16:30',
        end: '19:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications (Lab)',
        section: 'CS31S1',
        room: 'Laboratory - Q-9212',
      },
      // Friday
      {
        day: 'FRI',
        start: '07:30',
        end: '09:30',
        courseCode: 'IT 004',
        subject: 'Information Management (Lab)',
        section: 'IT21S7',
        room: 'Laboratory - Q-3210',
      },
      {
        day: 'FRI',
        start: '13:30',
        end: '16:30',
        courseCode: 'ITE 406',
        subject: 'Applied Text Mining / Applied Social Network Analysis (Lab)',
        section: 'CS41S1',
        room: 'Laboratory - Q-5205',
      },
      {
        day: 'FRI',
        start: '16:30',
        end: '19:30',
        courseCode: 'ITE 406',
        subject: 'Applied Text Mining / Applied Social Network Analysis (Lab)',
        section: 'CS41S2',
        room: 'Laboratory - Q-3208',
      },
      // Saturday
      {
        day: 'SAT',
        start: '07:30',
        end: '09:30',
        courseCode: 'CS 004',
        subject: 'Networks and Communications (Lab)',
        section: 'CS31S4',
        room: 'Laboratory - Q-5315',
      },
      {
        day: 'SAT',
        start: '10:30',
        end: '12:30',
        courseCode: 'ITE 001B',
        subject: 'Computer Programming 1 (Lab)',
        section: 'ME22S1',
        room: 'Laboratory - Q-3210',
      },
      {
        day: 'SAT',
        start: '13:30',
        end: '16:30',
        courseCode: 'CS 003',
        subject: 'Computer Architecture and Organization (Lab)',
        section: 'CS21S4',
        room: 'Laboratory - Q-5313',
      },
    ],
  },
];
// ================= EDIT PROFESSOR DATA ONLY ABOVE =================

export type Weekday = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';

export interface ScheduleItem {
  day: Weekday | string;
  start: string;
  end: string;
  courseCode: string;
  subject: string;
  section: string;
  room: string;
}

export interface Professor {
  name: string;
  title: string;
  photo?: string;
  schedule: ScheduleItem[];
}

const WEEKDAYS: Weekday[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Helper to derive initials after stripping common academic/honorific prefixes
function deriveInitials(name: string): string {
  if (!name) return 'CS';
  const cleanName = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'CS';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
}

// Convert 24h "HH:mm" to minutes from midnight
function timeToMinutes(timeStr: string): number | null {
  if (!timeStr || typeof timeStr !== 'string') return null;
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return null;
  }
  return hours * 60 + minutes;
}

// Format 24h "HH:mm" to 12-hour formatted time (e.g., "8:00 AM", "1:30 PM")
function formatSingleTime(timeStr: string): string {
  const mins = timeToMinutes(timeStr);
  if (mins === null) return timeStr;
  const hours24 = Math.floor(mins / 60);
  const minutes = mins % 60;
  const period = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const minFormatted = minutes === 0 ? '00' : String(minutes).padStart(2, '0');
  return `${hours12}:${minFormatted} ${period}`;
}

// Format start-end range (e.g. "8:00 – 9:30 AM" or "11:30 AM – 1:00 PM")
function formatTimeRange(startStr: string, endStr: string): string {
  const startMins = timeToMinutes(startStr);
  const endMins = timeToMinutes(endStr);
  if (startMins === null || endMins === null) {
    return `${startStr} – ${endStr}`;
  }
  const startH24 = Math.floor(startMins / 60);
  const startM = startMins % 60;
  const startPeriod = startH24 >= 12 ? 'PM' : 'AM';
  const startH12 = startH24 % 12 === 0 ? 12 : startH24 % 12;
  const startFormatted = `${startH12}:${startM === 0 ? '00' : String(startM).padStart(2, '0')}`;

  const endH24 = Math.floor(endMins / 60);
  const endM = endMins % 60;
  const endPeriod = endH24 >= 12 ? 'PM' : 'AM';
  const endH12 = endH24 % 12 === 0 ? 12 : endH24 % 12;
  const endFormatted = `${endH12}:${endM === 0 ? '00' : String(endM).padStart(2, '0')}`;

  if (startPeriod === endPeriod) {
    return `${startFormatted} – ${endFormatted} ${startPeriod}`;
  }
  return `${startFormatted} ${startPeriod} – ${endFormatted} ${endPeriod}`;
}

// Generate the half-hour time labels dynamically given start base minutes and total slots
function generateTimeLabels(baseMinutes: number, totalSlots: number): string[] {
  const labels: string[] = [];
  for (let i = 0; i < totalSlots; i++) {
    const totalMinutes = baseMinutes + i * 30;
    const hours24 = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    const minFormatted = minutes === 0 ? '00' : String(minutes).padStart(2, '0');
    labels.push(`${hours12}:${minFormatted} ${period}`);
  }
  return labels;
}

// Visual color themes cycling through Cyan, Blue, Indigo
interface ColorTheme {
  cardClasses: string;
  leftBorder: string;
  badgeClasses: string;
  codeClasses: string;
  textColor: string;
  subtextColor: string;
  timeColor: string;
}

const COLOR_THEMES: ColorTheme[] = [
  // Cyan
  {
    cardClasses: 'bg-gradient-to-br from-[#f0fdfa]/95 via-[#ecfeff]/90 to-[#e0f2fe]/80 border-cyan-200/90 text-[#083344] shadow-sm hover:shadow-md',
    leftBorder: 'border-l-4 border-l-[#06b6d4]',
    badgeClasses: 'bg-white/90 text-[#0e7490] border border-cyan-200/60 shadow-xs font-semibold',
    codeClasses: 'text-[#0e7490] font-bold tracking-tight',
    textColor: 'text-[#083344]',
    subtextColor: 'text-[#155e75]',
    timeColor: 'text-[#0e7490]',
  },
  // Blue
  {
    cardClasses: 'bg-gradient-to-br from-[#eff6ff]/95 via-[#f0f7ff]/90 to-[#dbeafe]/80 border-blue-200/90 text-[#0f2854] shadow-sm hover:shadow-md',
    leftBorder: 'border-l-4 border-l-[#2563eb]',
    badgeClasses: 'bg-white/90 text-[#1d4ed8] border border-blue-200/60 shadow-xs font-semibold',
    codeClasses: 'text-[#1d4ed8] font-bold tracking-tight',
    textColor: 'text-[#0f2854]',
    subtextColor: 'text-[#1e40af]',
    timeColor: 'text-[#1d4ed8]',
  },
  // Indigo
  {
    cardClasses: 'bg-gradient-to-br from-[#f5f3ff]/95 via-[#faf5ff]/90 to-[#ede9fe]/80 border-indigo-200/90 text-[#1e1b4b] shadow-sm hover:shadow-md',
    leftBorder: 'border-l-4 border-l-[#6366f1]',
    badgeClasses: 'bg-white/90 text-[#4338ca] border border-indigo-200/60 shadow-xs font-semibold',
    codeClasses: 'text-[#4338ca] font-bold tracking-tight',
    textColor: 'text-[#1e1b4b]',
    subtextColor: 'text-[#3730a3]',
    timeColor: 'text-[#4338ca]',
  },
];

// Inactive tab background colors palette
const TAB_BG_COLORS = [
  '#0f2854', // deep royal blue
  '#1a4a8b', // medium blue
  '#0284c7', // cyan-blue
  '#1e3a8a', // slate navy blue
  '#0369a1', // blue-cyan dark
];

const SLOT_HEIGHT = 52; // 52px per 30 minutes for comfortable enlarged readability when zoomed out

// Helper to determine class type
function getClassTypeInfo(item: ScheduleItem): { label: string; isLab: boolean; isOnline: boolean; badgeClass: string } {
  const roomLower = (item.room || '').toLowerCase();
  const subjectLower = (item.subject || '').toLowerCase();

  if (roomLower.includes('lab') || subjectLower.includes('lab')) {
    return {
      label: 'LABORATORY',
      isLab: true,
      isOnline: false,
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    };
  }
  if (roomLower.includes('online')) {
    return {
      label: 'ONLINE',
      isLab: false,
      isOnline: true,
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    };
  }
  return {
    label: 'LECTURE',
    isLab: false,
    isOnline: false,
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
  };
}

// Map weekday codes to single letter labels for block view header
const DAY_LETTERS: Record<Weekday, string> = {
  MON: 'M',
  TUE: 'T',
  WED: 'W',
  THU: 'T',
  FRI: 'F',
  SAT: 'S',
};

// Format time range for minimal block cards (e.g., "07:30 AM - 10:30 AM")
function formatBlockTime(startStr: string, endStr: string): string {
  const formatPadded = (t: string) => {
    const mins = timeToMinutes(t);
    if (mins === null) return t;
    const h24 = Math.floor(mins / 60);
    const m = mins % 60;
    const period = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
  };
  return `${formatPadded(startStr)} - ${formatPadded(endStr)}`;
}

// Format room / venue text for minimal block cards (e.g., "(Laboratory | Q-5215)" or "(Lecture | Q-5312)")
function formatBlockVenue(typeInfo: { label: string; isLab: boolean; isOnline: boolean }, room: string): string {
  const cleanRoom = (room || '').trim();
  if (!cleanRoom) {
    return typeInfo.isLab ? '(Laboratory)' : typeInfo.isOnline ? '(Online)' : '(Lecture)';
  }
  if (cleanRoom.toLowerCase() === 'lecture') return '(Lecture)';
  if (cleanRoom.toLowerCase() === 'laboratory') return '(Laboratory)';
  if (cleanRoom.toLowerCase().includes('consultation') || cleanRoom.toLowerCase().includes('prep')) {
    return `(${cleanRoom})`;
  }

  const roomPrefixMatch = cleanRoom.match(/^(?:Laboratory|Lecture)\s*-\s*(.+)$/i);
  if (roomPrefixMatch) {
    const type = typeInfo.isLab ? 'Laboratory' : typeInfo.isOnline ? 'Online' : 'Lecture';
    return `(${type} | ${roomPrefixMatch[1].trim()})`;
  }

  const onlineMatch = cleanRoom.match(/^([^(]+)\s*\((Online)\)$/i);
  if (onlineMatch) {
    return `(Online | ${onlineMatch[1].trim()})`;
  }

  const type = typeInfo.isLab ? 'Laboratory' : typeInfo.isOnline ? 'Online' : 'Lecture';
  return `(${type} | ${cleanRoom})`;
}

// Build timeline blocks (classes and empty gaps) for a specific weekday column
function getDayTimelineBlocks(
  scheduleItems: ScheduleItem[],
  day: Weekday,
  startBaseMin: number,
  endBaseMin: number
) {
  const dayItems = scheduleItems
    .filter((item) => (item.day || '').trim().toUpperCase() === day)
    .sort((a, b) => {
      const sA = timeToMinutes(a.start) || 0;
      const sB = timeToMinutes(b.start) || 0;
      return sA - sB;
    });

  const blocks: Array<{
    isGap: boolean;
    startMin: number;
    endMin: number;
    spanSlots: number;
    item?: ScheduleItem;
    typeInfo?: { label: string; isLab: boolean; isOnline: boolean; badgeClass: string };
  }> = [];

  let currentMin = startBaseMin;

  dayItems.forEach((item) => {
    const sMin = timeToMinutes(item.start);
    const eMin = timeToMinutes(item.end);
    if (sMin === null || eMin === null || eMin <= sMin) return;

    // If there is a gap before this class
    if (sMin > currentMin) {
      const gapSlots = Math.round((sMin - currentMin) / 30);
      if (gapSlots > 0) {
        blocks.push({
          isGap: true,
          startMin: currentMin,
          endMin: sMin,
          spanSlots: gapSlots,
        });
      }
    }

    // Add the class block
    const classSlots = Math.round((eMin - sMin) / 30);
    blocks.push({
      isGap: false,
      startMin: sMin,
      endMin: eMin,
      spanSlots: classSlots,
      item,
      typeInfo: getClassTypeInfo(item),
    });

    currentMin = Math.max(currentMin, eMin);
  });

  // If there is a trailing gap after the last class
  if (currentMin < endBaseMin) {
    const trailingSlots = Math.round((endBaseMin - currentMin) / 30);
    if (trailingSlots > 0) {
      blocks.push({
        isGap: true,
        startMin: currentMin,
        endMin: endBaseMin,
        spanSlots: trailingSlots,
      });
    }
  }

  return blocks;
}

interface ConsultationSlot {
  time: string;
  day: string;
}

interface FacultyConsultation {
  id: number;
  name: string;
  department: string;
  slots: ConsultationSlot[];
  venue: string;
}

const CS_CONSULTATION_HOURS: FacultyConsultation[] = [
  {
    id: 1,
    name: 'BARCELOS, ELSA I.',
    department: 'COMPUTER SCIENCE DEPARTMENT',
    slots: [
      { time: '5:30 PM - 6:30 PM', day: 'Monday' },
      { time: '4:30 PM - 5:30 PM', day: 'Wednesday' },
      { time: '4:30 PM - 6:30 PM', day: 'Thursday' },
    ],
    venue: 'Q-5212 FACULTY CONSULTATION ROOM',
  },
  {
    id: 2,
    name: 'CAPULE, JANICE A.',
    department: 'COMPUTER SCIENCE DEPARTMENT',
    slots: [
      { time: '7:30 AM - 8:30 AM', day: 'Tuesday' },
      { time: '1:30 PM - 3:30 PM', day: 'Tuesday' },
      { time: '3:30 PM - 4:30 PM', day: 'Wednesday' },
      { time: '8:30 AM - 9:30 AM', day: 'Friday' },
    ],
    venue: 'Q-5212 FACULTY CONSULTATION ROOM',
  },
  {
    id: 3,
    name: 'GARCIA, JESS N.',
    department: 'COMPUTER SCIENCE DEPARTMENT',
    slots: [
      { time: '3:30 PM - 4:30 PM', day: 'Monday' },
      { time: '7:30 AM - 10:30 AM', day: 'Thursday' },
    ],
    venue: 'Q-5212 FACULTY CONSULTATION ROOM',
  },
  {
    id: 4,
    name: 'GREGORIO, MONALIZA C.',
    department: 'COMPUTER SCIENCE DEPARTMENT',
    slots: [
      { time: '10:30 AM - 12:30 PM', day: 'Thursday' },
      { time: '10:30 AM - 12:30 PM', day: 'Friday' },
    ],
    venue: 'Q-5212 FACULTY CONSULTATION ROOM',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'consultation'>('schedule');
  const [scheduleFormat, setScheduleFormat] = useState<'grid' | 'blocks' | 'agenda'>('grid');
  const [consultationSearch, setConsultationSearch] = useState<string>('');
  const [consultationDayFilter, setConsultationDayFilter] = useState<string>('ALL');
  const [selectedProfIndex, setSelectedProfIndex] = useState<number>(0);
  const [selectedDayFilter, setSelectedDayFilter] = useState<'ALL' | Weekday>('ALL');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [selectedClassModal, setSelectedClassModal] = useState<{
    item: ScheduleItem;
    day: Weekday;
    formattedTime: string;
    profName: string;
    profTitle: string;
    theme: ColorTheme;
    typeInfo: { label: string; isLab: boolean; isOnline: boolean; badgeClass: string };
  } | null>(null);

  const totalProfessors = professors.length;
  const currentProfessor = totalProfessors > 0 && selectedProfIndex < totalProfessors
    ? professors[selectedProfIndex]
    : null;

  // Process and dynamically compute timetable bounds and schedule items for the currently selected professor
  const { startBaseMin, endBaseMin, totalSlots, timeLabels, validatedSchedule } = useMemo(() => {
    if (!currentProfessor || !currentProfessor.schedule || currentProfessor.schedule.length === 0) {
      const defaultStart = 7.5 * 60; // 07:30
      const defaultEnd = 19.5 * 60;  // 19:30
      const defaultSlots = Math.round((defaultEnd - defaultStart) / 30);
      return {
        startBaseMin: defaultStart,
        endBaseMin: defaultEnd,
        totalSlots: defaultSlots,
        timeLabels: generateTimeLabels(defaultStart, defaultSlots),
        validatedSchedule: [],
      };
    }

    // Find the earliest start time and latest end time across all valid schedule items of this professor
    let earliestMin = Infinity;
    let latestMin = -Infinity;

    currentProfessor.schedule.forEach((item) => {
      const sMin = timeToMinutes(item.start);
      const eMin = timeToMinutes(item.end);
      if (sMin !== null && eMin !== null && eMin > sMin) {
        if (sMin < earliestMin) earliestMin = sMin;
        if (eMin > latestMin) latestMin = eMin;
      }
    });

    if (earliestMin === Infinity || latestMin === -Infinity) {
      earliestMin = 7.5 * 60;
      latestMin = 19.5 * 60;
    }

    // Snap to 30 min boundaries
    const startBaseMin = Math.floor(earliestMin / 30) * 30;
    const endBaseMin = Math.ceil(latestMin / 30) * 30;
    const totalSlots = Math.max(1, Math.round((endBaseMin - startBaseMin) / 30));
    const timeLabels = generateTimeLabels(startBaseMin, totalSlots);

    const validItems: Array<{
      item: ScheduleItem;
      originalIndex: number;
      day: Weekday;
      startSlot: number;
      endSlot: number;
      spanSlots: number;
      formattedTime: string;
      colorTheme: ColorTheme;
      typeInfo: { label: string; isLab: boolean; isOnline: boolean; badgeClass: string };
      colIndex: number; // 0 to 5
      overlapIndex: number;
      overlapTotal: number;
    }> = [];

    currentProfessor.schedule.forEach((item, index) => {
      const upperDay = (item.day || '').trim().toUpperCase() as Weekday;
      if (!WEEKDAYS.includes(upperDay)) {
        console.warn(`[CS Timetable] Professor "${currentProfessor.name}": Invalid day "${item.day}" on schedule item #${index + 1}. Expected one of ${WEEKDAYS.join(', ')}.`);
        return;
      }

      const startMins = timeToMinutes(item.start);
      const endMins = timeToMinutes(item.end);

      if (startMins === null || endMins === null) {
        console.warn(`[CS Timetable] Professor "${currentProfessor.name}": Invalid time format for "${item.courseCode}" (start: "${item.start}", end: "${item.end}"). Must be HH:mm.`);
        return;
      }

      if (endMins <= startMins) {
        console.warn(`[CS Timetable] Professor "${currentProfessor.name}": End time "${item.end}" is not after start time "${item.start}" for "${item.courseCode}".`);
        return;
      }

      if (startMins % 30 !== 0 || endMins % 30 !== 0) {
        console.warn(`[CS Timetable] Professor "${currentProfessor.name}": Time "${item.start} - ${item.end}" for "${item.courseCode}" is not aligned to a 30-minute boundary.`);
        return;
      }

      const startSlot = (startMins - startBaseMin) / 30;
      const endSlot = (endMins - startBaseMin) / 30;
      const spanSlots = endSlot - startSlot;
      const colIndex = WEEKDAYS.indexOf(upperDay);
      const colorTheme = COLOR_THEMES[index % COLOR_THEMES.length];
      const typeInfo = getClassTypeInfo(item);

      validItems.push({
        item,
        originalIndex: index,
        day: upperDay,
        startSlot,
        endSlot,
        spanSlots,
        formattedTime: formatTimeRange(item.start, item.end),
        colorTheme,
        typeInfo,
        colIndex,
        overlapIndex: 0,
        overlapTotal: 1,
      });
    });

    // Detect and handle overlaps within the same weekday column
    WEEKDAYS.forEach((day) => {
      const dayItems = validItems.filter((v) => v.day === day);
      if (dayItems.length <= 1) return;

      // Group mutually overlapping clusters
      const assignedCols: number[] = new Array(dayItems.length).fill(0);

      for (let i = 0; i < dayItems.length; i++) {
        const used = new Set<number>();
        for (let j = 0; j < i; j++) {
          const a = dayItems[i];
          const b = dayItems[j];
          if (a.startSlot < b.endSlot && b.startSlot < a.endSlot) {
            used.add(assignedCols[j]);
          }
        }
        let col = 0;
        while (used.has(col)) {
          col++;
        }
        assignedCols[i] = col;
      }

      // Calculate max columns in each connected component
      for (let i = 0; i < dayItems.length; i++) {
        let maxCol = assignedCols[i];
        for (let j = 0; j < dayItems.length; j++) {
          const a = dayItems[i];
          const b = dayItems[j];
          if (a.startSlot < b.endSlot && b.startSlot < a.endSlot) {
            maxCol = Math.max(maxCol, assignedCols[j]);
          }
        }
        dayItems[i].overlapIndex = assignedCols[i];
        dayItems[i].overlapTotal = maxCol + 1;
      }
    });

    return {
      startBaseMin,
      endBaseMin,
      totalSlots,
      timeLabels,
      validatedSchedule: validItems,
    };
  }, [currentProfessor]);

  const filteredConsultations = useMemo(() => {
    return CS_CONSULTATION_HOURS.filter((faculty) => {
      const q = consultationSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        faculty.name.toLowerCase().includes(q) ||
        faculty.slots.some(
          (s) => s.day.toLowerCase().includes(q) || s.time.toLowerCase().includes(q)
        );

      const matchDay =
        consultationDayFilter === 'ALL' ||
        faculty.slots.some((s) => s.day.toLowerCase() === consultationDayFilter.toLowerCase());

      return matchSearch && matchDay;
    });
  }, [consultationSearch, consultationDayFilter]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const currentInitials = currentProfessor ? deriveInitials(currentProfessor.name) : 'CS';
  const currentPhotoFailed = failedImages[selectedProfIndex] || !currentProfessor?.photo;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf2fd] via-[#f4f8fe] to-white bg-grid-pattern relative text-[#0c1f38] flex flex-col justify-between overflow-x-hidden">
      {/* Soft blurred ambient decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 md:w-[540px] md:h-[540px] rounded-full bg-blue-400/10 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[520px] -left-32 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-cyan-400/10 blur-3xl z-0"
      />

      {/* 2. Responsive Header - Clean, Organised, No Screenshot/Print Button */}
      <header className="sticky top-0 z-40 w-full min-h-[72px] md:min-h-[84px] bg-white/90 backdrop-blur-md border-b border-blue-100/90 transition-all shadow-xs">
        <div className="max-w-[1600px] mx-auto px-3.5 sm:px-5 md:px-6 py-2.5 sm:py-0 min-h-[72px] md:min-h-[84px] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: Department Mark & Title */}
          <div className="flex items-center gap-3 sm:gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-3">
              <div
                className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-[13px] bg-gradient-to-br from-[#0f2854] to-[#1e58b8] shadow-md shadow-blue-900/15 flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 select-none shrink-0"
                aria-hidden="true"
              >
                <span className="font-heading font-black text-white text-[18px] sm:text-[20px] tracking-wide rotate-3">
                  CS
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-blue-900/70 leading-tight">
                  COLLEGE OF COMPUTER STUDIES
                </span>
                <h1 className="text-[15px] sm:text-[18px] font-heading font-black tracking-tight leading-snug">
                  <span className="text-[#0284c7]">Computer Science</span>{' '}
                  <span className="text-[#0c1f38]">Department</span>
                </h1>
              </div>
            </div>

            {/* Mobile-only Academic Term Badge */}
            <div className="sm:hidden px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[10px] font-bold text-[#0c1f38]">
              1st Sem · AY 26–27
            </div>
          </div>

          {/* Right: The ONLY two tabs - Schedule and Consultation */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <div className="inline-flex p-1 bg-blue-100/80 rounded-xl border border-blue-200/80 shadow-2xs w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-[12.5px] sm:text-[13.5px] font-heading font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-[#0f2854] text-white shadow-xs'
                    : 'text-blue-900/80 hover:text-[#0f2854] hover:bg-white/60'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Schedule</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('consultation')}
                className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-[12.5px] sm:text-[13.5px] font-heading font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'consultation'
                    ? 'bg-[#0f2854] text-white shadow-xs'
                    : 'text-blue-900/80 hover:text-[#0f2854] hover:bg-white/60'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Consultation</span>
              </button>
            </div>

            {/* Desktop Academic Term Badge */}
            <div className="hidden min-[960px]:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-950 shadow-xs">
              <svg
                className="w-4 h-4 text-[#0284c7] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] font-bold uppercase tracking-wider text-blue-800/70">
                  ACADEMIC YEAR
                </span>
                <span className="text-[12px] font-heading font-bold text-[#0c1f38] mt-0.5">
                  2026–2027 · 1ST Semester
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-3 sm:px-5 md:px-6 relative z-10 pb-16">
        {activeTab === 'schedule' && (
          <>
            {/* 3. Hero Landing Section with generous comfortable spacing */}
            <section className="pt-10 sm:pt-14 md:pt-18 pb-8 sm:pb-10 md:pb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
              <div className="max-w-[840px]">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/80 shadow-2xs">
                  <span className="w-2 h-2 bg-[#0284c7] rounded-full inline-block animate-pulse" />
                  <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">
                    FACULTY DIRECTORY & TIMETABLES
                  </span>
                </div>

                <h2 className="font-heading font-black text-[32px] sm:text-[46px] md:text-[58px] leading-[1.08] tracking-tight text-[#0c1f38]">
                  Find your professor.
                  <br />
                  <span className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0f2854] bg-clip-text text-transparent">
                    Plan your week.
                  </span>
                </h2>

                <p className="mt-4 text-[14.5px] sm:text-[16.5px] text-[#475569] leading-relaxed max-w-[640px]">
                  Browse official class schedules, laboratory rooms, and teaching hours for Computer Science faculty members. Select a professor below to view their weekly timetable and schedule details.
                </p>
              </div>

              {/* Professor Statistic Card */}
              <div className="flex items-center gap-4 sm:gap-6 self-start md:self-auto pl-0 md:pl-8 md:border-l-2 border-blue-200/80 shrink-0 bg-white/70 md:bg-transparent p-4 sm:p-5 md:p-0 rounded-2xl border md:border-0 border-blue-100 shadow-xs md:shadow-none w-full sm:w-auto">
                <div className="flex flex-col">
                  <span className="font-heading font-black text-[42px] sm:text-[52px] leading-none text-[#0f2854] tracking-tight">
                    {String(totalProfessors).padStart(2, '0')}
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-blue-900 mt-1 leading-tight">
                    CS Faculty Members
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-blue-600 font-semibold">
                    Teaching & Consultation
                  </span>
                </div>
              </div>
            </section>

            {/* 4. Professor Folder Navigation */}
            <section aria-label="Professor Folder Selection" className="mt-2">
              <div className="mb-2.5 px-1 flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-900/80">
                  CHOOSE A PROFESSOR
                </span>
                <span className="text-[11px] font-semibold text-blue-700/70 hidden sm:inline">
                  ← Scroll tabs horizontally →
                </span>
              </div>

              {/* Mobile Quick Dropdown Selector for instant switching on phones */}
              <div className="md:hidden mb-3">
                <div className="relative">
                  <select
                    id="mobile-prof-select"
                    value={selectedProfIndex}
                    onChange={(e) => setSelectedProfIndex(Number(e.target.value))}
                    className="w-full bg-white border-2 border-blue-200 rounded-xl px-4 py-3 text-[14px] font-heading font-extrabold text-[#0c1f38] shadow-xs focus:ring-2 focus:ring-[#0284c7] focus:outline-none appearance-none cursor-pointer"
                    aria-label="Select Professor"
                  >
                    {professors.map((p, pIdx) => (
                      <option key={pIdx} value={pIdx}>
                        {String(pIdx + 1).padStart(2, '0')}. {p.name} — {p.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-900">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Horizontally scrollable Folder Tabs */}
              <div
                role="tablist"
                aria-label="Computer Science Professors"
                className="flex items-end overflow-x-auto no-scrollbar pt-3 pb-0 -mb-[1px] gap-2 md:gap-2.5 z-20 relative px-1 scroll-smooth"
              >
                {professors.map((prof, idx) => {
                  const isActive = idx === selectedProfIndex;
                  const twoDigitNum = String(idx + 1).padStart(2, '0');
                  const tabId = `prof-tab-${idx}`;
                  const panelId = `prof-panel-${idx}`;
                  const bgColor = TAB_BG_COLORS[idx % TAB_BG_COLORS.length];

                  return (
                    <button
                      key={idx}
                      id={tabId}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setSelectedProfIndex(idx)}
                      style={{
                        backgroundColor: isActive ? '#ffffff' : bgColor,
                      }}
                      className={`folder-tab relative flex items-center gap-2.5 px-3.5 sm:px-4 md:px-5 rounded-t-[14px] rounded-b-none transition-all duration-200 cursor-pointer select-none text-left shrink-0 min-w-[175px] sm:min-w-[195px] md:min-w-[215px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset ${
                        isActive
                          ? 'active-tab h-[68px] text-[#0c1f38] shadow-[0_-6px_20px_rgba(15,40,84,0.09)] z-30 font-bold border-t border-l border-blue-100/90'
                          : 'h-[56px] hover:h-[62px] focus-visible:h-[62px] text-white/95 opacity-90 hover:opacity-100 shadow-xs z-10 font-medium'
                      }`}
                    >
                      <span
                        className={`font-heading text-[13px] md:text-[14px] font-extrabold px-1.5 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-blue-100/80 text-[#0284c7]'
                            : 'bg-white/20 text-white'
                        }`}
                      >
                        {twoDigitNum}
                      </span>
                      <div className="flex flex-col truncate">
                        <span className="text-[14px] md:text-[15.5px] truncate tracking-tight font-heading font-extrabold">
                          {prof.name}
                        </span>
                        <span className={`text-[11px] md:text-[12px] uppercase tracking-wider truncate font-bold ${isActive ? 'text-blue-700' : 'text-cyan-200'}`}>
                          {prof.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 5. Main Schedule Panel */}
            <section
              id={`prof-panel-${selectedProfIndex}`}
              role="tabpanel"
              aria-labelledby={`prof-tab-${selectedProfIndex}`}
              className="relative z-20 bg-white/95 backdrop-blur-sm border border-blue-100/90 rounded-[22px] overflow-hidden shadow-[0_20px_50px_rgba(15,40,84,0.08)]"
            >
              {totalProfessors === 0 || !currentProfessor ? (
                <div className="p-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#0c1f38]">
                    No professor schedules available.
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Please add faculty members to the professors array to view their timetables.
                  </p>
                </div>
              ) : (
                <div key={selectedProfIndex} className="animate-content-switch">
                  {/* 6. Professor Summary Banner */}
                  <div className="relative min-h-[110px] md:min-h-[130px] py-5 md:py-6 px-4 sm:px-6 md:px-[34px] flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 border-b border-blue-100/80 bg-gradient-to-r from-white via-white to-blue-50/40 overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-cyan-200/30 blur-2xl z-0"
                    />

                    {/* Left: Avatar and Identity */}
                    <div className="flex items-center gap-3.5 sm:gap-5 relative z-10">
                      <div className="w-[66px] h-[66px] sm:w-[76px] sm:h-[76px] md:w-[84px] md:h-[84px] rounded-[20px] md:rounded-[24px] border-[3px] md:border-[4px] border-cyan-100/90 shadow-md shadow-blue-950/10 bg-gradient-to-br from-[#0f2854] to-[#0284c7] overflow-hidden shrink-0 flex items-center justify-center relative">
                        <span className="font-heading font-black text-white text-[20px] md:text-[24px] select-none">
                          {currentInitials}
                        </span>

                        {currentProfessor.photo && !currentPhotoFailed && (
                          <img
                            src={currentProfessor.photo}
                            alt={`Portrait of ${currentProfessor.name}`}
                            onError={() => handleImageError(selectedProfIndex)}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                          />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10.5px] sm:text-[11.5px] font-extrabold uppercase tracking-wider text-[#0284c7] leading-none mb-1">
                          VIEWING SCHEDULE FOR
                        </span>
                        <h3 className="font-heading font-black text-[22px] sm:text-[26px] md:text-[30px] text-[#0c1f38] leading-tight">
                          {currentProfessor.name}
                        </h3>
                        <p className="text-[13.5px] sm:text-[15px] md:text-[16px] text-blue-900 font-bold mt-0.5 line-clamp-1">
                          {currentProfessor.title}
                        </p>
                      </div>
                    </div>

                    {/* Right: Sub-View Options (Time Table, Block Format, Day Agenda) & Meetings count */}
                    <div className="flex items-center justify-between lg:justify-end gap-3 sm:gap-4 relative z-10 pt-3 lg:pt-0 border-t lg:border-t-0 border-blue-100">
                      {/* Schedule Format Sub-Tabs */}
                      <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                        <span className="hidden xl:inline text-[11px] font-extrabold uppercase tracking-wider text-blue-900/70">
                          View Mode:
                        </span>
                        <div className="inline-flex p-1 bg-blue-100/70 rounded-xl border border-blue-200/60 shadow-2xs w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => setScheduleFormat('grid')}
                            className={`flex-1 sm:flex-none px-3 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-[12.5px] font-heading font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              scheduleFormat === 'grid'
                                ? 'bg-[#0f2854] text-white shadow-xs'
                                : 'text-blue-900/80 hover:text-[#0f2854] hover:bg-white/50'
                            }`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                            </svg>
                            <span>Time Table</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setScheduleFormat('blocks')}
                            className={`flex-1 sm:flex-none px-3 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-[12.5px] font-heading font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              scheduleFormat === 'blocks'
                                ? 'bg-[#0f2854] text-white shadow-xs'
                                : 'text-blue-900/80 hover:text-[#0f2854] hover:bg-white/50'
                            }`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="3" y="3" width="7" height="8" rx="2" strokeWidth="2" />
                              <rect x="14" y="3" width="7" height="12" rx="2" strokeWidth="2" />
                              <rect x="3" y="14" width="7" height="7" rx="2" strokeWidth="2" />
                              <rect x="14" y="18" width="7" height="3" rx="1.5" strokeWidth="2" />
                            </svg>
                            <span>Block Format</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setScheduleFormat('agenda')}
                            className={`flex-1 sm:flex-none px-3 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-[12.5px] font-heading font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              scheduleFormat === 'agenda'
                                ? 'bg-[#0f2854] text-white shadow-xs'
                                : 'text-blue-900/80 hover:text-[#0f2854] hover:bg-white/50'
                            }`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            <span>Day Agenda</span>
                          </button>
                        </div>
                      </div>

                      {/* Class Meetings Counter */}
                      <div className="hidden sm:flex items-center pl-4 border-l border-blue-200/80 shrink-0">
                        <div className="flex flex-col text-right">
                          <span className="font-heading font-black text-[28px] md:text-[32px] leading-none text-[#0f2854]">
                            {String(currentProfessor.schedule?.length || 0).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-blue-900/70 mt-0.5">
                            MEETINGS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 7. Weekly Timetable Section */}
                  <div className="px-3 sm:px-6 md:px-[34px] pt-5 pb-8">
                    {/* Header Row with Day Filters */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest text-[#0284c7]">
                          {scheduleFormat === 'grid' ? 'WEEKLY TIME TABLE' : scheduleFormat === 'blocks' ? 'BLOCK SCHEDULE' : 'DAILY AGENDA TIMELINE'}
                        </span>
                        <h4 className="font-heading font-black text-[17px] sm:text-[20px] text-[#0c1f38] leading-tight">
                          {scheduleFormat === 'grid' ? 'Monday to Saturday (6:30 AM – 8:30 PM)' : scheduleFormat === 'blocks' ? 'Proportional Day Blocks' : 'Day-by-Day Schedule'}
                        </h4>
                      </div>

                      {/* Quick Day Filter Buttons */}
                      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
                        <button
                          type="button"
                          onClick={() => setSelectedDayFilter('ALL')}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] font-heading font-extrabold transition-colors cursor-pointer shrink-0 ${
                            selectedDayFilter === 'ALL'
                              ? 'bg-[#0f2854] text-white shadow-2xs'
                              : 'bg-blue-50 text-blue-900 hover:bg-blue-100/70 border border-blue-200/60'
                          }`}
                        >
                          ALL DAYS
                        </button>
                        {WEEKDAYS.map((day) => {
                          const countForDay = validatedSchedule.filter((item) => item.day === day).length;
                          const isFilterActive = selectedDayFilter === day;

                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => setSelectedDayFilter(day)}
                              className={`px-2.5 py-1.5 rounded-md text-[11px] font-heading font-extrabold transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                                isFilterActive
                                  ? 'bg-[#0284c7] text-white shadow-2xs'
                                  : 'bg-blue-50 text-blue-900 hover:bg-blue-100/70 border border-blue-200/60'
                              }`}
                            >
                              <span>{day}</span>
                              {countForDay > 0 && (
                                <span
                                  className={`text-[9px] px-1 rounded-full ${
                                    isFilterActive ? 'bg-white/25 text-white' : 'bg-blue-200/80 text-blue-950'
                                  }`}
                                >
                                  {countForDay}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* VIEW MODE 1: TIME TABLE (Default View with Horizontal Scroll & Sticky Time on Mobile) */}
                    {scheduleFormat === 'grid' && (
                      <div>
                        {/* Mobile Swipe Tip */}
                        <div className="md:hidden flex items-center justify-between px-3 py-2 bg-blue-50/90 rounded-xl border border-blue-200/80 mb-3 text-[11.5px] font-bold text-blue-900 shadow-2xs">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-[#0284c7] shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Swipe horizontally to view Mon–Sat
                          </span>
                          <span className="text-[10px] text-blue-800 uppercase tracking-wider font-extrabold bg-white px-2 py-0.5 rounded shadow-2xs">
                            Sticky Time
                          </span>
                        </div>

                        <div className="border border-blue-200/80 rounded-[18px] bg-white w-full overflow-x-auto custom-timetable-scrollbar shadow-xs">
                          <div className="min-w-[760px] md:min-w-0 w-full select-none">
                            {/* Header Row */}
                            <div className="grid grid-cols-[68px_repeat(6,minmax(0,1fr))] sm:grid-cols-[78px_repeat(6,minmax(0,1fr))] md:grid-cols-[88px_repeat(6,minmax(0,1fr))] bg-gradient-to-r from-[#0c1f38] via-[#1a4a8b] to-[#0284c7] min-h-[52px] items-center text-white border-b border-blue-900/20">
                              {/* Sticky TIME Column Header */}
                              <div className="sticky left-0 z-30 text-center font-heading text-[12.5px] sm:text-[14px] md:text-[15px] font-black tracking-wider text-cyan-200 bg-[#0c1f38] h-full flex items-center justify-center border-r border-white/20 shadow-sm">
                                TIME
                              </div>
                              {/* Weekday Headers */}
                              {WEEKDAYS.map((day, idx) => (
                                <div
                                  key={day}
                                  className={`text-center font-heading text-[13.5px] sm:text-[15px] md:text-[16.5px] font-black tracking-wider uppercase h-full flex items-center justify-center ${
                                    idx < WEEKDAYS.length - 1 ? 'border-r border-white/10' : ''
                                  } ${selectedDayFilter !== 'ALL' && selectedDayFilter !== day ? 'opacity-40' : ''}`}
                                >
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Timetable Body Grid */}
                            <div className="relative grid grid-cols-[68px_repeat(6,minmax(0,1fr))] sm:grid-cols-[78px_repeat(6,minmax(0,1fr))] md:grid-cols-[88px_repeat(6,minmax(0,1fr))]">
                              {/* Sticky Left: Time Labels Column */}
                              <div className="sticky left-0 z-20 flex flex-col bg-slate-50/98 backdrop-blur-md border-r border-blue-200/90 shadow-[4px_0_10px_rgba(15,40,84,0.08)]">
                                {timeLabels.map((timeLabel, rIdx) => (
                                  <div
                                    key={rIdx}
                                    style={{ height: `${SLOT_HEIGHT}px` }}
                                    className={`flex items-center justify-center text-[11px] sm:text-[12.5px] md:text-[13.5px] font-bold text-slate-700 border-b border-blue-100/80 px-0.5 sm:px-1 ${
                                      rIdx % 2 === 0 ? 'bg-slate-50/90' : 'bg-white/90'
                                    }`}
                                  >
                                    {timeLabel}
                                  </div>
                                ))}
                              </div>

                              {/* 6 Weekday Columns & Background Grid Cells */}
                              {WEEKDAYS.map((day, colIdx) => {
                                const isDimmed = selectedDayFilter !== 'ALL' && selectedDayFilter !== day;

                                return (
                                  <div
                                    key={day}
                                    className={`relative flex flex-col ${
                                      colIdx < WEEKDAYS.length - 1 ? 'border-r border-blue-100' : ''
                                    } ${isDimmed ? 'bg-slate-100/30' : ''}`}
                                  >
                                    {Array.from({ length: totalSlots }).map((_, rIdx) => (
                                      <div
                                        key={rIdx}
                                        style={{ height: `${SLOT_HEIGHT}px` }}
                                        className={`border-b border-blue-100/60 ${
                                          rIdx % 2 === 0 ? 'bg-transparent' : 'bg-blue-50/20'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                );
                              })}

                              {/* 8. Timetable Scheduled Events Overlay */}
                              <div
                                className="absolute inset-y-0 left-[68px] sm:left-[78px] md:left-[88px] right-0 grid grid-cols-6 pointer-events-none"
                                style={{
                                  height: `${totalSlots * SLOT_HEIGHT}px`,
                                }}
                              >
                                {WEEKDAYS.map((day, colIdx) => {
                                  const eventsForDay = validatedSchedule.filter((e) => e.colIndex === colIdx);
                                  const isDimmed = selectedDayFilter !== 'ALL' && selectedDayFilter !== day;

                                  return (
                                    <div key={day} className={`relative h-full w-full ${isDimmed ? 'opacity-25' : ''}`}>
                                      {eventsForDay.map((eventData, eIdx) => {
                                        const topPx = eventData.startSlot * SLOT_HEIGHT;
                                        const heightPx = eventData.spanSlots * SLOT_HEIGHT;
                                        const theme = eventData.colorTheme;
                                        const isShortSlot = eventData.spanSlots === 1; // 30 mins
                                        const isOneHour = eventData.spanSlots === 2; // 1 hour
                                        const isLongSlot = eventData.spanSlots >= 3; // 1.5h to 3h (e.g. Laboratory)

                                        // Sub-column offset for overlapping classes within the same day
                                        const widthPercent = 100 / eventData.overlapTotal;
                                        const leftPercent = eventData.overlapIndex * widthPercent;

                                        return (
                                          <article
                                            key={`${eventData.item.courseCode}-${eventData.originalIndex}-${eIdx}`}
                                            tabIndex={0}
                                            role="button"
                                            onClick={() => setSelectedClassModal({
                                              item: eventData.item,
                                              day: eventData.day,
                                              formattedTime: eventData.formattedTime,
                                              profName: currentProfessor.name,
                                              profTitle: currentProfessor.title,
                                              theme,
                                              typeInfo: eventData.typeInfo,
                                            })}
                                            onKeyDown={(e) => {
                                              if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setSelectedClassModal({
                                                  item: eventData.item,
                                                  day: eventData.day,
                                                  formattedTime: eventData.formattedTime,
                                                  profName: currentProfessor.name,
                                                  profTitle: currentProfessor.title,
                                                  theme,
                                                  typeInfo: eventData.typeInfo,
                                                });
                                              }
                                            }}
                                            title={`Click for details: ${eventData.item.courseCode} - ${eventData.item.subject} (${eventData.formattedTime}, ${eventData.item.room})`}
                                            aria-label={`${eventData.day}, ${eventData.formattedTime}, ${eventData.item.subject}, Section ${eventData.item.section}, Room ${eventData.item.room}`}
                                            style={{
                                              top: `${topPx + 2}px`,
                                              height: `${heightPx - 4}px`,
                                              left: `calc(${leftPercent}% + 2px)`,
                                              width: `calc(${widthPercent}% - 4px)`,
                                              animationDelay: `${eIdx * 30}ms`,
                                            }}
                                            className={`absolute pointer-events-auto rounded-[10px] ${
                                              isShortSlot ? 'p-1 sm:p-1.5' : isOneHour ? 'p-1.5 sm:p-2.5' : 'p-2 sm:p-3'
                                            } flex flex-col justify-between overflow-hidden transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:z-30 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none animate-event-card ${theme.cardClasses} ${theme.leftBorder}`}
                                          >
                                            {isShortSlot ? (
                                              <div className="flex flex-col justify-between h-full w-full overflow-hidden leading-none">
                                                <div className="flex items-center justify-between gap-1">
                                                  <span className={`text-[12px] sm:text-[14px] font-heading font-black tracking-tight truncate ${theme.codeClasses}`}>
                                                    {eventData.item.courseCode}
                                                  </span>
                                                  <span className={`text-[9.5px] sm:text-[10.5px] px-1 py-0.5 rounded uppercase tracking-wider shrink-0 font-extrabold ${theme.badgeClasses}`}>
                                                    {eventData.item.section}
                                                  </span>
                                                </div>
                                                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight truncate min-w-0" title={eventData.item.room}>
                                                  <svg className="w-3 h-3 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  </svg>
                                                  <span className="truncate">{eventData.item.room}</span>
                                                </div>
                                              </div>
                                            ) : (
                                              <>
                                                {/* UPPER SECTION: Course Code & Section */}
                                                <div className="flex flex-col gap-0.5 w-full">
                                                  <div className="flex items-center justify-between gap-1 leading-none">
                                                    <div className="flex items-center gap-1.5 min-w-0">
                                                      <span className={`text-[13.5px] sm:text-[15.5px] md:text-[17px] font-heading font-black tracking-tight truncate ${theme.codeClasses}`}>
                                                        {eventData.item.courseCode}
                                                      </span>
                                                      <span className={`text-[10px] sm:text-[11px] md:text-[12px] px-1.5 py-0.5 rounded-sm uppercase tracking-wider shrink-0 font-extrabold ${theme.badgeClasses}`}>
                                                        {eventData.item.section}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                {/* MIDDLE SECTION: Full Subject Name */}
                                                <div className="my-0.5 overflow-hidden">
                                                  <h5
                                                    className={`font-heading font-extrabold text-[12px] sm:text-[13px] md:text-[14px] leading-tight ${
                                                      isLongSlot ? 'line-clamp-3' : 'line-clamp-2'
                                                    } ${theme.textColor}`}
                                                  >
                                                    {eventData.item.subject}
                                                  </h5>
                                                </div>

                                                {/* BOTTOM SECTION: Room / Venue with full width */}
                                                <div className="mt-auto pt-1 flex items-center gap-1.5 text-[11.5px] sm:text-[12.5px] md:text-[13.5px] border-t border-black/10 leading-tight min-w-0 overflow-hidden font-black text-slate-800" title={eventData.item.room}>
                                                  <svg className="w-3.5 h-3.5 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  </svg>
                                                  <span className="truncate">{eventData.item.room}</span>
                                                </div>
                                              </>
                                            )}
                                          </article>
                                        );
                                      })}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW MODE 2: MINIMAL ROUNDED BLOCKS VIEW */}
                    {scheduleFormat === 'blocks' && (
                      <div className="w-full bg-[#eef5fc] rounded-[24px] p-3.5 sm:p-6 border border-blue-200/80 shadow-xs overflow-x-auto custom-timetable-scrollbar">
                        <div className="min-w-[720px]">
                          {/* 1. Day Pill Headers: M, T, W, T, F, S */}
                          <div className="grid grid-cols-6 gap-2.5 sm:gap-3.5 mb-3.5">
                            {WEEKDAYS.map((day) => (
                              <div
                                key={day}
                                className={`bg-white rounded-full py-2 sm:py-2.5 flex items-center justify-center shadow-[0_2px_8px_rgba(15,40,84,0.04)] border border-blue-100/90 transition-opacity ${
                                  selectedDayFilter !== 'ALL' && selectedDayFilter !== day ? 'opacity-35' : ''
                                }`}
                              >
                                <span className="font-heading font-black text-[20px] sm:text-[24px] text-slate-500/90 tracking-wide select-none">
                                  {DAY_LETTERS[day]}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* 2. 6 Daily Columns of Proportional Class Blocks & Neutral Grey Gaps */}
                          <div className="grid grid-cols-6 gap-2.5 sm:gap-3.5 items-start">
                            {WEEKDAYS.map((day) => {
                              const isDimmed = selectedDayFilter !== 'ALL' && selectedDayFilter !== day;
                              const blocks = getDayTimelineBlocks(
                                currentProfessor.schedule,
                                day,
                                startBaseMin,
                                endBaseMin
                              );

                              return (
                                <div
                                  key={day}
                                  className={`flex flex-col gap-2.5 sm:gap-3 transition-opacity ${
                                    isDimmed ? 'opacity-30' : ''
                                  }`}
                                >
                                  {blocks.map((block, bIdx) => {
                                    if (block.isGap) {
                                      const gapHeightPx = Math.max(36, block.spanSlots * 44 + (block.spanSlots - 1) * 8);
                                      return (
                                        <div
                                          key={bIdx}
                                          style={{ minHeight: `${gapHeightPx}px`, height: `${gapHeightPx}px` }}
                                          className="bg-[#d2d6db] rounded-[18px] sm:rounded-[20px] w-full shrink-0 shadow-2xs transition-all"
                                          aria-label="Free period"
                                        />
                                      );
                                    }

                                    const item = block.item!;
                                    const typeInfo = block.typeInfo!;
                                    const classHeightPx = Math.max(76, block.spanSlots * 72 + (block.spanSlots - 1) * 10);

                                    return (
                                      <div
                                        key={bIdx}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setSelectedClassModal({
                                          item,
                                          day,
                                          formattedTime: formatBlockTime(item.start, item.end),
                                          profName: currentProfessor.name,
                                          profTitle: currentProfessor.title,
                                          theme: COLOR_THEMES[bIdx % COLOR_THEMES.length],
                                          typeInfo,
                                        })}
                                        onKeyDown={(e) => {
                                          if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedClassModal({
                                              item,
                                              day,
                                              formattedTime: formatBlockTime(item.start, item.end),
                                              profName: currentProfessor.name,
                                              profTitle: currentProfessor.title,
                                              theme: COLOR_THEMES[bIdx % COLOR_THEMES.length],
                                              typeInfo,
                                            });
                                          }
                                        }}
                                        style={{ minHeight: `${classHeightPx}px`, height: `${classHeightPx}px` }}
                                        className="bg-[#cde8fd] hover:bg-[#bfe2fd] border border-[#b4daf9] rounded-[18px] sm:rounded-[20px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-xs cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all shrink-0 overflow-hidden select-none"
                                        title={`${item.courseCode} - ${item.subject} (${item.start}-${item.end})`}
                                      >
                                        {/* Line 1: Time */}
                                        <span className="font-extrabold text-[10px] sm:text-[11px] text-slate-800 uppercase tracking-tight leading-none shrink-0">
                                          {formatBlockTime(item.start, item.end)}
                                        </span>

                                        {/* Line 2: Course Code */}
                                        <span className="font-heading font-black text-[14px] sm:text-[16px] text-slate-950 leading-tight mt-1 shrink-0">
                                          {item.courseCode}
                                        </span>

                                        {/* Line 3: Section */}
                                        <span className="font-bold text-[10.5px] sm:text-[11.5px] text-slate-700 leading-tight mt-0.5 shrink-0">
                                          {item.section.startsWith('SEC') ? item.section : `SEC ${item.section}`}
                                        </span>

                                        {/* Line 4: Type | Room */}
                                        <span className="font-semibold text-[9.5px] sm:text-[10.5px] text-slate-600 leading-tight mt-0.5 truncate max-w-full px-1 shrink-0">
                                          {formatBlockVenue(typeInfo, item.room)}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW MODE 3: RESPONSIVE DAY-BY-DAY AGENDA VIEW (Mobile-First / Compact Devices) */}
                    {scheduleFormat === 'agenda' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {WEEKDAYS.filter((d) => selectedDayFilter === 'ALL' || selectedDayFilter === d).map((day) => {
                          const dayEvents = validatedSchedule.filter((e) => e.day === day);

                          return (
                            <div
                              key={day}
                              className="bg-slate-50/80 border border-blue-100/90 rounded-[20px] p-4 sm:p-5 flex flex-col shadow-2xs"
                            >
                              {/* Day Header */}
                              <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                                <div className="flex items-center gap-2.5">
                                  <span className="w-8 h-8 rounded-xl bg-[#0f2854] text-white font-heading font-extrabold text-[13px] flex items-center justify-center">
                                    {day.slice(0, 2)}
                                  </span>
                                  <h5 className="font-heading font-black text-[16.5px] text-[#0c1f38]">
                                    {day === 'MON' && 'Monday'}
                                    {day === 'TUE' && 'Tuesday'}
                                    {day === 'WED' && 'Wednesday'}
                                    {day === 'THU' && 'Thursday'}
                                    {day === 'FRI' && 'Friday'}
                                    {day === 'SAT' && 'Saturday'}
                                  </h5>
                                </div>
                                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200/70">
                                  {dayEvents.length} {dayEvents.length === 1 ? 'class' : 'classes'}
                                </span>
                              </div>

                              {/* Day Event Items */}
                              {dayEvents.length === 0 ? (
                                <div className="py-8 text-center text-slate-400 text-[13px] font-medium italic">
                                  No classes scheduled
                                </div>
                              ) : (
                                <div className="flex flex-col gap-2.5">
                                  {dayEvents.map((ev, idx) => (
                                    <div
                                      key={idx}
                                      onClick={() => setSelectedClassModal({
                                        item: ev.item,
                                        day: ev.day,
                                        formattedTime: ev.formattedTime,
                                        profName: currentProfessor.name,
                                        profTitle: currentProfessor.title,
                                        theme: ev.colorTheme,
                                        typeInfo: ev.typeInfo,
                                      })}
                                      className="p-3.5 bg-white rounded-[14px] border border-blue-100/90 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer text-left flex flex-col gap-2"
                                    >
                                      {/* Upper line: Code, Section & Lab badge */}
                                      <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-1.5">
                                          <span className="font-heading font-black text-[14px] text-blue-950">
                                            {ev.item.courseCode}
                                          </span>
                                          <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-blue-50 text-blue-800 border border-blue-200 font-extrabold uppercase">
                                            {ev.item.section}
                                          </span>
                                        </div>
                                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase border ${ev.typeInfo.badgeClass}`}>
                                          {ev.typeInfo.label}
                                        </span>
                                      </div>

                                      {/* Subject Title */}
                                      <h6 className="font-heading font-bold text-[13.5px] text-[#0c1f38] leading-snug line-clamp-2">
                                        {ev.item.subject}
                                      </h6>

                                      {/* Time & Room info */}
                                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11.5px] font-medium text-slate-600">
                                        <span className="font-bold text-blue-700 flex items-center gap-1">
                                          <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
                                          </svg>
                                          {ev.formattedTime}
                                        </span>
                                        <span className="font-bold text-slate-700 truncate max-w-[150px] flex items-center gap-1" title={ev.item.room}>
                                          <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                          {ev.item.room}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 9. Panel Footer */}
              <div className="bg-[#f0f6fe] border-t border-blue-100/90 min-h-[58px] px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <span className="text-[12px] md:text-[13px] font-medium text-blue-900/75">
                  Click on any class block to view complete course, time, room, and faculty details.
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800/60">
                  OFFICIAL CS TIMETABLE
                </span>
              </div>
            </section>
          </>
        )}

        {/* Consultation Hours Tab - Official TIP-ACAD-016 Format for CS Department */}
        {activeTab === 'consultation' && (
          <section className="pt-8 md:pt-12 animate-fadeIn">
            {/* Header / Intro banner */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/80 shadow-2xs">
                  <span className="w-2 h-2 bg-[#0284c7] rounded-full inline-block animate-pulse" />
                  <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">
                    ACADEMIC CONSULTATION HOURS
                  </span>
                </div>
                <h2 className="font-heading font-black text-[28px] sm:text-[38px] md:text-[44px] leading-[1.1] text-[#0c1f38]">
                  Faculty Consultation Schedule
                </h2>
                <p className="mt-2 text-[14px] sm:text-[16px] text-slate-600 max-w-[620px]">
                  Official faculty consultation hours and venue for the Computer Science Department (Form TIP-ACAD-016).
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0f2854] to-[#0284c7] text-white font-heading font-bold text-[13px] shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Filter and Search Bar (Hidden when printed) */}
            <div className="no-print bg-white/95 backdrop-blur-sm border border-blue-100 rounded-[20px] p-4 sm:p-5 mb-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3.5">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search faculty, day, or time..."
                  value={consultationSearch}
                  onChange={(e) => setConsultationSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-blue-200/80 rounded-xl text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all"
                />
              </div>

              {/* Day filter chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
                {['ALL', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setConsultationDayFilter(day)}
                    className={`px-3 py-1.5 rounded-lg text-[12px] font-heading font-extrabold transition-all cursor-pointer shrink-0 ${
                      consultationDayFilter === day
                        ? 'bg-[#0f2854] text-white shadow-2xs'
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100/80 border border-blue-200/60'
                    }`}
                  >
                    {day === 'ALL' ? 'All Days' : day}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Container matching TIP-ACAD-016 */}
            <div className="print-area bg-white border-2 border-slate-800 rounded-[22px] p-4 sm:p-8 md:p-10 shadow-lg print:border-none print:shadow-none print:p-0 overflow-hidden">
              {/* Top Document Header Form Code */}
              <div className="flex justify-end mb-4">
                <div className="text-right font-sans text-[11px] sm:text-[12px] tracking-wider text-slate-700 font-bold">
                  <div className="tracking-[0.15em]">TIP · ACAD · 016</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold italic mt-0.5">
                    Revision Status / Date: 0/2025 May 20
                  </div>
                </div>
              </div>

              {/* Institution Title & Details */}
              <div className="text-center mb-6 sm:mb-8 border-b-2 border-slate-800 pb-5 sm:pb-6">
                <h2 className="font-sans font-black tracking-[0.18em] sm:tracking-[0.22em] text-[15px] sm:text-[20px] md:text-[22px] text-slate-900 uppercase">
                  TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES
                </h2>
                <h3 className="font-heading font-extrabold text-[14px] sm:text-[17px] tracking-wide text-slate-800 uppercase mt-2 underline decoration-1 underline-offset-4">
                  FACULTY CONSULTATION HOURS
                </h3>
                <h4 className="font-heading font-black text-[13px] sm:text-[16px] text-[#0f2854] tracking-wider uppercase mt-1">
                  COMPUTER SCIENCE DEPARTMENT
                </h4>
                <p className="text-[11.5px] sm:text-[13px] font-bold text-slate-600 mt-1">
                  1st Semester, SY 2026-2027
                </p>
              </div>

              {/* Consultation Hours Table */}
              <div className="border-2 border-slate-900 overflow-x-auto rounded-lg">
                <table className="w-full border-collapse text-left min-w-[580px]">
                  <thead>
                    <tr className="border-b-2 border-slate-900 bg-slate-100">
                      <th
                        rowSpan={2}
                        className="border-r-2 border-slate-900 p-3 sm:p-4 text-[12px] sm:text-[14px] font-heading font-black text-slate-900 w-[35%]"
                      >
                        Faculty Member
                      </th>
                      <th
                        colSpan={2}
                        className="border-r-2 border-slate-900 p-2 sm:p-3 text-[12px] sm:text-[14px] font-heading font-black text-slate-900 text-center border-b-2 border-slate-900"
                      >
                        Consultation Hours
                      </th>
                      <th
                        rowSpan={2}
                        className="p-3 sm:p-4 text-[12px] sm:text-[14px] font-heading font-black text-slate-900 text-center w-[30%]"
                      >
                        Venue
                      </th>
                    </tr>
                    <tr className="border-b-2 border-slate-900 bg-slate-50">
                      <th className="border-r-2 border-slate-900 p-2 text-center text-[11px] sm:text-[13px] font-heading font-bold text-slate-800 w-[20%]">
                        Time
                      </th>
                      <th className="border-r-2 border-slate-900 p-2 text-center text-[11px] sm:text-[13px] font-heading font-bold text-slate-800 w-[15%]">
                        Day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredConsultations.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-400 text-[13px] italic font-medium">
                          No faculty consultation hours found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredConsultations.map((faculty, fIdx) => {
                        const slots = faculty.slots;
                        return slots.map((slot, sIdx) => {
                          const isFirstSlot = sIdx === 0;
                          return (
                            <tr
                              key={`${fIdx}-${sIdx}`}
                              className={`border-b border-slate-300 ${
                                fIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                              } hover:bg-blue-50/40 transition-colors`}
                            >
                              {isFirstSlot && (
                                <td
                                  rowSpan={slots.length}
                                  className="border-r-2 border-slate-900 p-3 sm:p-4 align-middle font-heading font-extrabold text-[12px] sm:text-[14px] text-slate-900"
                                >
                                  {faculty.name}
                                </td>
                              )}
                              <td className="border-r-2 border-slate-900 p-2.5 sm:p-3 text-center font-bold text-[12px] sm:text-[13px] text-slate-800">
                                {slot.time}
                              </td>
                              <td className="border-r-2 border-slate-900 p-2.5 sm:p-3 text-center font-bold text-[12px] sm:text-[13px] text-slate-800">
                                {slot.day}
                              </td>
                              {isFirstSlot && (
                                <td
                                  rowSpan={slots.length}
                                  className="p-3 sm:p-4 align-middle text-center font-bold text-[11px] sm:text-[13px] text-slate-800 leading-snug"
                                >
                                  <div className="font-heading font-black text-blue-950">Q-5212</div>
                                  <div className="text-[10px] sm:text-[11px] text-slate-600 uppercase mt-0.5 tracking-wider font-extrabold">
                                    FACULTY CONSULTATION ROOM
                                  </div>
                                </td>
                              )}
                            </tr>
                          );
                        });
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Signatures Section matching official PDF */}
              <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 pt-6 border-t-2 border-slate-900">
                <div>
                  <span className="text-[12px] sm:text-[13px] font-sans font-bold text-slate-700 block mb-6 sm:mb-12">
                    Recommending Approval By:
                  </span>
                  <div className="border-b border-slate-900 pb-1 max-w-[280px]">
                    <div className="font-sans font-black text-[13px] sm:text-[15px] text-slate-950 uppercase tracking-wide">
                      DR. KARREN V. DE LARA
                    </div>
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-bold mt-1">
                    Program Chair/Department Head / Dean
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-4">
                    Date: <span className="inline-block border-b border-slate-400 w-32 ml-1" />
                  </div>
                </div>

                <div>
                  <span className="text-[12px] sm:text-[13px] font-sans font-bold text-slate-700 block mb-6 sm:mb-12">
                    Approved By:
                  </span>
                  <div className="border-b border-slate-900 pb-1 max-w-[280px]">
                    <div className="font-sans font-black text-[13px] sm:text-[15px] text-slate-950 uppercase tracking-wide">
                      DR. FELIZARDO C. REYES JR.
                    </div>
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-bold mt-1">
                    AVPAA
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-4">
                    Date: <span className="inline-block border-b border-slate-400 w-32 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Interactive Class Details Modal */}
      {selectedClassModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-class-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedClassModal(null)}
        >
          <div
            className="bg-white rounded-[22px] border border-blue-100 shadow-2xl max-w-lg w-full p-5 sm:p-6 relative z-10 overflow-hidden animate-scaleUp text-[#0c1f38]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#0f2854] via-[#0284c7] to-cyan-400" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedClassModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2 mt-1 flex-wrap pr-8">
              <span className="px-2.5 py-1 rounded-md font-heading font-extrabold text-[13px] bg-blue-100 text-blue-800">
                {selectedClassModal.item.courseCode}
              </span>
              <span className="px-2 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Section {selectedClassModal.item.section}
              </span>
              <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border ${selectedClassModal.typeInfo.badgeClass}`}>
                {selectedClassModal.typeInfo.label}
              </span>
              <span className="ml-auto text-[11px] font-extrabold text-[#0284c7] uppercase tracking-wider">
                {selectedClassModal.day}
              </span>
            </div>

            {/* Subject Title */}
            <h3 id="modal-class-title" className="font-heading font-extrabold text-[18px] sm:text-[22px] text-[#0c1f38] leading-snug mb-4">
              {selectedClassModal.item.subject}
            </h3>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-blue-50/60 p-4 rounded-[14px] border border-blue-100 mb-5">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  SCHEDULE TIME
                </span>
                <span className="font-heading font-bold text-[14px] text-blue-900 mt-0.5">
                  {selectedClassModal.formattedTime}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  ROOM / VENUE
                </span>
                <span className="font-heading font-bold text-[14px] text-blue-900 mt-0.5">
                  {selectedClassModal.item.room}
                </span>
              </div>

              <div className="flex flex-col sm:col-span-2 pt-2 border-t border-blue-100/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  INSTRUCTOR
                </span>
                <span className="font-heading font-bold text-[14px] text-[#0c1f38] mt-0.5">
                  {selectedClassModal.profName}
                </span>
                <span className="text-[12px] text-slate-500">
                  {selectedClassModal.profTitle}
                </span>
              </div>
            </div>

            {/* Footer action */}
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedClassModal(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0f2854] to-[#0284c7] text-white font-heading font-bold text-[13px] shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. Site Footer */}
      <footer className="w-full border-t border-blue-200/70 bg-white/60 backdrop-blur-xs min-h-[90px] md:min-h-[105px] flex items-center">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-5 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-[#0f2854] to-[#1e58b8] shadow-xs flex items-center justify-center -rotate-3 select-none shrink-0"
              aria-hidden="true"
            >
              <span className="font-heading font-extrabold text-white text-[13px] rotate-3">
                CS
              </span>
            </div>
            <p className="text-[12px] md:text-[13px] font-medium text-slate-600">
              <span className="font-bold text-[#0c1f38]">College of Computer Studies</span>
              <span className="hidden sm:inline"> · Computer Science Department</span>
            </p>
          </div>

          <div className="text-[12px] md:text-[13px] font-bold text-blue-900/80">
            <span>AY 2026–2027</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

