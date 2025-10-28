import type { ComparisonResults } from "@/types/LandingPageTypes";


export const compareVideos = async (termA:string,termB:string) => {
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/compare`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ term1: termA.trim(), term2: termB.trim() }),
          });
    
          if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    
          const raw = await res.json();
    
          const normalized: ComparisonResults = {
            termA: {
              searchTerm: raw.term1.searchTerm,
              totalVideos: raw.term1.totalResults,
              avgViews: raw.term1.averageViews,
              avgLikes: raw.term1.averageLikes,
              timelineData: raw.term1.timelineData,
              topVideos: raw.term1.topVideos,
            },
            termB: {
              searchTerm: raw.term2.searchTerm,
              totalVideos: raw.term2.totalResults,
              avgViews: raw.term2.averageViews,
              avgLikes: raw.term2.averageLikes,
              timelineData: raw.term2.timelineData,
              topVideos: raw.term2.topVideos,
            },
            winner: raw.winner,
          };
          return normalized
        } catch (err) {
          console.error("Compare error:", err);
          return null
        } 
}