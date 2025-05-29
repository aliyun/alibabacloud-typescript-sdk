// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentOutboundCallConfig } from "./AiagentOutboundCallConfig";


export class StartAIAgentOutboundCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***********e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173*****533
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 183*****333
   */
  callerNumber?: string;
  config?: AIAgentOutboundCallConfig;
  /**
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      config: 'Config',
      sessionId: 'SessionId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      calledNumber: 'string',
      callerNumber: 'string',
      config: AIAgentOutboundCallConfig,
      sessionId: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

