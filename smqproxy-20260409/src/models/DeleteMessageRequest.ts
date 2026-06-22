// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMessageRequest extends $dara.Model {
  receiptHandle?: string;
  static names(): { [key: string]: string } {
    return {
      receiptHandle: 'ReceiptHandle',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

