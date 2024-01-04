import Link from 'next/link';
import React, { useState } from 'react';

function Form() {
  const [name, setname] = useState('');
  const [year, setyear] = useState('');
  const [family, setfamily] = useState('');
  const [partner, setpartner] = useState('');
  const [friends, setfriends] = useState('');
  const [sports, setsports] = useState('');
  const [leisure, setleisure] = useState('');
  const [academics, setacademics] = useState('');
  const [travel, settravel] = useState('');
  const [work, setwork] = useState('');
  const [finance, setfinance] = useState('');
  const [other, setother] = useState('');

  return (
    <div className='form'>
      <label>
        🖋️ What&apos;s your name?
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
      <label>
        🗓️ What year is it?
        <input
          type='text'
          name='year'
          value={year}
          onChange={(e) => setyear(e.target.value)}
        />
      </label>
      <p>Write your resolutions regarding...</p>
      <label>
        👪 Family
        <input
          type='text'
          name='family'
          value={family}
          onChange={(e) => setfamily(e.target.value)}
        />
      </label>
      <label>
        ❤️ Partner
        <input
          type='text'
          name='partner'
          value={partner}
          onChange={(e) => setpartner(e.target.value)}
        />
      </label>
      <label>
        🫂 Friends
        <input
          type='text'
          name='friends'
          value={friends}
          onChange={(e) => setfriends(e.target.value)}
        />
      </label>
      <label>
        🏋️ Sports
        <input
          type='text'
          name='sports'
          value={sports}
          onChange={(e) => setsports(e.target.value)}
        />
      </label>
      <label>
        🎮 Leisure
        <input
          type='text'
          name='leisure'
          value={leisure}
          onChange={(e) => setleisure(e.target.value)}
        />
      </label>
      <label>
        📚 Academics
        <input
          type='text'
          name='academics'
          value={academics}
          onChange={(e) => setacademics(e.target.value)}
        />
      </label>
      <label>
        🏖️ Travel
        <input
          type='text'
          name='travel'
          value={travel}
          onChange={(e) => settravel(e.target.value)}
        />
      </label>
      <label>
        💻 Work
        <input
          type='text'
          name='work'
          value={work}
          onChange={(e) => setwork(e.target.value)}
        />
      </label>
      <label>
        💰 Finance
        <input
          type='text'
          name='finance'
          value={finance}
          onChange={(e) => setfinance(e.target.value)}
        />
      </label>
      <label>
        🌀 Other goals
        <input
          type='text'
          name='other'
          value={other}
          onChange={(e) => setother(e.target.value)}
        />
      </label>
      <div className='buttonContainer'>
        <Link
          href={{
            pathname: '/resolutions',
            query: {
              name,
              year,
              family,
              partner,
              friends,
              sports,
              academics,
              travel,
              leisure,
              work, 
              finance,  
              other,
            },
          }}
        >
          <button type='submit'>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
