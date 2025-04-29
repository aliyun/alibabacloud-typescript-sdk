// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderPreValidateResponseBodyModuleItemInvoice } from "./HotelOrderPreValidateResponseBodyModuleItemInvoice";
import { HotelOrderPreValidateResponseBodyModulePromotionInfo } from "./HotelOrderPreValidateResponseBodyModulePromotionInfo";
import { HotelOrderPreValidateResponseBodyModuleRatePlanDaily } from "./HotelOrderPreValidateResponseBodyModuleRatePlanDaily";
import { HotelOrderPreValidateResponseBodyModuleRatePlanInfo } from "./HotelOrderPreValidateResponseBodyModuleRatePlanInfo";


export class HotelOrderPreValidateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * demo
   */
  extendInfo?: string;
  itemInvoice?: HotelOrderPreValidateResponseBodyModuleItemInvoice;
  /**
   * @example
   * fb5e1abf33924b6c912bd6d80deec0eb-4
   */
  itineraryNo?: string;
  promotionInfo?: HotelOrderPreValidateResponseBodyModulePromotionInfo;
  ratePlanDaily?: HotelOrderPreValidateResponseBodyModuleRatePlanDaily[];
  /**
   * @example
   * 5314280514218
   */
  ratePlanId?: number;
  ratePlanInfo?: HotelOrderPreValidateResponseBodyModuleRatePlanInfo;
  /**
   * @example
   * nonUltron_1673575241156_d91ea8ad16735752359161037bf6cf_c54d3768312a4b249b719f126377bf82
   */
  validateResKey?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extend_info',
      itemInvoice: 'item_invoice',
      itineraryNo: 'itinerary_no',
      promotionInfo: 'promotion_info',
      ratePlanDaily: 'rate_plan_daily',
      ratePlanId: 'rate_plan_id',
      ratePlanInfo: 'rate_plan_info',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: 'string',
      itemInvoice: HotelOrderPreValidateResponseBodyModuleItemInvoice,
      itineraryNo: 'string',
      promotionInfo: HotelOrderPreValidateResponseBodyModulePromotionInfo,
      ratePlanDaily: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModuleRatePlanDaily },
      ratePlanId: 'number',
      ratePlanInfo: HotelOrderPreValidateResponseBodyModuleRatePlanInfo,
      validateResKey: 'string',
    };
  }

  validate() {
    if(this.itemInvoice && typeof (this.itemInvoice as any).validate === 'function') {
      (this.itemInvoice as any).validate();
    }
    if(this.promotionInfo && typeof (this.promotionInfo as any).validate === 'function') {
      (this.promotionInfo as any).validate();
    }
    if(Array.isArray(this.ratePlanDaily)) {
      $dara.Model.validateArray(this.ratePlanDaily);
    }
    if(this.ratePlanInfo && typeof (this.ratePlanInfo as any).validate === 'function') {
      (this.ratePlanInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

