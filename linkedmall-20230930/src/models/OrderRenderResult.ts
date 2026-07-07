// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeliveryInfo } from "./DeliveryInfo";
import { OrderProductResult } from "./OrderProductResult";


export class OrderRenderResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the item can be sold.
   * 
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @remarks
   * The fulfillment information.
   */
  deliveryInfoList?: DeliveryInfo[];
  /**
   * @remarks
   * The extension information.
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * The reason why the item is unavailable.
   * 
   * @example
   * 库存为0
   */
  message?: string;
  /**
   * @remarks
   * The list of products.
   */
  productList?: OrderProductResult[];
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      deliveryInfoList: 'deliveryInfoList',
      extInfo: 'extInfo',
      message: 'message',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfoList: { 'type': 'array', 'itemType': DeliveryInfo },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      productList: { 'type': 'array', 'itemType': OrderProductResult },
    };
  }

  validate() {
    if(Array.isArray(this.deliveryInfoList)) {
      $dara.Model.validateArray(this.deliveryInfoList);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

