// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignShrinkRequest extends $dara.Model {
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
  caseListShrink?: string;
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
      caseListShrink: 'CaseList',
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
      caseListShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

