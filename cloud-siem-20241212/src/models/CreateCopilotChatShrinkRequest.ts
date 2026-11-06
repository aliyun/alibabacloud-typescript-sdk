// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCopilotChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client session ID.
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
   * The session ID.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The session creation configuration.
   */
  createConversationShrink?: string;
  /**
   * @remarks
   * The language of the returned message. Valid values:
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
  messagesShrink?: string;
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
   * The region of the data management center for threat analysis. Select the region of the management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets reside in the Chinese mainland.
   * - ap-southeast-1: Assets reside outside the Chinese mainland.
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
      createConversationShrink: 'CreateConversation',
      lang: 'Lang',
      messagesShrink: 'Messages',
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
      createConversationShrink: 'string',
      lang: 'string',
      messagesShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

