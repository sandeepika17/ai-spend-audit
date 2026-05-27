interface Props {

  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{

    tool?: string;

    plan?: string;

    monthly?: string;

    annual?: string;

    recommendation?: string;

    reason?: string;
  }>;
}

export default async function ResultPage({
  params,
  searchParams,
}: Props) {

  const resolvedParams =
    await params;

  const resolvedSearchParams =
    await searchParams;

  return (

    <main className="
    min-h-screen
    bg-gradient-to-b
    from-white
    to-gray-100
    p-10
    ">

      <div className="
      max-w-4xl
      mx-auto
      bg-white
      p-10
      rounded-3xl
      shadow-2xl
      ">

        <h1 className="
        text-5xl
        font-bold
        mb-8
        ">

          AI Spend Audit

        </h1>

        <div className="
        bg-green-50
        border
        border-green-200
        p-8
        rounded-2xl
        ">

          <p className="text-gray-600">

            Recommended Action

          </p>

          <h2 className="
          text-3xl
          font-bold
          mt-2
          ">

            {
              resolvedSearchParams
              .recommendation
            }

          </h2>

          <div className="mt-8">

            <p className="text-gray-600">

              Monthly Savings

            </p>

            <h2 className="
            text-6xl
            font-bold
            text-green-600
            ">

              $
              {
                resolvedSearchParams
                .monthly
              }

            </h2>

          </div>

          <div className="mt-8">

            <p className="text-gray-600">

              Annual Savings

            </p>

            <h2 className="
            text-5xl
            font-bold
            ">

              $
              {
                resolvedSearchParams
                .annual
              }

            </h2>

          </div>

          <div className="
          mt-8
          bg-white
          p-6
          rounded-2xl
          border
          ">

            <h3 className="
            font-bold
            mb-3
            ">

              Why This Recommendation?

            </h3>

            <p className="
            text-gray-700
            leading-7
            ">

              {
                resolvedSearchParams
                .reason
              }

            </p>

          </div>

        </div>

        <div className="mt-10">

          <p className="text-gray-500">

            Shareable Audit ID

          </p>

          <div className="
          mt-2
          bg-gray-100
          p-4
          rounded-xl
          font-mono
          ">

            {resolvedParams.id}

          </div>

        </div>

      </div>

    </main>
  );
}