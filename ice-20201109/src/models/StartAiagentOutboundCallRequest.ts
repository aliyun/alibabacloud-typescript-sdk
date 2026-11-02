// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentOutboundCallConfig } from "./AiagentOutboundCallConfig";


export class StartAIAgentOutboundCallRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent configured in the [IMS console](https://ims.console.aliyun.com/ai/robot/list).
   * 
   * This parameter is required.
   * 
   * @example
   * ***********e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The callee number.
   * 
   * This parameter is required.
   * 
   * @example
   * 173*****533
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number. Only phone numbers in the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 183*****333
   */
  callerNumber?: string;
  /**
   * @remarks
   * The outbound call configuration of the AI agent.
   */
  config?: AIAgentOutboundCallConfig;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * xx
   */
  imsAIAgentFreeObCall?: string;
  /**
   * @remarks
   * The unique identifier of the conversation, which can be used to store, query, and synchronize chat records across multiple calls. Default value: none.
   * 
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * The user-defined message.
   * 
   * @example
   * {"city":"hangzhou"}
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

