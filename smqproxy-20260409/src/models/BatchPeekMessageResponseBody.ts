// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MessagesUserPropertiesValue } from "./MessagesUserPropertiesValue";


/**
 */
export class BatchPeekMessageResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * The total number of times the message has been consumed.
   * 
   * @example
   * 5
   */
  dequeueCount?: number;
  /**
   * @remarks
   * The time when the message was sent to the queue. The value is a UNIX timestamp that starts from 1970-01-01 00:00:00.000.
   * 
   * @example
   * 1250700979248
   */
  enqueueTime?: number;
  /**
   * @remarks
   * The time when the message was first consumed. The value is a UNIX timestamp in milliseconds that starts from 1970-01-01 00:00:00.000. If DequeueCount is 0, this value is the same as EnqueueTime.
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
   * This is a test message
   */
  messageBody?: string;
  /**
   * @remarks
   * The MD5 hash of the message body.
   * 
   * @example
   * F9360F391579E71CA77BC5D50242****
   */
  messageBodyMD5?: string;
  /**
   * @remarks
   * The message group ID (FIFO queues only).
   * 
   * @example
   * test-group
   */
  messageGroupId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * C0A80255D7D1163042EA3F2814D055F1
   */
  messageId?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 16. Default value: 8. A value of 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The user-defined properties (JSON-formatted string).
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
      priority: 'Priority',
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
      priority: 'number',
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

export class BatchPeekMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message list.
   */
  messages?: BatchPeekMessageResponseBodyMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': BatchPeekMessageResponseBodyMessages },
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

