// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PeekMessageResponseBody extends $dara.Model {
  dequeueCount?: number;
  enqueueTime?: number;
  firstDequeueTime?: number;
  messageBody?: string;
  messageBodyMD5?: string;
  messageGroupId?: string;
  messageId?: string;
  priority?: number;
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

