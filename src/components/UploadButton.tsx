"use client";

import { Upload } from "lucide-react";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { useResources } from "@/hooks/use-resources";

import { CloudinaryResource } from "@/types/cloudinary";

const UploadButton = () => {
  const { addResource } = useResources({
    disableFetch: true
  });

  function handleOnSuccess(results: CloudinaryUploadWidgetResults) {
    addResource([results.info as CloudinaryResource]);
  }

  return (
    <CldUploadButton
      options={{
        autoMinimize: true,
        tags: [String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG)],
      }}
      signatureEndpoint="/api/sign-cloudinary"
      onSuccess={handleOnSuccess}
    >
      <span className="flex gap-2 items-center">
        <Upload className="w-4 h-4" />
        Upload
      </span>
    </CldUploadButton>
  );
};

export default UploadButton;
