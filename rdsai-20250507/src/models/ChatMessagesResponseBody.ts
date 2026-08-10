// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The answer content.
   * 
   * @example
   * The disk usage of instance rm-bp14as9914vd3**** is 23%, and expansion is not needed at this time. If you need to view the detailed configuration, performance monitoring, or perform other operations on an instance, please let me know your specific requirements!
   */
  answer?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1763986004
   */
  createdAt?: number;
  /**
   * @remarks
   * The event.
   * 
   * @example
   * MysqlIOException
   */
  event?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * oas8pwy2-slxw-sf98-bx83-cb2hkktl****
   */
  messageId?: string;
  /**
   * @remarks
   * The query mode.
   * 
   * @example
   * Will be deprecated in the future. No need to pay attention to this field
   */
  mode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
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

