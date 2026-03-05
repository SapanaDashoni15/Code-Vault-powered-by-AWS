const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

const s3 = new S3Client({ region: process.env.AWS_REGION });
const S3_BUCKET = process.env.S3_BUCKET;

async function testS3Access() {
  try {
    const command = new ListObjectsV2Command({ Bucket: S3_BUCKET, MaxKeys: 5 });
    const data = await s3.send(command);

    if (data.Contents) {
      console.log("S3 access successful! Found these objects (up to 5):");
      data.Contents.forEach(obj => console.log(obj.Key));
    } else {
      console.log("S3 access successful! Bucket is empty.");
    }
  } catch (err) {
    console.error("Error accessing S3:", err);
  }
}

testS3Access();
