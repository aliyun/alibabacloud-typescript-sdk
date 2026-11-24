// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCopilotChatRequestCreateConversation extends $dara.Model {
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * qwen3.7-max
   */
  model?: string;
  /**
   * @remarks
   * The planning configuration.
   * 
   * @example
   * enabled
   */
  planMode?: string;
  /**
   * @remarks
   * The security project ID.
   * 
   * @example
   * project-incident-****
   */
  projectId?: string;
  /**
   * @remarks
   * The deep thinking configuration.
   * 
   * @example
   * enabled
   */
  thinkingMode?: string;
  /**
   * @remarks
   * The conversation title.
   * 
   * @example
   * Security event investigation
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      planMode: 'PlanMode',
      projectId: 'ProjectId',
      thinkingMode: 'ThinkingMode',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      planMode: 'string',
      projectId: 'string',
      thinkingMode: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCopilotChatRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Investigate abnormal logon activities in the last hour
   */
  content?: string;
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCopilotChatRequest extends $dara.Model {
  /**
   * @remarks
   * The client conversation ID.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  clientConversationId?: string;
  /**
   * @remarks
   * The client message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 366932fb-9a83-4a2d-94dd-c925b35f****
   */
  clientMessageId?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The conversation creation configuration.
   */
  createConversation?: CreateCopilotChatRequestCreateConversation;
  /**
   * @remarks
   * The language of the returned messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of messages.
   * 
   * This parameter is required.
   */
  messages?: CreateCopilotChatRequestMessages[];
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * qwen3.7-max
   */
  model?: string;
  /**
   * @remarks
   * The planning configuration.
   * 
   * @example
   * enabled
   */
  planMode?: string;
  /**
   * @remarks
   * The security project ID.
   * 
   * @example
   * project-incident-****
   */
  projectId?: string;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replaced conversation turn.
   * 
   * @example
   * dc18b894-19a3-45ee-8768-a59478e0****
   */
  replaceTurnId?: string;
  /**
   * @remarks
   * The target route identifier for execution.
   * 
   * @example
   * security-agent-route-****
   */
  routeTarget?: string;
  /**
   * @remarks
   * The source of the request.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * Specifies whether to enable streaming responses.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The deep thinking configuration.
   * 
   * @example
   * enabled
   */
  thinkingMode?: string;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
   * 
   * @example
   * 550e8400e29b41d4a71644665544****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientConversationId: 'ClientConversationId',
      clientMessageId: 'ClientMessageId',
      conversationId: 'ConversationId',
      createConversation: 'CreateConversation',
      lang: 'Lang',
      messages: 'Messages',
      model: 'Model',
      planMode: 'PlanMode',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      replaceTurnId: 'ReplaceTurnId',
      routeTarget: 'RouteTarget',
      source: 'Source',
      stream: 'Stream',
      thinkingMode: 'ThinkingMode',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientConversationId: 'string',
      clientMessageId: 'string',
      conversationId: 'string',
      createConversation: CreateCopilotChatRequestCreateConversation,
      lang: 'string',
      messages: { 'type': 'array', 'itemType': CreateCopilotChatRequestMessages },
      model: 'string',
      planMode: 'string',
      projectId: 'string',
      regionId: 'string',
      replaceTurnId: 'string',
      routeTarget: 'string',
      source: 'string',
      stream: 'boolean',
      thinkingMode: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.createConversation && typeof (this.createConversation as any).validate === 'function') {
      (this.createConversation as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

