// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Content } from "./Content";


export class AskLumaLogEntry extends $dara.Model {
  /**
   * @remarks
   * Agent name
   * 
   * @example
   * my-agent
   */
  agentName?: string;
  /**
   * @remarks
   * Whether clarification is needed
   * 
   * @example
   * false
   */
  clarificationNeeded?: boolean;
  /**
   * @remarks
   * Clarification question text
   * 
   * @example
   * 您指的是哪张表？
   */
  clarificationQuestion?: string;
  /**
   * @remarks
   * Structured result body
   */
  content?: Content;
  /**
   * @remarks
   * Conversation ID
   * 
   * @example
   * conv_xxx
   */
  conversationId?: string;
  /**
   * @remarks
   * Creation time (milliseconds)
   * 
   * @example
   * 1717200000000
   */
  createdAt?: string;
  /**
   * @remarks
   * Invocation duration (milliseconds)
   * 
   * @example
   * 3200
   */
  durationMs?: number;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * ExecutionFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * Error details
   * 
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether it is an error
   * 
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * msg_xxx
   */
  messageId?: string;
  /**
   * @remarks
   * Input question
   * 
   * @example
   * 帮我统计一下最近的订单数据。
   */
  question?: string;
  /**
   * @remarks
   * Log source
   * 
   * @example
   * MCP, CHAT
   */
  source?: string;
  /**
   * @remarks
   * Execution status
   * 
   * @example
   * RUNNING, SUCCEEDED, FAILED, TIMEOUT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      clarificationNeeded: 'ClarificationNeeded',
      clarificationQuestion: 'ClarificationQuestion',
      content: 'Content',
      conversationId: 'ConversationId',
      createdAt: 'CreatedAt',
      durationMs: 'DurationMs',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isError: 'IsError',
      messageId: 'MessageId',
      question: 'Question',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      clarificationNeeded: 'boolean',
      clarificationQuestion: 'string',
      content: Content,
      conversationId: 'string',
      createdAt: 'string',
      durationMs: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      isError: 'boolean',
      messageId: 'string',
      question: 'string',
      source: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

