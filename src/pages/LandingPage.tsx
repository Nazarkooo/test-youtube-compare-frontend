import { useState } from "react";
import InputCompare from "@/components/InputCompare";
import { ResultCharts } from "@/components/ResultCharts";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ComparisonResults } from "@/types/LandingPageTypes";
import { compareVideos } from "@/api/videos";


export default function LandingPage() {
  const [termA, setTermA] = useState("");
  const [termB, setTermB] = useState("");
  const [results, setResults] = useState<ComparisonResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCompare = async () => {
    if (!termA.trim() || !termB.trim()) return;
    setLoading(true);
    setError(null);

    const comparedVideos = await compareVideos(termA,termB)
    if(comparedVideos) {
        setResults(comparedVideos)
        setLoading(false)
        return
    } else {
        setLoading(false);
        setError("Failed to fetch comparison data. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center px-4">
      <section className="w-full max-w-5xl py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          YouTube <span className="text-red-600">Trend Spotter</span>
        </h1>
        <p className="text-gray-600 mt-3 mb-8">
          Compare YouTube topics and discover which one performs better.
        </p>

        <Card className="shadow-sm">
          <CardHeader>
            <h2 className="font-semibold text-xl text-gray-800">Compare Search Terms</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <InputCompare termA={termA} termB={termB} setTermA={setTermA} setTermB={setTermB} />

            <Button
              onClick={handleCompare}
              disabled={loading || !termA.trim() || !termB.trim()}
              className="w-full"
            >
              {loading ? "Analyzing..." : "Compare Trends"}
            </Button>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
          </CardContent>
        </Card>

        {results && (
          <section className="mt-12 space-y-10">
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard title="Total Videos" a={results.termA.totalVideos} b={results.termB.totalVideos} />
              <StatCard title="Average Views" a={results.termA.avgViews} b={results.termB.avgViews} />
              <StatCard title="Average Likes" a={results.termA.avgLikes} b={results.termB.avgLikes} />
            </div>

            <Separator />
            <ResultCharts termA={results.termA} termB={results.termB} />
            <Separator />

            <Card className="border border-gray-200">
              <CardHeader className="pb-2 text-center text-gray-800 font-medium">
                Winner
              </CardHeader>
              <CardContent className="flex justify-center text-lg font-semibold">
                <span className={results.winner === termA ? "text-[#ef4444]" : "text-[#3b82f6]"}>{results.winner}</span>
              </CardContent>
            </Card>
          </section>
        )}
      </section>
    </main>
  );
}
