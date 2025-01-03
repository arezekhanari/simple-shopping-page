interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (direction: "prev" | "next") => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center">
      <button
        className="btn font-medium w-16"
        onClick={() => onPageChange("prev")}
        disabled={currentPage === 1}
      >
        قبلی
      </button>
      <span className="mx-4 self-center">
        {currentPage} از {totalPages}
      </span>
      <button
        className="btn font-medium w-16"
        onClick={() => onPageChange("next")}
        disabled={currentPage === totalPages}
      >
        بعدی
      </button>
    </div>
  );
}
