import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/ui/Button";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    // Reset page to 1 when searching
    if (debouncedQuery) {
      setPage(1);
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4&_page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, debouncedQuery]);

  // Filter posts based on debounced search query
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error:{error}</p>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className=" flex gap-10 justify-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">Posts</h1>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 px-4 py-2 border border-blue-700 rounded w-full"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border border-blue-700  p-4 rounded shadow-md transform transition-transform
             duration-300 hover:scale-103 hover:shadow-xl cursor-pointer"
          >
            <h2 className="text-lg dark:text-white font-semibold ">
              {post.title}
            </h2>
            <p className="text-sm text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Show message when no posts match search */}
      {filteredPosts.length === 0 && debouncedQuery && (
        <p className="text-center text-gray-500 mt-4">
          No posts found matching "{debouncedQuery}"
        </p>
      )}

      {/* Pagination - only show when not searching */}
      {!debouncedQuery && (
        <div className="flex justify-center mt-6 gap-4">
          <Button
            variant="secondary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </Button>
          <span className="self-center">Page {page}</span>
          <Button
            variant="secondary"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostList;
