// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MessagesUserPropertiesValue } from "./MessagesUserPropertiesValue";


/**
 */
export class BatchPeekMessageResponseBodyMessages extends $dara.Model {
  /**
   * @example
   * 5
   */
  dequeueCount?: number;
  /**
   * @example
   * 1250700979248
   */
  enqueueTime?: number;
  /**
   * @example
   * 1250700979348
   */
  firstDequeueTime?: number;
  /**
   * @example
   * This is a test message
   */
  messageBody?: string;
  /**
   * @example
   * F9360F391579E71CA77BC5D50242****
   */
  messageBodyMD5?: string;
  /**
   * @example
   * test-group
   */
  messageGroupId?: string;
  /**
   * @example
   * C0A80255D7D1163042EA3F2814D055F1
   */
  messageId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
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

