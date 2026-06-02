// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchRepeatJobRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  callingNumber?: string[];
  description?: string;
  /**
   * @example
   * Succeeded,NoInteraction,Failed,Cancelled
   */
  filterStatus?: string;
  flashSmsExtras?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2bfa5ae4-7185-4227-a3b8-328f26f11be1
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  minConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24
   */
  name?: string;
  /**
   * @example
   * 10
   */
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
   * 0fe7f71c-8771-42ef-9bb1-19aa16ae7120
   */
  scriptId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c4f8a3d3-2e94-4bd4-aef8-e35f663d4847
   */
  sourceGroupId?: string;
  /**
   * @example
   * {\\"maxAttemptsPerDay\\":1,\\"minAttemptInterval\\":1,\\"routingStrategy\\":\\"LocalFirst\\"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      filterStatus: 'FilterStatus',
      flashSmsExtras: 'FlashSmsExtras',
      instanceId: 'InstanceId',
      minConcurrency: 'MinConcurrency',
      name: 'Name',
      priority: 'Priority',
      recallCallingNumber: 'RecallCallingNumber',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scriptId: 'ScriptId',
      sourceGroupId: 'SourceGroupId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      filterStatus: 'string',
      flashSmsExtras: 'string',
      instanceId: 'string',
      minConcurrency: 'number',
      name: 'string',
      priority: 'string',
      recallCallingNumber: { 'type': 'array', 'itemType': 'string' },
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scriptId: 'string',
      sourceGroupId: 'string',
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

