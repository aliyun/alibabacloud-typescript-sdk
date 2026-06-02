// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobGroupRequest extends $dara.Model {
  callingNumber?: string[];
  description?: string;
  flashSmsExtras?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3edc0260-6f7c-4de4-8535-09372240618b
   */
  jobGroupId?: string;
  /**
   * @example
   * Draft
   */
  jobGroupStatus?: string;
  /**
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  priority?: string;
  recallCallingNumber?: string[];
  /**
   * @example
   * {\\"emptyNumberIgnore\\":false,\\"inArrearsIgnore\\":false,\\"outOfServiceIgnore\\":false}
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
   * 5a3940ce-a12f-4222-9f0f-605a9b89ea7c
   */
  scriptId?: string;
  /**
   * @example
   * {\\"maxAttemptsPerDay\\":\\"0\\",\\"minAttemptInterval\\":\\"5\\",\\"Id\\":\\"689fc584-7f9f-4dc2-933d-8711beef7b15\\"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      flashSmsExtras: 'FlashSmsExtras',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupStatus: 'JobGroupStatus',
      minConcurrency: 'MinConcurrency',
      name: 'Name',
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
      description: 'string',
      flashSmsExtras: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupStatus: 'string',
      minConcurrency: 'number',
      name: 'string',
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

