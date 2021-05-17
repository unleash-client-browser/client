import { Strategy } from 'src/strategy';

export interface Feature {
  name: string;
  description: string;
  enabled: boolean;
  strategies: Strategy[];
}
