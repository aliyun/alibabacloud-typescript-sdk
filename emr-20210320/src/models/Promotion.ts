// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Promotion extends $dara.Model {
  /**
   * @remarks
   * 产品码。
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * 优惠券描述。
   * 
   * @example
   * 5元优惠券（有效期至23年8月11日）
   */
  promotionDesc?: string;
  /**
   * @remarks
   * 优惠券名称。
   * 
   * @example
   * 5元优惠券
   */
  promotionName?: string;
  /**
   * @remarks
   * 优惠券码。
   * 
   * @example
   * youhui_quan
   */
  promotionOptionCode?: string;
  /**
   * @remarks
   * 优惠券号。
   * 
   * This parameter is required.
   * 
   * @example
   * ABC123
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

