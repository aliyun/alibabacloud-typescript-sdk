// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Content } from "./Content";


export class AskLumaLogEntry extends $dara.Model {
  /**
   * @example
   * my-agent
   */
  agentName?: string;
  /**
   * @example
   * false
   */
  clarificationNeeded?: boolean;
  clarificationQuestion?: string;
  content?: Content;
  /**
   * @example
   * conv_xxx
   */
  conversationId?: string;
  /**
   * @example
   * 1717200000000
   */
  createdAt?: string;
  /**
   * @example
   * 3200
   */
  durationMs?: number;
  /**
   * @example
   * ExecutionFailed
   */
  errorCode?: string;
  /**
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  errorMessage?: string;
  /**
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @example
   * msg_xxx
   */
  messageId?: string;
  question?: string;
  /**
   * @example
   * MCP, CHAT
   */
  source?: string;
  /**
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

