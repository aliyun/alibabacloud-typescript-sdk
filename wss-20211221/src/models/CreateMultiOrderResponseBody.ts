// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiOrderResponseBody extends $dara.Model {
  orderIds?: number[];
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

