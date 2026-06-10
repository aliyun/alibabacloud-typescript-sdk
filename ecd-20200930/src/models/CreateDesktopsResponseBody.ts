// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of cloud desktop IDs. An ID is returned for each cloud desktop created in the call.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * > This parameter is returned only when the `ChargeType` request parameter is set to `PrePaid`.
   * 
   * @example
   * 123456789
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

