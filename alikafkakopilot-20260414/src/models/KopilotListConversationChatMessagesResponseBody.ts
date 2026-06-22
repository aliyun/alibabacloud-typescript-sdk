// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KopilotListConversationChatMessagesResponseBodyDataMessages extends $dara.Model {
  content?: string;
  createTime?: string;
  feedback?: string;
  role?: string;
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      feedback: 'Feedback',
      role: 'Role',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      feedback: 'string',
      role: 'string',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBodyData extends $dara.Model {
  hasMore?: boolean;
  messages?: KopilotListConversationChatMessagesResponseBodyDataMessages[];
  nextBeforeTurnId?: number;
  sessionId?: string;
  totalTurns?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      messages: 'Messages',
      nextBeforeTurnId: 'NextBeforeTurnId',
      sessionId: 'SessionId',
      totalTurns: 'TotalTurns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      messages: { 'type': 'array', 'itemType': KopilotListConversationChatMessagesResponseBodyDataMessages },
      nextBeforeTurnId: 'number',
      sessionId: 'string',
      totalTurns: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBody extends $dara.Model {
  code?: number;
  data?: KopilotListConversationChatMessagesResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: KopilotListConversationChatMessagesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

