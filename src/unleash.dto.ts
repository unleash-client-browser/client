import { Feature } from 'src/feature';

export interface UnleashResponseDto {
  version: number;
  features: Feature[];
}
