import MediaGallery from "@/components/MediaGallery";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResource } from "@/types/cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Home() {
  let resources : Array<CloudinaryResource> = [];

  try {
    let result = await cloudinary.api.resources_by_tag('media');
    if (result.resources && Array.isArray(result.resources)) {
      resources = result.resources.map((resource: CloudinaryResource) => ({
        public_id: resource.public_id,
        width: resource.width,
        height: resource.height,
        secure_url: resource.secure_url,
        asset_id: resource.asset_id,
      }));
    } else {
      console.error("Unexpected resource format:", result);
    }
  } catch (error) {
    console.error("Failed to fetch resources:", error);
  }

  return (
    <div className="h-full mt-6">
      {resources.length > 0 ? (
        <MediaGallery resources={resources} tag={'media'}/>
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
}
