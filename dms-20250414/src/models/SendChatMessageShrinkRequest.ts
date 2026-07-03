// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This parameter is required. You can obtain the current AgentId from the response of the CreateAgentSession operation. Agent resources have a lifecycle, so the AgentId you need to specify may change with each request.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The Data Management unit you are currently in. If you choose to analyze a database, this information is used to correctly connect to your Data Management instance. You can view your current Data Management unit in the Data Management console. If you are a user of Alibaba Cloud China Website (www.aliyun.com), set this parameter to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter is optional. Only one data source can be specified for this parameter. Use the DataSources parameter instead.
   * 
   * @example
   * null
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The detailed data source information. This parameter is optional.
   */
  dataSourcesShrink?: string;
  /**
   * @remarks
   * The message content to send to the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: `[primary]`.  
   * 
   * - For regular interactions with the Agent, set the message type to `[primary]`.
   * 
   * - When the message is a response to the Agent\\"s Human-in-Loop question, set the type to `[additional]`.
   * 
   * - When the message is intended to trigger report generation, set the type to `[report]`.
   * 
   * - When the message is intended to cancel the current session, set the type to `[cancel]`.
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
   * The specific question that the Agent asks the user through Human-in-Loop. This parameter is required when the message type is `additional`.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * The quoted content. This parameter is typically used during interactions with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * When this message is a reply to an Agent message (for example, the Agent asks a clarifying question through ASK_HUMAN), set reply_to to the exact Checkpoint sequence number carried by that Agent message. If this message is not a targeted reply, for example, requesting the Agent to perform further in-depth analysis after analysis is complete, leave reply_to empty or set it to "0".  
   * 
   * This field affects how the Agent decides to process the message. Passing an incorrect value may lead to analysis results that do not meet expectations.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for this session. Only the configuration sent with the first SendMessage call in the same session takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This parameter is required. You can obtain the SessionId by calling the CreateAgentSession operation.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  /**
   * @remarks
   * The configuration items that affect only the current task.
   */
  taskConfigShrink?: string;
  userOssBucket?: string;
  workspaceId?: string;
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
      userOssBucket: 'UserOssBucket',
      workspaceId: 'WorkspaceId',
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
      userOssBucket: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

