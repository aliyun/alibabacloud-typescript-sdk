// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMessageVisibilityResponseBody extends $dara.Model {
  nextVisibleTime?: number;
  receiptHandle?: string;
  static names(): { [key: string]: string } {
    return {
      nextVisibleTime: 'NextVisibleTime',
      receiptHandle: 'ReceiptHandle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextVisibleTime: 'number',
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

