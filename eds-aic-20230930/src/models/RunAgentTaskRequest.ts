// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the mobile node.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * An array of mobile node IDs. Specify a maximum of 100 IDs per request.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of steps the task can execute. This limit prevents infinite loops. Valid values: 30–1000. Default: 1000.
   * 
   * @example
   * 30
   */
  maxSteps?: number;
  /**
   * @remarks
   * The task timeout in seconds. Valid values: 300–3600. Default: 3600.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The user prompt in natural language. The Agent completes the task based on this prompt.
   * 
   * This parameter is required.
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
      timeoutSeconds: 'TimeoutSeconds',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxSteps: 'number',
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

