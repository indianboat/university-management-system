"use client";

import Loading from "@/app/components/LoadingComponent/Loading";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";


const StudentDashboard = () => {

  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() { 
      redirect("/student");
    }
  });


  if (status === "loading") {
    return <Loading />
  }

  return (
    <>
      <div className="border container my-8 p-4 flex justify-center mx-auto">
        student dashboard
      </div>
    </>
  )
}

export default StudentDashboard