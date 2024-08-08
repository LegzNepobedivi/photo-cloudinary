import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResource } from "@/components/MediaGallery/MediaGallery";
 
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

export async function GET(){
    const { resources} = await cloudinary.api.resources();
    return Response.json({
        data: resources
    });

}