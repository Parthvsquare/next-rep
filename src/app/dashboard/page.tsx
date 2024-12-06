import { Navbar } from "@/components/app/navbar";
import { SalesInsightsCard } from "./_component/sales-insight-card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <SalesInsightsCard />
      </main>
    </div>
  );
}
