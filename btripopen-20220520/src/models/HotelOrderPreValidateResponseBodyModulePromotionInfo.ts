// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList } from "./HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList";


export class HotelOrderPreValidateResponseBodyModulePromotionInfo extends $dara.Model {
  extAttrMap?: { [key: string]: string };
  promotionDetailInfoList?: HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList[];
  /**
   * @example
   * 100
   */
  promotionTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      extAttrMap: 'ext_attr_map',
      promotionDetailInfoList: 'promotion_detail_info_list',
      promotionTotalPrice: 'promotion_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extAttrMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promotionDetailInfoList: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList },
      promotionTotalPrice: 'number',
    };
  }

  validate() {
    if(this.extAttrMap) {
      $dara.Model.validateMap(this.extAttrMap);
    }
    if(Array.isArray(this.promotionDetailInfoList)) {
      $dara.Model.validateArray(this.promotionDetailInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

