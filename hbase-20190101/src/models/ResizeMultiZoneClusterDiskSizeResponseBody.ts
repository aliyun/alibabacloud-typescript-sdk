// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeMultiZoneClusterDiskSizeResponseBody extends $dara.Model {
  /**
   * @example
   * 123412341****
   */
  orderId?: string;
  /**
   * @example
   * 568339C4-9F71-43D0-994E-E039CD826E56
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

