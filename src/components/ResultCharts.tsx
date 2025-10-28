import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ResultCharts({
  termA,
  termB,
}: {
  termA: { searchTerm: string; timelineData: any[] };
  termB: { searchTerm: string; timelineData: any[] };
}) {

  const map: Record<string, { date: string; termA_views: number; termB_views: number }> = {};

  termA.timelineData.forEach((v: any) => {
    const d = v.publishedAt.slice(0, 10);
    if (!map[d]) map[d] = { date: d, termA_views: 0, termB_views: 0 };
    map[d].termA_views += Number(v.viewCount);
  });

  termB.timelineData.forEach((v: any) => {
    const d = v.publishedAt.slice(0, 10);
    if (!map[d]) map[d] = { date: d, termA_views: 0, termB_views: 0 };
    map[d].termB_views += Number(v.viewCount);
  });

  const data = Object.values(map).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="text-xl font-semibold text-gray-800">Timeline Comparison</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={360}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(v) => v.slice(0, 4)} />
            <YAxis />
            <Tooltip formatter={(v: number) => `${Number(v).toLocaleString()} views`} />
            <Legend />
            <Line type="monotone" dataKey="termA_views" stroke="#ef4444" strokeWidth={2} name={termA.searchTerm} dot={false} />
            <Line type="monotone" dataKey="termB_views" stroke="#3b82f6" strokeWidth={2} name={termB.searchTerm} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
