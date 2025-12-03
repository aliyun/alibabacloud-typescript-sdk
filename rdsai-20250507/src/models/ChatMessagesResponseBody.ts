// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesResponseBody extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @example
   * 1763986004
   */
  createdAt?: number;
  /**
   * @example
   * MysqlIOException
   */
  event?: string;
  /**
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  /**
   * @example
   * oas8pwy2-slxw-sf98-bx83-cb2hkktl****
   */
  messageId?: string;
  mode?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * 01c3d43d-9466-4bd5-8196-4cbbce08****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      conversationId: 'ConversationId',
      createdAt: 'CreatedAt',
      event: 'Event',
      id: 'Id',
      messageId: 'MessageId',
      mode: 'Mode',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      conversationId: 'string',
      createdAt: 'number',
      event: 'string',
      id: 'string',
      messageId: 'string',
      mode: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

