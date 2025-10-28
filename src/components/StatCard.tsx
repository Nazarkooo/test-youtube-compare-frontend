import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatNumber } from "@/utils/formatNumbers";

export default function StatCard({
  title,
  a,
  b,
}: {
  title: string;
  a: number;
  b: number;
}) {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-2 text-center text-gray-800 font-medium">
        {title}
      </CardHeader>
      <CardContent className="flex justify-around text-lg font-semibold">
        <span className="text-red-600">{formatNumber(a)}</span>
        <span className="text-blue-600">{formatNumber(b)}</span>
      </CardContent>
    </Card>
  );
}
