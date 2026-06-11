// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This parameter is required. You can obtain this ID from the response of the `CreateAgentSession` operation. An agent has a lifecycle, so its ID may change with each request.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The DMS unit where your DMS instance is located. This information is used to connect to your DMS instance for database analysis. You can find this value in the DMS console. For users on the Alibaba Cloud China site, you can enter `cn-hangzhou`.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. Optional.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * A list of data sources. Optional.
   */
  dataSourcesShrink?: string;
  /**
   * @remarks
   * The content of the message to send to the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. The default value is `primary`. Set this parameter to `additional` when responding to a human-in-the-loop question from the agent. Set it to `cancel` to cancel the current session.
   * 
   * @example
   * primary
   */
  messageType?: string;
  /**
   * @remarks
   * The parent session ID.
   * 
   * @example
   * 20qrliuoo7p2vlsfg*****
   */
  parentSessionId?: string;
  /**
   * @remarks
   * This parameter is required if the `MessageType` is `additional`. It contains the specific question asked by the agent during the human-in-the-loop process.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * The quoted content. This parameter is typically used when interacting with the agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * This parameter specifies the agent message to which this message is a response, enabling message deduplication. Set this to the highest checkpoint sequence number you have received. For the first message, use 0.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * Session-specific configurations. These apply only if provided in the first `SendMessage` request of the session.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This parameter is required. You can obtain the session ID by calling the `CreateAgentSession` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      DMSUnit: 'DMSUnit',
      dataSourceShrink: 'DataSource',
      dataSourcesShrink: 'DataSources',
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
      dataSourcesShrink: 'string',
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

