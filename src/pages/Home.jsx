import {Link} from "react-router-dom";
export default function Home() {
  return (
    <section className="semesters">
      {[...Array(10)].map((_, i) => (
        <Link
          to={`/semester/${i + 1}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div key={i} className="semester">
            Semestre {i + 1}
          </div>
        </Link>
      ))}
    </section>
  );
}