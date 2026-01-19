// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignShrinkRequest extends $dara.Model {
  callableTime?: string;
  caseFileKey?: string;
  caseListShrink?: string;
  contactFlowId?: string;
  endTime?: string;
  executingUntilTimeout?: boolean;
  flashSmsParameters?: string;
  instGroupId?: string;
  instanceId?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  numberListShrink?: string;
  queueId?: string;
  simulation?: boolean;
  simulationParameters?: string;
  startTime?: string;
  strategyParameters?: string;
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      caseListShrink: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      flashSmsParameters: 'FlashSmsParameters',
      instGroupId: 'InstGroupId',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      numberListShrink: 'NumberList',
      queueId: 'QueueId',
      simulation: 'Simulation',
      simulationParameters: 'SimulationParameters',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      caseFileKey: 'string',
      caseListShrink: 'string',
      contactFlowId: 'string',
      endTime: 'string',
      executingUntilTimeout: 'boolean',
      flashSmsParameters: 'string',
      instGroupId: 'string',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      numberListShrink: 'string',
      queueId: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      startTime: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

