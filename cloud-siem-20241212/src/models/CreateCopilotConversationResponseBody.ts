// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCopilotConversationResponseBodyConversation extends $dara.Model {
  /**
   * @remarks
   * The security operations Agent session ID.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2026-01-31T10:10:20Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The returned conversation information.
   * 
   * @example
   * 1
   */
  feedback?: number;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * qwen3.7-max
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether planning is enabled. Valid values: disable, enable, force. Default value: enable.
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
   * The ID of the scheduled task. The ID is system-generated and globally unique.
   * 
   * @example
   * task-e34f770da4f04f6db21c2819****
   */
  scheduledTaskId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The thinking mode configuration.
   * 
   * @example
   * false
   */
  thinkingMode?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Security incident investigation
   */
  title?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-11-27 16:02:28
   */
  updatedAt?: string;
  /**
   * @remarks
   * The session visibility.
   * 
   * @example
   * []
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      createdAt: 'CreatedAt',
      feedback: 'Feedback',
      model: 'Model',
      planMode: 'PlanMode',
      projectId: 'ProjectId',
      scheduledTaskId: 'ScheduledTaskId',
      status: 'Status',
      thinkingMode: 'ThinkingMode',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      createdAt: 'string',
      feedback: 'number',
      model: 'string',
      planMode: 'string',
      projectId: 'string',
      scheduledTaskId: 'string',
      status: 'string',
      thinkingMode: 'string',
      title: 'string',
      updatedAt: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCopilotConversationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API version number. The value is 1.0.0.
   * 
   * @example
   * v1.2
   */
  apiVersion?: string;
  /**
   * @remarks
   * The conversation timestamp.
   */
  conversation?: CreateCopilotConversationResponseBodyConversation;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      conversation: 'Conversation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      conversation: CreateCopilotConversationResponseBodyConversation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.conversation && typeof (this.conversation as any).validate === 'function') {
      (this.conversation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

