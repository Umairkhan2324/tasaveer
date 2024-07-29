"use client";

import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info?: {
    public_id: string;
  };
  event?: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <CldUploadButton
      
        onSuccess={(result: CloudinaryUploadWidgetResults) => {
          typeof result?.info === "object"
          ?setImageId(result.info.public_id!)
          : " ";
        }}
        uploadPreset="giomsr4s"
      />

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}