// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAIAgentVideoAuditTaskRequestCallbackConfig } from "./SubmitAiagentVideoAuditTaskRequestCallbackConfig";
import { SubmitAIAgentVideoAuditTaskRequestCapturePolicies } from "./SubmitAiagentVideoAuditTaskRequestCapturePolicies";
import { SubmitAIAgentVideoAuditTaskRequestInput } from "./SubmitAiagentVideoAuditTaskRequestInput";


export class SubmitAIAgentVideoAuditTaskRequest extends $dara.Model {
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
  callbackConfig?: SubmitAIAgentVideoAuditTaskRequestCallbackConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  capturePolicies?: SubmitAIAgentVideoAuditTaskRequestCapturePolicies[];
  /**
   * @remarks
   * This parameter is required.
   */
  input?: SubmitAIAgentVideoAuditTaskRequestInput;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      auditInterval: 'AuditInterval',
      callbackConfig: 'CallbackConfig',
      capturePolicies: 'CapturePolicies',
      input: 'Input',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      auditInterval: 'number',
      callbackConfig: SubmitAIAgentVideoAuditTaskRequestCallbackConfig,
      capturePolicies: { 'type': 'array', 'itemType': SubmitAIAgentVideoAuditTaskRequestCapturePolicies },
      input: SubmitAIAgentVideoAuditTaskRequestInput,
      userData: 'string',
    };
  }

  validate() {
    if(this.callbackConfig && typeof (this.callbackConfig as any).validate === 'function') {
      (this.callbackConfig as any).validate();
    }
    if(Array.isArray(this.capturePolicies)) {
      $dara.Model.validateArray(this.capturePolicies);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

