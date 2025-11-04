// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * *******3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The interval, in milliseconds, at which to submit captured frames to the AI agent. Valid values: 0 to 5000. Default value: 3000. If it is set to 0, all captured frames are sent to the model in a single batch request. Otherwise, frames are sent sequentially with the specified interval between each request.
   * 
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @remarks
   * Callback configurations.
   * 
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfigShrink?: string;
  /**
   * @remarks
   * An array of frame-capturing policies. Each policy defines a set of frames to be analyzed and will generate a separate result from the model.
   * 
   * This parameter is required.
   */
  capturePoliciesShrink?: string;
  /**
   * @remarks
   * The details of the input file.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The user-defined data.
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      auditInterval: 'AuditInterval',
      callbackConfigShrink: 'CallbackConfig',
      capturePoliciesShrink: 'CapturePolicies',
      inputShrink: 'Input',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      auditInterval: 'number',
      callbackConfigShrink: 'string',
      capturePoliciesShrink: 'string',
      inputShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

