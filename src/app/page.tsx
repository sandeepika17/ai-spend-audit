import SpendForm from "@/components/spend-form";

export default function Home() {

  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center py-16">

          <h1 className="text-6xl font-bold tracking-tight">

            Stop Overspending
            <br />
            on AI Tools

          </h1>

          <p className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto">

            Get an instant AI spend audit for your startup.
            Discover cheaper plans, better alternatives,
            and hidden savings opportunities.

          </p>

        </div>

        <SpendForm />

      </div>

    </main>
  );
}