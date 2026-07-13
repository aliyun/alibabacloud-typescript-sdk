// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserPropertiesValue } from "./UserPropertiesValue";


export class ReceiveMessageResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  dequeueCount?: number;
  /**
   * @example
   * 1250700979348
   */
  enqueueTime?: number;
  /**
   * @example
   * 1250700979348
   */
  firstDequeueTime?: number;
  /**
   * @example
   * Hello MNS
   */
  messageBody?: string;
  /**
   * @example
   * C5DD56A39F5F7BB8B3337C6D11B6D8BE
   */
  messageBodyMD5?: string;
  /**
   * @example
   * test-group
   */
  messageGroupId?: string;
  /**
   * @example
   * 5F290C926D472878-2-14D9529A8FA-200000001
   */
  messageId?: string;
  /**
   * @example
   * 1250700979348
   */
  nextVisibleTime?: number;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 1-ODU4OTkzNDU5My0xNDM1MTk3NjAwLTItNg==
   */
  receiptHandle?: string;
  /**
   * @example
   * {"xxx":"value"}
   */
  userProperties?: { [key: string]: UserPropertiesValue };
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
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': UserPropertiesValue },
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

