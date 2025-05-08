// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateStorageGatewayRequestOrderDetails } from "./CreateStorageGatewayRequestOrderDetails";


export class CreateStorageGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The array of orders.
   * 
   * This parameter is required.
   */
  orderDetails?: CreateStorageGatewayRequestOrderDetails[];
  static names(): { [key: string]: string } {
    return {
      orderDetails: 'OrderDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetails: { 'type': 'array', 'itemType': CreateStorageGatewayRequestOrderDetails },
    };
  }

  validate() {
    if(Array.isArray(this.orderDetails)) {
      $dara.Model.validateArray(this.orderDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

