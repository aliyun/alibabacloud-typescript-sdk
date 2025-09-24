// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * 73465432785
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

