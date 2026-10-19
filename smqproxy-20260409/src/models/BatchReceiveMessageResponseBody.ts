// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MessagesUserPropertiesValue } from "./MessagesUserPropertiesValue";


export class BatchReceiveMessageResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * The total number of times the message has been consumed.
   * 
   * @example
   * 1
   */
  dequeueCount?: number;
  /**
   * @remarks
   * The time when the message was sent to the queue, in milliseconds since 1970-01-01 00:00:00 000.
   * 
   * @example
   * 1250700979348
   */
  enqueueTime?: number;
  /**
   * @remarks
   * The time when the message was first consumed, in milliseconds (timestamp). If `DequeueCount=0`, this value is the same as `EnqueueTime`.
   * 
   * @example
   * 1250700979348
   */
  firstDequeueTime?: number;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * This is test message 1.
   */
  messageBody?: string;
  /**
   * @remarks
   * The MD5 hash of the message body.
   * 
   * @example
   * C5DD56A39F5F7BB8B3337C6D11B6D8BE
   */
  messageBodyMD5?: string;
  /**
   * @remarks
   * The message group ID. This parameter applies only to FIFO queues.
   * 
   * @example
   * test-group
   */
  messageGroupId?: string;
  /**
   * @remarks
   * The message ID, which is unique within a queue.
   * 
   * @example
   * 5F290C926D472878214D9529A8FA200000001
   */
  messageId?: string;
  /**
   * @remarks
   * The time when the message becomes available for consumption again, in milliseconds (timestamp).
   * 
   * @example
   * 1250700979348
   */
  nextVisibleTime?: number;
  /**
   * @remarks
   * The priority of the message. 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The temporary handle generated for this message retrieval. This handle is used to delete or modify Inactive messages and is valid until NextVisibleTime.
   * 
   * @example
   * 1-ODU4OTkzNDU5My0xNDMyNzI3ODI3LTItOA==
   */
  receiptHandle?: string;
  /**
   * @remarks
   * The user-defined properties in JSON format.
   * 
   * @example
   * {"properties1":"value"}
   */
  userProperties?: { [key: string]: MessagesUserPropertiesValue };
  static names(): { [key: string]: string } {
    return {
      dequeueCount: 'DequeueCount',
      enqueueTime: 'EnqueueTime',
      firstDequeueTime: 'FirstDequeueTime',
      messageBody: 'MessageBody',
      messageBodyMD5: 'MessageBodyMD5',
      messageGroupId: 'MessageGroupId',
      messageId: 'MessageId',
      nextVisibleTime: 'NextVisibleTime',
      priority: 'Priority',
      receiptHandle: 'ReceiptHandle',
      userProperties: 'UserProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dequeueCount: 'number',
      enqueueTime: 'number',
      firstDequeueTime: 'number',
      messageBody: 'string',
      messageBodyMD5: 'string',
      messageGroupId: 'string',
      messageId: 'string',
      nextVisibleTime: 'number',
      priority: 'number',
      receiptHandle: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': MessagesUserPropertiesValue },
    };
  }

  validate() {
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchReceiveMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of messages.
   */
  messages?: BatchReceiveMessageResponseBodyMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': BatchReceiveMessageResponseBodyMessages },
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

