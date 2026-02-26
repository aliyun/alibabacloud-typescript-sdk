// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EticketInfo } from "./EticketInfo";


export class OrderLineResult extends $dara.Model {
  eticketInfos?: EticketInfo[];
  /**
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @example
   * 1
   */
  number?: string;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 1
   */
  orderLineStatus?: string;
  /**
   * @example
   * 100
   */
  payFee?: number;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i4/2216003305543/O1CN01bip3Un1qokG0
   */
  productPic?: string;
  productTitle?: string;
  /**
   * @remarks
   * skuId
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
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

