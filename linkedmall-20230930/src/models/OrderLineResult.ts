// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EticketInfo } from "./EticketInfo";


export class OrderLineResult extends $dara.Model {
  /**
   * @remarks
   * A list of electronic vouchers.
   */
  eticketInfos?: EticketInfo[];
  /**
   * @remarks
   * The logistics status of the order line.
   * 
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @remarks
   * The number of items.
   * 
   * @example
   * 1
   */
  number?: string;
  /**
   * @remarks
   * The unique ID of the main order.
   * 
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @remarks
   * The unique ID of the order line.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * The status of the order line.
   * 
   * @example
   * 1
   */
  orderLineStatus?: string;
  /**
   * @remarks
   * The payable amount for the order line.
   * 
   * @example
   * 100
   */
  payFee?: number;
  /**
   * @remarks
   * The unique ID of the product.
   * 
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @remarks
   * The URL of the product image.
   * 
   * @example
   * //img.alicdn.com/imgextra/i4/2216003305543/O1CN01bip3Un1qokG0
   */
  productPic?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 儿童学习桌
   */
  productTitle?: string;
  /**
   * @remarks
   * The unique ID of the SKU.
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
  /**
   * @remarks
   * The SKU name.
   * 
   * @example
   * 浅绿色
   */
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      eticketInfos: 'eticketInfos',
      logisticsStatus: 'logisticsStatus',
      number: 'number',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      orderLineStatus: 'orderLineStatus',
      payFee: 'payFee',
      productId: 'productId',
      productPic: 'productPic',
      productTitle: 'productTitle',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eticketInfos: { 'type': 'array', 'itemType': EticketInfo },
      logisticsStatus: 'string',
      number: 'string',
      orderId: 'string',
      orderLineId: 'string',
      orderLineStatus: 'string',
      payFee: 'number',
      productId: 'string',
      productPic: 'string',
      productTitle: 'string',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eticketInfos)) {
      $dara.Model.validateArray(this.eticketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

