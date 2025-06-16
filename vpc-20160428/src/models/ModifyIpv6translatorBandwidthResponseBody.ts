// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 202304500950739
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF8198EE-8FC9-49C2-A22E-xxxx
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

