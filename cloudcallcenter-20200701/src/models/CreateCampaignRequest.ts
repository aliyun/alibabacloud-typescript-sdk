// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCampaignRequestCaseList extends $dara.Model {
  customVariables?: string;
  phoneNumber?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignRequest extends $dara.Model {
  callableTime?: string;
  caseFileKey?: string;
  caseList?: CreateCampaignRequestCaseList[];
  contactFlowId?: string;
  endTime?: string;
  executingUntilTimeout?: boolean;
  flashSmsParameters?: string;
  instGroupId?: string;
  instanceId?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  numberList?: string[];
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
      caseList: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      flashSmsParameters: 'FlashSmsParameters',
      instGroupId: 'InstGroupId',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      numberList: 'NumberList',
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
      caseList: { 'type': 'array', 'itemType': CreateCampaignRequestCaseList },
      contactFlowId: 'string',
      endTime: 'string',
      executingUntilTimeout: 'boolean',
      flashSmsParameters: 'string',
      instGroupId: 'string',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
      queueId: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      startTime: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

