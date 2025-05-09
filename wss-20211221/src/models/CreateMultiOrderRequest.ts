// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMultiOrderRequestOrderItems } from "./CreateMultiOrderRequestOrderItems";


export class CreateMultiOrderRequest extends $dara.Model {
  orderItems?: CreateMultiOrderRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  properties?: { [key: string]: string };
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      properties: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItems },
      orderType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

