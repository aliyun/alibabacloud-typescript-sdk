// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressInfo } from "./AddressInfo";
import { OrderRenderResult } from "./OrderRenderResult";


export class PurchaseOrderRenderResult extends $dara.Model {
  /**
   * @remarks
   * A collection of addresses.
   */
  addressList?: AddressInfo[];
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
   * Extended information.
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * The reason why the item cannot be sold.
   * 
   * @example
   * 库存为0
   */
  message?: string;
  /**
   * @remarks
   * A collection of sellable main orders.
   */
  orderList?: OrderRenderResult[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * A collection of unsellable main orders.
   */
  unsellableOrderList?: OrderRenderResult[];
  static names(): { [key: string]: string } {
    return {
      addressList: 'addressList',
      canSell: 'canSell',
      extInfo: 'extInfo',
      message: 'message',
      orderList: 'orderList',
      requestId: 'requestId',
      unsellableOrderList: 'unsellableOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': AddressInfo },
      canSell: 'boolean',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      orderList: { 'type': 'array', 'itemType': OrderRenderResult },
      requestId: 'string',
      unsellableOrderList: { 'type': 'array', 'itemType': OrderRenderResult },
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    if(Array.isArray(this.unsellableOrderList)) {
      $dara.Model.validateArray(this.unsellableOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

