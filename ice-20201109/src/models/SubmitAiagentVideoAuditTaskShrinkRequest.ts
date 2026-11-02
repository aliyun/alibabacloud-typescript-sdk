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
   * The moderation interval, in milliseconds. Valid values: 0 to 5000. Default value: 3000. If you set this parameter to 0, all captured frame data specified in CapturePolicies is sent to the large model in the corresponding agent at a time. If you set this parameter to a non-zero value, such as 3000, all captured frame data is sent to the large model in sequence at an interval of 3,000 milliseconds.
   * 
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @remarks
   * The callback configuration.
   * 
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfigShrink?: string;
  /**
   * @remarks
   * The array of moderation policies. Each policy generates a model result.
   * 
   * This parameter is required.
   */
  capturePoliciesShrink?: string;
  /**
   * @remarks
   * The input file.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {"Custom":"hello"}
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

