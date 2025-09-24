// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 32453453
   */
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

