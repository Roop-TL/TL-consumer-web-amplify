"use client";
import { Amplify, Storage } from "aws-amplify";
import { FileUploader } from "@aws-amplify/ui-react";
import { FileUploaderThemeExample } from "./fileUploader";
import React, { useEffect, useState } from "react";
// import { ToastProvider } from "react-toast-notifications";
// import { useToasts } from "react-toast-notifications";
import awsconfig from "../../../aws-exports";
Amplify.configure(awsconfig);

export default function Upload() {
  //   const { addToast } = useToasts();
  //   const [file, setFile] = useState();
  //   const selectFile = (e) => {
  //     console.log(e);
  //     setFile(e.target.files[0]);
  //   };
  //   const uploadToS3 = async () => {
  //     await Storage.put(file.name, file, {
  //       resumable: true,
  //       progressCallback(progress) {
  //         progressPercent = progress.loaded / progress.total;
  //       },
  //       contentType: file.type,
  //     })
  //       .then(() => {
  //         window.alert("Uploaded Successfully", { appearance: "success" });
  //       })
  //       .catch((err) => {
  //         window.alert("Error uploading file", err.message);
  //         console.log(err);
  //       });
  //   };
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <FileUploaderThemeExample />
      </main>
    </div>
  );
}
