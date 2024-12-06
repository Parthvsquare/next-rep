import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock data for AI sales insights
const salesInsights = [
  { id: 1, product: "AI Chatbot", revenue: "$50,000", growth: "+15%", prediction: "High demand expected" },
  { id: 2, product: "Predictive Analytics Tool", revenue: "$75,000", growth: "+22%", prediction: "Steady growth" },
  { id: 3, product: "Machine Learning Platform", revenue: "$100,000", growth: "+30%", prediction: "Potential market leader" },
  { id: 4, product: "Computer Vision Solution", revenue: "$60,000", growth: "+18%", prediction: "Emerging market opportunity" },
];

export function SalesInsightsCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Sales Insights</CardTitle>
        <CardDescription>Overview of AI product sales and predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Growth</TableHead>
              <TableHead>AI Prediction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesInsights.map((insight) => (
              <TableRow key={insight.id}>
                <TableCell className="font-medium">{insight.product}</TableCell>
                <TableCell>{insight.revenue}</TableCell>
                <TableCell className="text-green-600">{insight.growth}</TableCell>
                <TableCell>{insight.prediction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
