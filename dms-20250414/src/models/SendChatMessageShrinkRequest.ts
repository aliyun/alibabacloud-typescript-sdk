// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This parameter is required. You can obtain the current AgentId from the response of the CreateAgentSession operation. Agent resources have a lifecycle, so the AgentId you need to specify may change with each request.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The Data Management unit you are currently in. If you choose to analyze a database, this information is used to correctly connect to your Data Management instance. You can go to the Data Management console to view your current Data Management unit. If you are a user of Alibaba Cloud China Website (www.aliyun.com), set this parameter to ap-southeast-1.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter is optional.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The detailed data source information. This parameter is optional.
   */
  dataSourcesShrink?: string;
  /**
   * @remarks
   * The message content to send to the Agent in this request.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: `[primary]`. When the message is a response to the Agent\\"s human-in-the-loop question, set this parameter to `[additional]`. When the message is intended to cancel the current session, set this parameter to `[cancel]`.
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
   * The specific question that the Agent asks the user through human-in-the-loop. This parameter is required when the message type is `additional`.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * The quoted content, typically used during interaction with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * Indicates which Agent message this message responds to. Set this parameter to the largest Checkpoint sequence number currently received. Set it to 0 for the first message. This field is used for message deduplication in case of occasional network issues or duplicate message delivery.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for this session. For the same session, only the configuration included in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This parameter is required. You can obtain the SessionId by calling the CreateAgentSession operation.
   * 
   * This parameter is required.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  taskConfigShrink?: string;
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
      taskConfigShrink: 'TaskConfig',
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
      taskConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

