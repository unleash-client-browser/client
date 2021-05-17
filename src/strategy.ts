export enum StrategyName {
  USER_WITH_ID = 'userWithId',
  FLEXIBLE_ROLLOUT = 'flexibleRollout',
  GRADUAL_ROLLOUT_USER_ID = 'gradualRolloutUserId',
  GRADUAL_ROLLOUT_SESSION_ID = 'gradualRolloutSessionId',
  GRADUAL_ROLLOUT_RANDOM = 'gradualRolloutRandom',
  REMOTE_ADDRESS = 'remoteAddress',
  APPLICATION_HOSTNAME = 'applicationHostname',
}

interface StrategyBase {
  name: string;
  parameters: Record<string, unknown>;
}

export interface UserWithIdStrategy extends StrategyBase {
  name: StrategyName.USER_WITH_ID;
  parameters: {
    userIds: string[];
  };
}

export interface FlexibleRollout extends StrategyBase {
  name: StrategyName.FLEXIBLE_ROLLOUT;
  parameters: {
    stickiness: 'default' | 'userId' | 'sessionId' | 'random';
    groupId: string;
    rollout: number;
  };
}

/** @TODO: Implement more strategies */

export type Strategy = UserWithIdStrategy | FlexibleRollout;
