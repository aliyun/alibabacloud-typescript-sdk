// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundRenderCmd extends $dara.Model {
  /**
   * @remarks
   * Refund Type: 1 for refund only, 3 for return and refund
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * Goods Status: 4 for not shipped, 1 for not received, 2 for received
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  goodsStatus?: number;
  /**
   * @remarks
   * Sub-distribution order ID
   * 
   * This parameter is required.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'bizClaimType',
      goodsStatus: 'goodsStatus',
      orderLineId: 'orderLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      goodsStatus: 'number',
      orderLineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

