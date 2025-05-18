import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Webhook Demo</h1>
        <p className="text-gray-600">Real-time data sending and receiving made simple.</p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-950 text-white px-5 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}