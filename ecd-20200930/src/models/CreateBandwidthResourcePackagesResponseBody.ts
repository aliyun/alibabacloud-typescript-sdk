// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthResourcePackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 24251717783****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * AE7B699F-625C-587E-BC5F-1395CA969681
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
      orderId: 'number',
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

