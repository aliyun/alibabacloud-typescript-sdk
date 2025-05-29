// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *******3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  capturePoliciesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputShrink?: string;
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

