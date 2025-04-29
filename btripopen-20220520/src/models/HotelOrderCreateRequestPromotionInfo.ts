// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList } from "./HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList";


export class HotelOrderCreateRequestPromotionInfo extends $dara.Model {
  promotionDetailInfoList?: HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList[];
  /**
   * @example
   * 100
   */
  promotionTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      promotionDetailInfoList: 'promotion_detail_info_list',
      promotionTotalPrice: 'promotion_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetailInfoList: { 'type': 'array', 'itemType': HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList },
      promotionTotalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.promotionDetailInfoList)) {
      $dara.Model.validateArray(this.promotionDetailInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

