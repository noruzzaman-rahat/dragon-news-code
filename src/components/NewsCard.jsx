import React from "react";
import { FiShare2, FiBookmark, FiEye } from "react-icons/fi";
import { BsStarFill, BsStar } from "react-icons/bs";

const formatDate = (iso) => {
  if (!iso) return "Unknown";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
};

const clamp = (text = "", n = 220) => (text.length > n ? text.slice(0, n).trim() + "…" : text);

const Stars = ({ value = 0, outOf = 5 }) => {
  const full = Math.max(0, Math.min(outOf, Math.round(value)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: outOf }).map((_, i) =>
        i < full ? (
          <BsStarFill key={i} className="text-yellow-400" />
        ) : (
          <BsStar key={i} className="text-base-content/30" />
        )
      )}
      <span className="text-xs text-base-content/60 ml-1">{Number(value).toFixed(1)}</span>
    </div>
  );
};

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    image_url,
    thumbnail_url,
    author,
    total_view,
    rating,
    // tags = [],
  } = news || {};

  const img = image_url || thumbnail_url;

  return (
    <article className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-base-200 ring-offset-2 ring-offset-base-100 overflow-hidden">
             
              <img src={author?.img} alt={author?.name || "Author"} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">{author?.name || "Unknown Author"}</h4>
            <p className="text-xs text-base-content/60">{formatDate(author?.published_date)}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-ghost" title="Share"><FiShare2 /></button>
          <button className="btn btn-sm btn-ghost" title="Bookmark"><FiBookmark /></button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-base md:text-lg font-bold leading-snug">{title}</h2>

      {/* Image */}
      {img && (
        <figure className="px-4 pt-3">
          <img
            src={img}
            alt={title}
            className="w-full rounded-xl aspect-video object-cover"
          />
        </figure>
      )}

      {/* Body */}
      <div className="card-body pt-4">
        <p className="text-sm md:text-[15px] text-base-content/70">{clamp(details, 220)}</p>
        <button className="btn btn-link no-underline px-0 text-primary">Read More</button>

        {/* Footer */}
        <div className="mt-1 flex items-center justify-between">
          <Stars value={Number(rating?.number) || 0} />
          <div className="flex items-center gap-2 text-base-content/70">
            <FiEye />
            <span className="text-sm">{total_view?.toLocaleString?.() ?? total_view ?? 0}</span>
          </div>
        </div>

        {/* Tags + Badge */}
        {/* <div className="mt-3 flex flex-wrap items-center gap-2">
          {rating?.badge && (
            <span className="badge badge-warning badge-outline">{rating.badge}</span>
          )}
          {tags.slice(0, 5).map((t) => (
            <span key={t} className="badge badge-ghost">#{t}</span>
          ))}
        </div> */}
      </div>
    </article>
  );
};

export default NewsCard;
