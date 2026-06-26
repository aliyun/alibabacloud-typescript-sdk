// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Mobile node.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The list of Mobile node IDs. A maximum of 100 nodes are supported per request.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of execution steps for the task to prevent infinite loops. Valid values: 30 to 1000. Default value: 1000.
   * 
   * @example
   * 30
   */
  maxSteps?: number;
  scheduleId?: string;
  taskConfigId?: string;
  /**
   * @remarks
   * The task timeout period in seconds. Valid values: 300 to 3600. Default value: 3600.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The user instruction in natural language. The Agent performs operations based on this instruction.
   * 
   * @example
   * Download DingTalk from App Store
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      instanceIds: 'InstanceIds',
      maxSteps: 'MaxSteps',
      scheduleId: 'ScheduleId',
      taskConfigId: 'TaskConfigId',
      timeoutSeconds: 'TimeoutSeconds',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxSteps: 'number',
      scheduleId: 'string',
      taskConfigId: 'string',
      timeoutSeconds: 'number',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

