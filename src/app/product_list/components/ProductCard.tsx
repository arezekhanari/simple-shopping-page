import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isBookmarked: boolean;
  onBookmarkToggle: () => void;
}

export default function ProductCard({
  product,
  isBookmarked,
  onBookmarkToggle,
}: ProductCardProps) {
  return (
    <div className="card bg-base-100 w-72 shadow-xl">
      <figure>
        <Image src={product.img} alt={product.name} width={300} height={200} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h2 className="card-title">{product.name}</h2>
            <p>قیمت: {product.price} تومان</p>
          </div>
          <button onClick={onBookmarkToggle}>
            <span className="material-icons-round">
              {isBookmarked ? "bookmark" : "bookmark_border"}
            </span>
          </button>
        </div>
        <div className="card-actions justify-between mt-4">
          <button className="btn font-medium w-full">
            <span className="material-icons-round">add</span>
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
