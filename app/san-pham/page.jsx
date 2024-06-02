"use client";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/lib/placeholder";
import { convertToSlug } from "@/lib/utils";

function formatContent(data, length) {
  if (data.length > length) {
    return data.substring(0, length) + "...";
  }
  return data;
}
const createUrl = (title, rowTitle, id) => {
  return `/san-pham/${convertToSlug(title)}/${convertToSlug(rowTitle)}/${id}`;
};
const SanPham = () => {
  const allItems = [];

  productData.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.items.forEach((item) => {
        item.category = category.category;
        item.subcategory = subcategory.name;
        allItems.push(item);
      });
    });
  });

  return (
    <section className="col-span-3">
      <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-4">
        {allItems.map((row, index) => (
          <Card className="col-span-1 max-h-80 min-h-80" key={index}>
            <CardHeader className="relative h-56 md:h-48">
              <CardTitle>
                <Image
                  src={row.image}
                  fill={true}
                  alt=""
                  className="rounded-t-lg"
                />
              </CardTitle>
            </CardHeader>
            <Link href={createUrl(row.category, row.subcategory, row.id)}>
              <CardContent className="p-0">
                <h4 className="text-center text-xl font-semibold text-yellow-800">
                  {formatContent(row.name, 30)}
                </h4>
              </CardContent>
            </Link>
            <CardDescription className="px-4 text-center">
              {formatContent(row.description, 80)}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SanPham;
