// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotChatStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actual content.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The streaming incremental content.
   * 
   * @example
   * hello
   */
  delta?: string;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The unique message ID.
   * 
   * @example
   * 4b209618fd066c4354037b4b0634ffc9
   */
  messageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76E1F1AA-6046-5074-96E2-79A37AFBD2FA
   */
  requestId?: string;
  /**
   * @remarks
   * The role identifier.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The run task ID.
   * 
   * @example
   * 5737d000********
   */
  runId?: string;
  /**
   * @remarks
   * The session thread ID.
   * 
   * @example
   * thread_abc123xyz
   */
  threadId?: string;
  /**
   * @remarks
   * The unique tool calling invoke ID.
   * 
   * @example
   * call_xyz789012
   */
  toolCallId?: string;
  /**
   * @remarks
   * The tool or function name.
   * 
   * @example
   * search_knowledge_base
   */
  toolCallName?: string;
  /**
   * @remarks
   * The event or message type.
   * 
   * @example
   * delta
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      delta: 'Delta',
      message: 'Message',
      messageId: 'MessageId',
      requestId: 'RequestId',
      role: 'Role',
      runId: 'RunId',
      threadId: 'ThreadId',
      toolCallId: 'ToolCallId',
      toolCallName: 'ToolCallName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      delta: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
      toolCallId: 'string',
      toolCallName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

