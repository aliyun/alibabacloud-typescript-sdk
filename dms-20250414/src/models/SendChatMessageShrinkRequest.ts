// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_12345
   */
  agentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  dataSourceShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @example
   * primary
   */
  messageType?: string;
  parentSessionId?: string;
  question?: string;
  /**
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sess_12345
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      DMSUnit: 'DMSUnit',
      dataSourceShrink: 'DataSource',
      message: 'Message',
      messageType: 'MessageType',
      parentSessionId: 'ParentSessionId',
      question: 'Question',
      quotedMessage: 'QuotedMessage',
      replyTo: 'ReplyTo',
      sessionConfigShrink: 'SessionConfig',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      DMSUnit: 'string',
      dataSourceShrink: 'string',
      message: 'string',
      messageType: 'string',
      parentSessionId: 'string',
      question: 'string',
      quotedMessage: 'string',
      replyTo: 'string',
      sessionConfigShrink: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

