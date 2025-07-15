// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignRequestCaseList extends $dara.Model {
  customVariables?: string;
  /**
   * @example
   * 1888888888
   */
  phoneNumber?: string;
  /**
   * @example
   * 01
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"beginTime":"00:00:00","endTime":"23:00:00" }]
   */
  callableTime?: string;
  /**
   * @example
   * ccc-test/namelist.csv
   */
  caseFileKey?: string;
  caseList?: CreateCampaignRequestCaseList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c1f2bc75-422e-43c7-9c9d9d95633a
   */
  contactFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634313600000
   */
  endTime?: string;
  executingUntilTimeout?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  simulation?: boolean;
  simulationParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634140800000
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ratio":1}
   */
  strategyParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACING
   */
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      caseList: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
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
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

