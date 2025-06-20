import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRoles from '../data/useRoles';

export default function RoleDetails(){
  const { id } = useParams();
  const roles = useRoles();
  const role = roles.find(r=>r.id===id);
  if(!role) return <p>Role not found</p>;
  return (
    <div className="space-y-6">
      <Link to="/" className="text-blue-600 hover:underline">← All careers</Link>

      {role.bgImage && (
        <div
          className="h-48 rounded-xl"
          style={{backgroundImage:`url(${role.bgImage})`,backgroundSize:'cover',backgroundPosition:'center'}}
        />
      )}
      <h1 className="text-3xl font-bold">{role.title}</h1>
      <p>{role.description}</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">Zero‑to‑Hero Syllabus</h2>
        {role.path.map(stage=>(
          <div key={stage.level} className="mb-4">
            <h3 className="font-semibold">{stage.level}</h3>
            <ul className="list-disc list-inside">
              {stage.syllabus.map((t,i)=><li key={i}>{t}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {role.resources.internships?.length && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Free Internship Programs</h2>
          <ul className="list-disc list-inside">
            {role.resources.internships.map((it,i)=><li key={i}><a href={it.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{it.name}</a></li>)}
          </ul>
        </section>
      )}

      {role.resources.projects?.length && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Real‑Time Project Links</h2>
          <ul className="list-disc list-inside">
            {role.resources.projects.map((p,i)=><li key={i}><a href={p} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{p}</a></li>)}
          </ul>
        </section>
      )}

      {role.resources.communities?.length && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Open Communities</h2>
          <ul className="list-disc list-inside">
            {role.resources.communities.map((c,i)=><li key={i}>{c}</li>)}
          </ul>
        </section>
      )}
    </div>
  );
}