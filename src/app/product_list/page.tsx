"use client";

import { setBookmarks } from "@/lib/features/userBookmarks";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useEffect, useState } from "react";
import { mockProducts } from "./data";
import Navbar from "@/app/product_list/components/Navbar";
import ProductCard from "@/app/product_list/components/ProductCard";
import Pagination from "@/app/product_list/components/Pagination";

const ITEMS_PER_PAGE = 8;

const page = () => {
  const products = mockProducts;
  const userBookmarks = useAppSelector(
    (state) => state?.userBookmarks ?? { bookmarks: [] }
  );
  const dispatch = useAppDispatch();
  const [currentBookmarks, setCurrentBookmarks] = useState<boolean[]>(
    userBookmarks.bookmarks.length > 0
      ? userBookmarks.bookmarks
      : Array(products.length).fill(false)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    dispatch(setBookmarks(currentBookmarks));
  }, [currentBookmarks]);

  const handleBookmarkToggle = (index: number) => {
    setCurrentBookmarks(
      currentBookmarks.map((value, i) => (i === index ? !value : value))
    );
  };

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prev) =>
      direction === "prev"
        ? Math.max(prev - 1, 1)
        : Math.min(prev + 1, totalPages)
    );
  };

  return (
    <div>
      <Navbar />
      <div className="py-6 flex flex-col gap-10">
        <div className="grid grid-cols-1 place-items-center gap-12 w-full content-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {paginatedProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              isBookmarked={currentBookmarks[i]}
              onBookmarkToggle={() => handleBookmarkToggle(i)}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default page;
