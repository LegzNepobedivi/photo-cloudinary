import MediaViewer from "@/components/MediaViewer";

async function Resource() {
  return (
    <MediaViewer
      resource={{
        public_id: "my-image",
        width: 1024,
        height: 1024,
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/v1621863583/my-image.jpg",
      }}
    />
  );
}

export default Resource;
