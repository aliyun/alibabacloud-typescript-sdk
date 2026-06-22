// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteMessageRequest extends $dara.Model {
  receiptHandles?: string[];
  static names(): { [key: string]: string } {
    return {
      receiptHandles: 'ReceiptHandles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiptHandles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiptHandles)) {
      $dara.Model.validateArray(this.receiptHandles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

