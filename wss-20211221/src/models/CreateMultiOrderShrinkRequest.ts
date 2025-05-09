// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMultiOrderShrinkRequestOrderItems } from "./CreateMultiOrderShrinkRequestOrderItems";


export class CreateMultiOrderShrinkRequest extends $dara.Model {
  orderItems?: CreateMultiOrderShrinkRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  propertiesShrink?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      propertiesShrink: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderShrinkRequestOrderItems },
      orderType: 'string',
      propertiesShrink: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

