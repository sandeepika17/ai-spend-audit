import { Resend }
from "resend";
const resend = new Resend(
  process.env.RESEND_API_KEY
);
import { NextResponse }
from "next/server";

import { supabase }
from "@/lib/supabase";

export async function POST(
  request: Request
) {

  const body = await request.json();

  const { data, error } =
    await supabase
      .from("audits")
      .insert([
        {
          email: body.email,

          company_name:
            body.companyName,

          role: body.role,

          team_size:
            body.teamSize,

          monthly_savings:
            body.monthlySavings,

          annual_savings:
            body.annualSavings,
        },
      ]);

  if (error) {

    return NextResponse.json({
      error,
    });
  }
  await resend.emails.send({

  from:
    "onboarding@resend.dev",

  to: body.email,

  subject:
    "Your AI Spend Audit",

  html: `

    <h1>
      Your audit is ready
    </h1>

    <p>
      Estimated monthly savings:
      $${body.monthlySavings}
    </p>

  `,
});
  return NextResponse.json({
    success: true,
  });
}