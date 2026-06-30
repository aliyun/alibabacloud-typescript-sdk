// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the generated answer.
   * 
   * @example
   * 您询问的实例rm-bp14as9914vd3**** 磁盘使用率为23%，暂时不需要进行扩容。如果您需要进一步查看某个实例的详细配置、性能监控或进行其他操作，请告诉我你的具体需求！
   */
  answer?: string;
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @remarks
   * The time when the message was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1763986004
   */
  createdAt?: number;
  /**
   * @remarks
   * The event associated with the message.
   * 
   * @example
   * MysqlIOException
   */
  event?: string;
  /**
   * @remarks
   * The ID of the message, which is distinct from `MessageId`.
   * 
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  /**
   * @remarks
   * The unique ID of the message.
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
   * 以后会下线，不用关注。
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
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

