// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFileSystemRequestOrderDetails } from "./CreateFileSystemRequestOrderDetails";


export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the orders.
   * 
   * This parameter is required.
   */
  orderDetails?: CreateFileSystemRequestOrderDetails[];
  static names(): { [key: string]: string } {
    return {
      orderDetails: 'OrderDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetails: { 'type': 'array', 'itemType': CreateFileSystemRequestOrderDetails },
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

