import React from 'react';
import { Link } from 'react-router-dom';

export default function RoleCard({ role }){
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {role.image && <img src={role.image} alt={role.title} className="h-40 w-full object-cover" />}
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-1">{role.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{role.description}</p>
        <Link to={`/role/${role.id}`} className="inline-block mt-3 text-blue-600 hover:underline">
          Explore →
        </Link>
      </div>
    </div>
    <img
  src={role.image}
  alt={role.title}
  className="h-40 w-full object-cover"
+ onError={e => {
+   e.currentTarget.onerror = null;        // prevent infinite loop
+   e.currentTarget.src = '/fallback.jpg'; // put any jpg in /public
+ }}
/>

  );
}
