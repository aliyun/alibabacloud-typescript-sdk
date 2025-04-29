// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList extends $dara.Model {
  /**
   * @example
   * true
   */
  checkStatus?: boolean;
  /**
   * @example
   * true
   */
  needCheck?: boolean;
  promotionCode?: string;
  /**
   * @example
   * 12893
   */
  promotionId?: string;
  /**
   * @example
   * demo
   */
  promotionName?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: number;
  /**
   * @example
   * 1
   */
  promotionType?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'check_status',
      needCheck: 'need_check',
      promotionCode: 'promotion_code',
      promotionId: 'promotion_id',
      promotionName: 'promotion_name',
      promotionPrice: 'promotion_price',
      promotionType: 'promotion_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'boolean',
      needCheck: 'boolean',
      promotionCode: 'string',
      promotionId: 'string',
      promotionName: 'string',
      promotionPrice: 'number',
      promotionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

