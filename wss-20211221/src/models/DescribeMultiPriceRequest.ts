// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceRequestOrderItems } from "./DescribeMultiPriceRequestOrderItems";


export class DescribeMultiPriceRequest extends $dara.Model {
  orderItems?: DescribeMultiPriceRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  /**
   * @example
   * pacakge
   */
  packageCode?: string;
  /**
   * @example
   * 182864463481****
   */
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      packageCode: 'PackageCode',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': DescribeMultiPriceRequestOrderItems },
      orderType: 'string',
      packageCode: 'string',
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

