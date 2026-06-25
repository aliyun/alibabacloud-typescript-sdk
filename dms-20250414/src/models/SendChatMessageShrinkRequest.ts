// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This is a required field. You can obtain the current AgentId from the return value of the CreateAgentSession operation. Agent resources have a lifecycle, so the AgentId you need to pass in each request may change.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The DMS unit you are currently in. If you choose to analyze a database, this information will be used to correctly connect to your DMS instance through DMS. You can go to the DMS console to check your current DMS unit. If you are a China site user of Alibaba Cloud, you can directly enter cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. Only one data source can be passed in through this parameter. We recommend that you use the DataSources parameter instead.
   * 
   * @example
   * null
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The detailed data source information. This parameter can be left empty.
   */
  dataSourcesShrink?: string;
  /**
   * @remarks
   * The content of the message to be sent to the Agent.
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
   * - In normal cases, when interacting with the Agent, the message type is `[primary]`.
   * 
   * - When the message is a response to the Agent\\"s Human-in-Loop question, the type should be `[additional]`.
   * 
   * - When the message is intended to trigger a report generation, the type should be `[report]`.
   * 
   * - When the message is intended to cancel the current session, the type should be `[cancel]`.
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
   * This field is required when the message type is `additional`. Pass in the specific question that the Agent asked the user through Human-in-Loop.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * Pass in the current quoted content, typically used when interacting with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * When this message is a reply to an Agent message (for example, when the Agent asks for clarification through ASK_HUMAN), reply_to must be set to the exact Checkpoint number carried in that Agent message. If this message is not a specific reply, such as requesting the Agent for further in-depth analysis after analysis is completed, reply_to can be left empty or set to "0".
   * 
   * This field affects how the Agent decides to process the message. Passing an incorrect value may lead to analysis results that do not meet expectations.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for this session. For the same session, only the configuration passed in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This is a required field. You can obtain the SessionId by calling CreateAgentSession.
   * 
   * This parameter is required.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  /**
   * @remarks
   * The configuration items that only affect the current task.
   */
  taskConfigShrink?: string;
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

