"use client";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { productData } from "@/lib/placeholder";
import { convertToSlug, removeVietnameseTones } from "@/lib/utils";
import Link from "next/link";
const createUrl = (title, rowTitle, id) => {
  return `/san-pham/${convertToSlug(title)}/${convertToSlug(rowTitle)}/${id}`;
};
export default function Search() {
  const [dataFilter, setDataFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = productData.flatMap((category) =>
    category.subcategories.flatMap((subcategory) =>
      subcategory.items.map((item) => ({
        ...item,
        category: category.category,
        subcategory: subcategory.name,
      })),
    ),
  );

  useEffect(() => {
    const normalizedSearchTerm = removeVietnameseTones(
      searchTerm.toLowerCase(),
    );
    setDataFilter(
      allItems.filter((item) =>
        removeVietnameseTones(item.name.toLowerCase()).includes(
          normalizedSearchTerm,
        ),
      ),
    );
    return () => {
      setDataFilter([]);
    };
  }, [searchTerm]);

  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <>
        <Dialog className="translate-y-40">
          <DialogTrigger>
            <Input
              type="text"
              placeholder="Quick search..."
              className="rounded-lg md:min-w-80"
            />
          </DialogTrigger>
          <DialogContent className="min-h-80">
            <DialogHeader className="space-y-2 pr-4">
              <div className="mb-4">
                <Input
                  placeholder="Quick search..."
                  value={searchTerm}
                  onChange={handleChangeSearch}
                />
              </div>
              {dataFilter.slice(0, 6).map((value, index) => (
                <>
                  <Link
                    href={createUrl(
                      value.category,
                      value.subcategory,
                      value.id,
                    )}
                    key={index}
                  >
                    <DialogClose>
                      <DialogDescription className="text-md font-medium hover:text-gray-800">
                        {value.name}
                      </DialogDescription>
                    </DialogClose>
                  </Link>
                  <hr />
                </>
              ))}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
}
