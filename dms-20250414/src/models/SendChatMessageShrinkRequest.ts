// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **[Optimized]** This field is now automatically obtained by the backend. You do not need to specify this field.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * **[Optimized]** This field is now automatically obtained by the backend. You do not need to specify this field when calling the API.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. This parameter supports only one data source. Use the DataSources parameter instead.
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
   * - For regular interactions with the Agent, the message type is `[primary]`.
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
   * This field is required when the message type is `additional`. Specify the specific question that the Agent asks the user through Human-in-Loop.
   * 
   * @example
   * Please provide the criteria for calculating GMV
   */
  question?: string;
  /**
   * @remarks
   * The quoted content. This is typically used during interactions with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * When this message is a reply to an Agent message (for example, the Agent asks a clarification question through ASK_HUMAN), reply_to must be set to the exact Checkpoint sequence number carried in that Agent message. If this message is not a targeted reply, such as requesting the Agent to perform further in-depth analysis after the analysis is complete, reply_to can be left empty or set to "0".  
   * 
   * This field affects how the Agent decides to process the message. Passing an incorrect value may result in analysis results that do not meet expectations.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for the current session. For the same session, only the configuration included in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This is an optional field used for multi-turn conversations.
   * - You can start a conversation without specifying this field. The response includes the SessionID for the current session.
   * - You can also manually create a session ID by calling the CreateDataAgentSession operation and include the ID when initiating a conversation.
   * - If you need multi-turn conversations (such as follow-up questions or confirming execution plans), include the SessionID returned by the previous SendChatMessage call.
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
  /**
   * @remarks
   * The user\\"s OSS bucket. If this field is left empty, the analysis results are securely stored in the built-in storage.
   * 
   * @example
   * my-bucket
   */
  userOssBucket?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * c1p71ne***baexrt3o
   */
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

