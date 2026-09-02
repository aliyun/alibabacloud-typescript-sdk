// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Constraints } from "./Constraints";
import { Content } from "./Content";


export class AskLumaResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether clarification is needed.
   * 
   * @example
   * false
   */
  clarificationNeeded?: boolean;
  /**
   * @remarks
   * The clarification question text.
   * 
   * @example
   * Which database does the employee table you are referring to belong to?
   */
  clarificationQuestion?: string;
  /**
   * @remarks
   * The query constraints.
   */
  constraints?: Constraints;
  /**
   * @remarks
   * The structured result body.
   */
  content?: Content;
  /**
   * @remarks
   * The conversation ID, used for multi-turn follow-up questions.
   * 
   * @example
   * conv_xxx
   */
  conversationId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExecutionFailed, Timeout, RateLimited, InternalError, ConversationExpired
   */
  errorCode?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether an error occurred. A value of false indicates that the query succeeded or a clarification is needed (including empty result sets). A value of true indicates that the execution failed due to a timeout, throttling, or internal error.
   * 
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @remarks
   * The message ID, used for polling with PollAskResult.
   * 
   * @example
   * msg_xxx
   */
  messageId?: string;
  /**
   * @remarks
   * The submit status.
   * 
   * @example
   * RUNNING, SUCCEEDED, FAILED, TIMEOUT
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the result was truncated because it exceeded the storage limit. This field is returned only for large result sets.
   * 
   * @example
   * true
   */
  storageTruncated?: boolean;
  /**
   * @remarks
   * The business Wiki version that was actually used for this response. This field is not returned if the agent does not have a Wiki configured.
   * 
   * @example
   * eventhouse-multisource-demo-v1
   */
  wikiVersion?: string;
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
      wikiVersion: 'WikiVersion',
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
      wikiVersion: 'string',
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

