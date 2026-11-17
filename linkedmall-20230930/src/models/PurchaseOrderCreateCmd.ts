// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressInfo } from "./AddressInfo";
import { ProductDTO } from "./ProductDto";


export class PurchaseOrderCreateCmd extends $dara.Model {
  /**
   * @remarks
   * The user ID in the distributor business, which is defined by the distributor.
   * >Notice: Assign different buyerIds to different buyers.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * buyer123456
   */
  buyerId?: string;
  /**
   * @remarks
   * The address information.
   * 
   * This parameter is required.
   */
  deliveryAddress?: AddressInfo;
  /**
   * @remarks
   * The extended information.
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * The order ID in the distributor business, which is defined by the distributor.
   * 
   * This parameter is required.
   * 
   * @example
   * outer123456
   */
  outerPurchaseOrderId?: string;
  /**
   * @remarks
   * The product list.
   * > Maximum number of SKUs per purchase order: 20
   * 
   * This parameter is required.
   */
  productList?: ProductDTO[];
  static names(): { [key: string]: string } {
    return {
      buyerId: 'buyerId',
      deliveryAddress: 'deliveryAddress',
      extInfo: 'extInfo',
      outerPurchaseOrderId: 'outerPurchaseOrderId',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: AddressInfo,
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outerPurchaseOrderId: 'string',
      productList: { 'type': 'array', 'itemType': ProductDTO },
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

