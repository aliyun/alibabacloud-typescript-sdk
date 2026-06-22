// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchReceiveMessageResponseBodyMessages extends $dara.Model {
  dequeueCount?: number;
  enqueueTime?: number;
  firstDequeueTime?: number;
  messageBody?: string;
  messageBodyMD5?: string;
  messageGroupId?: string;
  messageId?: string;
  nextVisibleTime?: number;
  priority?: number;
  receiptHandle?: string;
  userProperties?: string;
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
      userProperties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchReceiveMessageResponseBody extends $dara.Model {
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

