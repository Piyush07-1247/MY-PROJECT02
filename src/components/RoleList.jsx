import React, { useState } from 'react';
import useRoles from '../data/useRoles';
import RoleCard from './RoleCard';

export default function RoleList(){
  const roles = useRoles();
  const [q,setQ]=useState('');
  const filtered = roles.filter(r=>r.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <input
        className="w-full p-3 mb-6 rounded border"
        placeholder="Search a career..."
        value={q}
        onChange={e=>setQ(e.target.value)}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(role=><RoleCard key={role.id} role={role}/>)}
      </div>
    </>
  );
}