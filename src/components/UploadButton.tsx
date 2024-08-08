"use client";

import { Upload } from "lucide-react";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { useResources } from "@/hooks/use-resources";

import { CloudinaryResource } from "@/types/cloudinary";

const UploadButton = () => {
  const { addResource } = useResources({ initialResources: [] });

  function handleOnSuccess(results: CloudinaryUploadWidgetResults) {
    addResource([results.info as CloudinaryResource]);
  }

  return (
    <CldUploadButton
      options={{
        autoMinimize: true,
        tags: ["media"],
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
