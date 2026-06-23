// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageResponseBody extends $dara.Model {
  messageBodyMD5?: string;
  messageId?: string;
  receiptHandle?: string;
  static names(): { [key: string]: string } {
    return {
      messageBodyMD5: 'MessageBodyMD5',
      messageId: 'MessageId',
      receiptHandle: 'ReceiptHandle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageBodyMD5: 'string',
      messageId: 'string',
      receiptHandle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

