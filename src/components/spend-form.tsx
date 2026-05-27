"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from "uuid";

import { generateAudit } from "@/lib/audit-engine";

export default function SpendForm() {

  const router = useRouter();

  const [tool, setTool] =
    useState("chatgpt");

  const [plan, setPlan] =
    useState("team");

  const [seats, setSeats] =
    useState(2);

  const [teamSize, setTeamSize] =
    useState(5);

  const [email, setEmail] =
    useState("");

  const [companyName, setCompanyName] =
    useState("");

  const [role, setRole] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  const [summary, setSummary] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    const saved =
      localStorage.getItem("audit-form");

    if (saved) {

      const parsed = JSON.parse(saved);

      setTool(parsed.tool);

      setPlan(parsed.plan);

      setSeats(parsed.seats);

      setTeamSize(parsed.teamSize);
    }

  }, []);

  async function handleAudit() {

    if (!email) {

      alert("Email is required");

      return;
    }

    setLoading(true);

    const audit = generateAudit(
      tool,
      plan,
      seats
    );

    localStorage.setItem(
      "audit-form",

      JSON.stringify({
        tool,
        plan,
        seats,
        teamSize,
      })
    );

    setResult(audit);

    const response = await fetch(
      "/api/summary",

      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          monthlySavings:
            audit.monthlySavings,
        }),
      }
    );

    const data =
      await response.json();

    setSummary(data.summary);

    await fetch("/api/lead", {

      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({

        email,

        companyName,

        role,

        teamSize,

        monthlySavings:
          audit.monthlySavings,

        annualSavings:
          audit.annualSavings,
      }),
    });

    const id = uuidv4();

    const params =
      new URLSearchParams({

        tool,

        plan,

        monthly:
          String(audit.monthlySavings),

        annual:
          String(audit.annualSavings),

        recommendation:
          audit.recommendation,

        reason:
          audit.reason,
      });

    setLoading(false);

    router.push(
      `/results/${id}?${params.toString()}`
    );
  }

  return (

    <div className="
    max-w-3xl
    mx-auto
    mt-10
    bg-white
    shadow-2xl
    border
    border-gray-200
    p-10
    rounded-3xl
    ">

      <h2 className="
      text-3xl
      font-bold
      mb-8
      ">

        AI Spend Audit

      </h2>

      <div className="space-y-6">

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Select Tool

          </label>

          <select
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={tool}
            onChange={(e) =>
              setTool(e.target.value)
            }
          >

            <option value="chatgpt">
              ChatGPT
            </option>

            <option value="cursor">
              Cursor
            </option>

            <option value="claude">
              Claude
            </option>

            <option value="copilot">
              GitHub Copilot
            </option>

          </select>

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Select Plan

          </label>

          <select
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={plan}
            onChange={(e) =>
              setPlan(e.target.value)
            }
          >

            <option value="team">
              Team
            </option>

            <option value="plus">
              Plus
            </option>

            <option value="business">
              Business
            </option>

          </select>

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Number of Seats

          </label>

          <input
            type="number"
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={seats}
            onChange={(e) =>
              setSeats(
                Number(e.target.value)
              )
            }
          />

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Team Size

          </label>

          <input
            type="number"
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={teamSize}
            onChange={(e) =>
              setTeamSize(
                Number(e.target.value)
              )
            }
          />

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Email Address

          </label>

          <input
            type="email"
            placeholder="founder@startup.com"
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Company Name

          </label>

          <input
            type="text"
            placeholder="Acme AI"
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={companyName}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
          />

        </div>

        <div>

          <label className="
          block
          mb-2
          font-medium
          ">

            Your Role

          </label>

          <input
            type="text"
            placeholder="Founder"
            className="
            border
            p-3
            w-full
            rounded-xl
            "
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
          />

        </div>

        <button
          onClick={handleAudit}
          className="
          bg-black
          hover:bg-gray-800
          transition
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          text-lg
          "
        >

          {loading
            ? "Generating..."
            : "Generate Audit"}

        </button>

      </div>

      {result && (

        <div className="
        mt-10
        bg-green-50
        border
        border-green-200
        p-8
        rounded-2xl
        ">

          <h3 className="
          text-2xl
          font-bold
          mb-6
          ">

            Audit Result

          </h3>

          <p className="text-lg">

            Recommendation:
            {" "}
            {result.recommendation}

          </p>

          <div className="mt-6">

            <p className="text-gray-600">

              Monthly Savings

            </p>

            <h2 className="
            text-5xl
            font-bold
            text-green-600
            ">

              ${result.monthlySavings}

            </h2>

          </div>

          <div className="mt-6">

            <p className="text-gray-600">

              Annual Savings

            </p>

            <h2 className="
            text-4xl
            font-bold
            ">

              ${result.annualSavings}

            </h2>

          </div>

          <p className="
          mt-6
          text-gray-700
          ">

            Reason:
            {" "}
            {result.reason}

          </p>

          <div className="
          mt-6
          bg-white
          p-6
          rounded-2xl
          border
          ">

            <h3 className="
            font-bold
            mb-3
            ">

              AI Summary

            </h3>

            <p className="
            text-gray-700
            leading-7
            ">

              {summary}

            </p>

          </div>

        </div>

      )}

    </div>
  );
}