// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupRequest extends $dara.Model {
  callingNumber?: string[];
  flashSmsExtras?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  jobGroupDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobGroupName?: string;
  /**
   * @example
   * 1
   */
  minConcurrency?: number;
  priority?: string;
  recallCallingNumber?: string[];
  /**
   * @example
   * {\\"emptyNumberIgnore\\":true,\\"inArrearsIgnore\\":true,\\"outOfServiceIgnore\\":true}
   */
  recallStrategyJson?: string;
  /**
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @example
   * {\\"maxAttemptsPerDay\\":1,\\"name\\":\\"fa16dc2e-f778-44ab-8f25-54b7901df82a\\",\\"startTime\\":1640157314127,\\"endTime\\":1640160914127,\\"minAttemptInterval\\":10}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      flashSmsExtras: 'FlashSmsExtras',
      instanceId: 'InstanceId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      priority: 'Priority',
      recallCallingNumber: 'RecallCallingNumber',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      flashSmsExtras: 'string',
      instanceId: 'string',
      jobGroupDescription: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      priority: 'string',
      recallCallingNumber: { 'type': 'array', 'itemType': 'string' },
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    if(Array.isArray(this.recallCallingNumber)) {
      $dara.Model.validateArray(this.recallCallingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

