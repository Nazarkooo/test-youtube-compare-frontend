
export interface TimelineItem {
  publishedAt: string;
  viewCount: number;
}

export interface TermStats {
  searchTerm: string;
  totalVideos: number;
  avgViews: number;
  avgLikes: number;
  timelineData: TimelineItem[];
  topVideos: any[];
}

export interface ComparisonResults {
  termA: TermStats;
  termB: TermStats;
  winner: string;
}