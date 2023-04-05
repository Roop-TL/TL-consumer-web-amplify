"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../../aws-exports";
Amplify.configure(awsExports);

function Login({ signOut, user }) {
  return (
    <div>
      <h1>Successfully Authenticated {user.username}</h1>
      <Button onClick={signOut} style={styles.button}>
        Sign out
      </Button>
    </div>
  );
}
const styles = {
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(Login);
