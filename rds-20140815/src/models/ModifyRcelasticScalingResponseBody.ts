// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCElasticScalingResponseBody extends $dara.Model {
  /**
   * @example
   * 264008926210869
   */
  orderId?: string;
  /**
   * @example
   * 1F7B8B09-36F3-1165-BADB-13E376FE
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

