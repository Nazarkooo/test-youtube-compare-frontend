import { CardDescription } from "./ui/card";
import { Input } from "./ui/Input";
import { Label } from "./ui/label";


interface Props {
  termA: string;
  termB: string;
  setTermA: (v: string) => void;
  setTermB: (v: string) => void;
}

export default function InputCompare({ termA, termB, setTermA, setTermB }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="termA">First topic</Label>
        <Input
          id="termA"
          placeholder="e.g. AI coding"
          value={termA}
          onChange={(e) => setTermA(e.target.value)}
        />
        <CardDescription>Enter the first YouTube topic to analyze.</CardDescription>
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="termB">Second topic</Label>
        <Input
          id="termB"
          placeholder="e.g. React tutorials"
          value={termB}
          onChange={(e) => setTermB(e.target.value)}
        />
        <CardDescription>Enter another topic to compare.</CardDescription>
      </div>
    </div>
  );
}
