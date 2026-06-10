// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchRepeatJobRequest extends $dara.Model {
  /**
   * @remarks
   * Calling number
   * 
   * @example
   * []
   */
  callingNumber?: string[];
  /**
   * @remarks
   * Job group description
   * 
   * @example
   * 测试3
   */
  description?: string;
  /**
   * @remarks
   * Job group status
   * 
   * @example
   * Succeeded,NoInteraction,Failed,Cancelled
   */
  filterStatus?: string;
  /**
   * @remarks
   * Configuration parameters for flash SMS push, in JSON format, including configuration information for third-party flash SMS.
   * 
   * - Template ID: Flash SMS template ID.
   * 
   * - Config ID: Flash SMS configuration ID.
   * 
   * @example
   * {"templateId":"10471","configId":"8037f524-6ff2-4dbe-bb28-f59234ea7a64"}
   */
  flashSmsExtras?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2bfa5ae4-7185-4227-a3b8-328f26f11be1
   */
  instanceId?: string;
  /**
   * @remarks
   * Minimum concurrency
   * 
   * @example
   * 2
   */
  minConcurrency?: number;
  /**
   * @remarks
   * Job name
   * 
   * This parameter is required.
   * 
   * @example
   * 24
   */
  name?: string;
  /**
   * @remarks
   * Job priority
   * 
   * @example
   * 10
   */
  priority?: string;
  /**
   * @remarks
   * Redial calling number list
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * Redial policy JSON
   * 
   * @example
   * {\\"emptyNumberIgnore\\":false,\\"inArrearsIgnore\\":false,\\"outOfServiceIgnore\\":false}
   */
  recallStrategyJson?: string;
  /**
   * @remarks
   * Ringing duration
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @remarks
   * Script ID
   * 
   * @example
   * 0fe7f71c-8771-42ef-9bb1-19aa16ae7120
   */
  scriptId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * This parameter is required.
   * 
   * @example
   * c4f8a3d3-2e94-4bd4-aef8-e35f663d4847
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * Job execution policy
   * 
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

