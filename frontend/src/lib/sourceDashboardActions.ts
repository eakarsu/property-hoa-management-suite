export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "hoa-community-manager",
    "label": "HOA Community Manager",
    "description": "Open HOA Community Manager workflows elevated from AIHOACommunityAssociationManager.",
    "href": "/hoa-requests",
    "sourceProjects": [
      "AIHOACommunityAssociationManager"
    ],
    "examples": [
      "HOA Requests",
      "Violation Notices",
      "Board Packets"
    ],
    "count": 1
  }
];
