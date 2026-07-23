// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Constraints } from "./Constraints";
import { Content } from "./Content";


export class AskLumaResult extends $dara.Model {
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
   * 您指的是哪个数据库中的员工表？
   */
  clarificationQuestion?: string;
  /**
   * @remarks
   * Query constraints
   */
  constraints?: Constraints;
  /**
   * @remarks
   * Structured result body
   */
  content?: Content;
  /**
   * @remarks
   * Conversation identifier, used for multi-turn follow-up questions
   * 
   * @example
   * conv_xxx
   */
  conversationId?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * ExecutionFailed, Timeout, RateLimited, InternalError, ConversationExpired
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
   * Whether it is an error. false = query succeeded or clarification (including empty result set); true = execution failed / timeout / rate limited / internal error
   * 
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @remarks
   * Message identifier, used for PollAskResult polling
   * 
   * @example
   * msg_xxx
   */
  messageId?: string;
  /**
   * @remarks
   * Execution status
   * 
   * @example
   * RUNNING, SUCCEEDED, FAILED, TIMEOUT
   */
  status?: string;
  /**
   * @remarks
   * Whether the result was truncated due to exceeding the storage limit. Only appears in large result set scenarios
   * 
   * @example
   * true
   */
  storageTruncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      clarificationNeeded: 'ClarificationNeeded',
      clarificationQuestion: 'ClarificationQuestion',
      constraints: 'Constraints',
      content: 'Content',
      conversationId: 'ConversationId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isError: 'IsError',
      messageId: 'MessageId',
      status: 'Status',
      storageTruncated: 'StorageTruncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clarificationNeeded: 'boolean',
      clarificationQuestion: 'string',
      constraints: Constraints,
      content: Content,
      conversationId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      isError: 'boolean',
      messageId: 'string',
      status: 'string',
      storageTruncated: 'boolean',
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

