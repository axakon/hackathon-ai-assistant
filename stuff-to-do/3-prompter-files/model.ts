export type ModelStatus = {
  isActive: boolean;
  lastUpdated: Date;
};

export type ModelParameters = {
  temperature: number;
  maxTokens: number;
  topP: number;
};

export type Model = {
  id: string;
  name: string;
  description: string;
  prompt: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  tags: string[];
  status: ModelStatus;
  parameters: ModelParameters;
  usageCount: number;
  averageResponseTime?: number;
};
