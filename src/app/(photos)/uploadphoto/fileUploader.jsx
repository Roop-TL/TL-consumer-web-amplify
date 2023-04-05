"use client";
// import { FileUploader, ThemeProvider, View } from "@aws-amplify/ui-react";
// import { Amplify, Storage } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
// import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { FileUploader } from "@aws-amplify/ui-react";

const theme = {
  name: "upload-theme",
  tokens: {
    colors: {},
    borderWidths: {
      small: { value: "2px" },
      medium: { value: "4px" },
      large: { value: "8px" },
    },
    radii: {
      xs: { value: "1rem" },
      small: { value: "2rem" },
      medium: { value: "2rem" },
      large: { value: "2rem" },
      xl: { value: "3rem" },
    },
  },
};

export const FileUploaderThemeExample = () => {
  return (
    // <ThemeProvider theme={theme}>
    //   <FileUploader
    //     variation="drop"
    //     acceptedFileTypes={["image/*"]}
    //     storage={Storage}
    //     path="Abhivrudhi/"
    //     accessLevel="public"
    //     hasMultipleFiles={true}
    //     maxSize={100000000}
    //     maxFileCount={3}
    //   />
    // </ThemeProvider>

    <FileUploader
      label="Upload Image"
      acceptedFileTypes={["image/*"]}
      storage={Storage}
      accessLevel="public"
      path="images/"
      // onUploadComplete={(data) => console.log(data)}
    />
  );
};

export default FileUploaderThemeExample;
