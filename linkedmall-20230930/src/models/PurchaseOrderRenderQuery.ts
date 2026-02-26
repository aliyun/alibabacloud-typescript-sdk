// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressInfo } from "./AddressInfo";
import { OrderRenderProductDTO } from "./OrderRenderProductDto";


export class PurchaseOrderRenderQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1234567
   */
  buyerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryAddress?: AddressInfo;
  /**
   * @example
   * {}
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  productList?: OrderRenderProductDTO[];
  static names(): { [key: string]: string } {
    return {
      buyerId: 'buyerId',
      deliveryAddress: 'deliveryAddress',
      extInfo: 'extInfo',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: AddressInfo,
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      productList: { 'type': 'array', 'itemType': OrderRenderProductDTO },
    };
  }

  validate() {
    if(this.deliveryAddress && typeof (this.deliveryAddress as any).validate === 'function') {
      (this.deliveryAddress as any).validate();
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

