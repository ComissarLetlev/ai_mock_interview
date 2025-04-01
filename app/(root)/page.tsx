import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from "@/constants";
import { ReactNode } from "react";
async function Home() {
  const hasPastInterviews = "2";
  const hasUpcomingInterviews = "1";

  function interview(
    value: Interview,
    index: number,
    array: Interview[]
  ): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice</h2>
          <p className="text-lg">Practice real interview and questions</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start with an interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interview</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
