import { NextResponse }
from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const summary = `
Your AI stack shows opportunities
to reduce spending while keeping
similar productivity.

Switching from higher-tier plans
to more appropriate plans could
save your company around
$${body.monthlySavings}
per month.
`;

    return NextResponse.json({
      summary,
    });

  } catch {

    return NextResponse.json({

      summary:
        "Your AI stack can be optimized for better cost efficiency.",

    });
  }
}