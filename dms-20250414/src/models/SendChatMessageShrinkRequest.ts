// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **[Optimized]** This field is now automatically retrieved in the background. You do not need to specify this field.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * **[Optimized]** This field is now automatically retrieved in the background. You do not need to specify this field when you call the API operation.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. You can specify only one data source for this parameter. We recommend that you use the DataSources parameter instead.
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
   * The content of the message sent to the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: primary.
   * 
   * - In normal interactions with the agent, the message type is primary.
   * - When the message responds to a human-in-the-loop question from the agent, the type must be additional.
   * - When the message triggers report generation, the type must be report.
   * - When the message cancels the current session, the type must be cancel.
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
   * The specific question asked by the agent to the user through human-in-the-loop. This field is required when the message type is additional.
   * 
   * @example
   * Provide the calculation criteria for GMV
   */
  question?: string;
  /**
   * @remarks
   * The current quoted content. This parameter is typically used during interactions with the agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * If this message is a reply to an agent message, such as an agent clarifying a question through ASK_HUMAN, you must accurately pass the checkpoint sequence number carried in the agent message to reply_to. If this message is not a targeted reply, such as requesting the agent to perform further in-depth analysis after the analysis is complete, you can leave reply_to empty or set it to 0.  
   * 
   * This field affects how the agent decides to process the message. Passing an incorrect value may lead to suboptimal analysis results.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configurations for the current session. For the same session, only the configurations passed during the first SendMessage call take effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfigShrink?: string;
  /**
   * @remarks
   * The session ID. This field is optional and is used for multi-turn sessions.
   * - You can start a session without specifying this field. The response will contain the session ID of the current session.
   * - You can also manually create a session ID by calling the CreateDataAgentSession operation and include the ID when you initiate the session.
   * - If you need multi-turn conversations, such as follow-up questions or confirming execution plans, include the session ID returned by the previous SendChatMessage operation in this operation.
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
   * The OSS bucket of the user. If you leave this parameter empty, the analysis process is securely stored in the built-in storage.
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

