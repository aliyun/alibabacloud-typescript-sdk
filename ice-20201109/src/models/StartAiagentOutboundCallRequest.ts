// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentOutboundCallConfig } from "./AiagentOutboundCallConfig";


export class StartAIAgentOutboundCallRequest extends $dara.Model {
  /**
   * @remarks
   * The AI agent ID configured in the [IMS console](https://ims.console.aliyun.com/ai/robot/list).
   * 
   * This parameter is required.
   * 
   * @example
   * ***********e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 173*****533
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number. Only numbers from mainland China are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 183*****333
   */
  callerNumber?: string;
  /**
   * @remarks
   * The AI agent outbound call configuration.
   */
  config?: AIAgentOutboundCallConfig;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * xx
   */
  imsAIAgentFreeObCall?: string;
  /**
   * @remarks
   * A unique identifier for the session. You can use this ID to store, query, and synchronize chat history across multiple calls. This parameter is optional.
   * 
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"city":"Hangzhou"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      config: 'Config',
      imsAIAgentFreeObCall: 'ImsAIAgentFreeObCall',
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
      imsAIAgentFreeObCall: 'string',
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

