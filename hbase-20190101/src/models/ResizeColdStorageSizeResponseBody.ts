// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeColdStorageSizeResponseBody extends $dara.Model {
  /**
   * @example
   * 21711518427****
   */
  orderId?: string;
  /**
   * @example
   * 5AA6F80E-535C-5611-BD13-3832D96A4D0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

