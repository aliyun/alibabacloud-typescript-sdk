// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotChatStreamResponseBody extends $dara.Model {
  content?: string;
  delta?: string;
  message?: string;
  messageId?: string;
  requestId?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  toolCallId?: string;
  toolCallName?: string;
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

