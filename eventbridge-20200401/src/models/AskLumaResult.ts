// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Constraints } from "./Constraints";
import { Content } from "./Content";


export class AskLumaResult extends $dara.Model {
  /**
   * @example
   * false
   */
  clarificationNeeded?: boolean;
  clarificationQuestion?: string;
  constraints?: Constraints;
  content?: Content;
  /**
   * @example
   * conv_xxx
   */
  conversationId?: string;
  /**
   * @example
   * ExecutionFailed, Timeout, RateLimited, InternalError, ConversationExpired
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
  /**
   * @example
   * RUNNING, SUCCEEDED, FAILED, TIMEOUT
   */
  status?: string;
  /**
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

