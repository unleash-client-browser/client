import { Feature } from 'src/feature';
import { UnleashResponseDto } from 'src/unleash.dto';

export interface UnleashClientOptions {
  url: string;
  instanceId: string;
  environment: string;
  refreshInterval?: number;
}

export const createUnleashClient = ({
  url,
  instanceId,
  environment,
  refreshInterval = 30000,
}: UnleashClientOptions) => {
  /**
   * @TODO: Cache with localstorage
   */
  let featureMap: Map<string, Feature> = new Map();

  if (!url) throw new Error('missing url!');
  if (!instanceId) throw new Error('missing instanceId!');
  if (!environment) throw new Error('missing environment!');

  const getFeatures = () =>
    fetch(`${url}/client/features`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'unleash-instanceid': instanceId,
        'unleash-appname': environment,
      },
    })
      .then<UnleashResponseDto>(r => r.json())
      .then(res => {
        featureMap = new Map(res.features.map(feat => [feat.name, feat]));
      });

  const isEnabled = (featureName: string): boolean => {
    const feature = featureMap.get(featureName);

    return feature ? feature.enabled : false;
  };

  const getFeature = (featureName: string): Feature | undefined =>
    featureMap.get(featureName);

  return {
    options: { url, instanceId, environment, refreshInterval } as Readonly<
      UnleashClientOptions
    >,
    requestFeatures: getFeatures,
    isEnabled,
    getFeature,
  };
};
