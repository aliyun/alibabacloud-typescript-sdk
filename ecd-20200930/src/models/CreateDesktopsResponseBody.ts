// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers that are created. If multiple cloud computers are created, multiple IDs are returned.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * > This parameter is returned only when you set the ChargeType parameter to PrePaid.
   * 
   * @example
   * 123456789
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
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

