import { NextResponse } from "next/server";

import { generateAudit }
from "@/lib/audit-engine";

export async function POST(
  request: Request
) {

  const body = await request.json();

  const result = generateAudit(
    body.tool,
    body.plan,
    body.seats
  );

  return NextResponse.json(result);
}