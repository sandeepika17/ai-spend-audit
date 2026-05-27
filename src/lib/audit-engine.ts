export function generateAudit(
  tool: string,
  plan: string,
  seats: number
) {

  if (
    tool === "chatgpt" &&
    plan === "team" &&
    seats <= 2
  ) {
    return {
      recommendation: "Switch to ChatGPT Plus",

      monthlySavings: 20,

      annualSavings: 240,

      reason:
        "Team plan is unnecessary for very small teams.",
    };
  }

  if (
    tool === "cursor" &&
    plan === "business" &&
    seats <= 3
  ) {
    return {
      recommendation: "Use Cursor Pro",

      monthlySavings: 60,

      annualSavings: 720,

      reason:
        "Business features are not heavily used by small teams.",
    };
  }
  if (
  tool === "copilot" &&
  plan === "business" &&
  seats <= 2
) {
  return {

    recommendation:
      "Use GitHub Copilot Individual",

    monthlySavings: 18,

    annualSavings: 216,

    reason:
      "Business plan is costly for small teams.",
  };
}

if (
  tool === "claude" &&
  plan === "team" &&
  seats <= 2
) {
  return {

    recommendation:
      "Use Claude Pro",

    monthlySavings: 20,

    annualSavings: 240,

    reason:
      "Claude Team is unnecessary for small teams.",
  };
}

  return {
    recommendation: "Current plan looks optimal",

    monthlySavings: 0,

    annualSavings: 0,

    reason:
      "Your pricing setup already matches your usage.",
  };
}