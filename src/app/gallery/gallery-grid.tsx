"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageData) => (
          <div key={imageData.public_id} className="flex justify-center">
            <CloudinaryImage
              imageData={imageData}
              width="400"
              height="300"
              alt="an image of something"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};