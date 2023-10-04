import React from "react";
import StatusInfo from "@/components/StatusInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { GITHUB_STATUS_URL } from "@/common/constants.js";

export default function Home() {
  return (
    <>
      <StatusInfo url={GITHUB_STATUS_URL} />
    </>
  );
}
