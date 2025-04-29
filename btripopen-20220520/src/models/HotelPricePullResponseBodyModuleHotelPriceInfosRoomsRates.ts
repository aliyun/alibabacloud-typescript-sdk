// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy } from "./HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy";
import { HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys } from "./HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys";


export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates extends $dara.Model {
  /**
   * @example
   * demo
   */
  breakfast?: string;
  /**
   * @example
   * 1
   */
  breakfastCount?: number;
  btripHotelCancelPolicy?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy;
  cancelPolicyDesc?: string;
  /**
   * @example
   * 1
   */
  companyAassist?: string;
  /**
   * @example
   * CNY
   */
  currencyCode?: string;
  /**
   * @example
   * true
   */
  instantConfirm?: boolean;
  /**
   * @example
   * 721700504622
   */
  itemId?: string;
  /**
   * @example
   * 4
   */
  maxAdvHours?: number;
  /**
   * @example
   * 4344
   */
  maxDays?: number;
  /**
   * @example
   * 0
   */
  minAdvHours?: number;
  /**
   * @example
   * 0
   */
  minDays?: number;
  /**
   * @example
   * 0
   */
  nod?: number;
  /**
   * @example
   * 1
   */
  nop?: number;
  /**
   * @example
   * 1
   */
  paymentType?: number;
  /**
   * @example
   * 30000
   */
  price?: number;
  /**
   * @example
   * demo
   */
  promotionInfo?: string;
  /**
   * @example
   * 4
   */
  quota?: number;
  rateDailys?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys[];
  /**
   * @example
   * 4509447432148
   */
  rateId?: string;
  ratePlanName?: string;
  /**
   * @example
   * 4509447432148
   */
  rpId?: string;
  /**
   * @example
   * 2829486701
   */
  sellerId?: string;
  /**
   * @example
   * true
   */
  supportSpecialInvoice?: boolean;
  static names(): { [key: string]: string } {
    return {
      breakfast: 'breakfast',
      breakfastCount: 'breakfast_count',
      btripHotelCancelPolicy: 'btrip_hotel_cancel_policy',
      cancelPolicyDesc: 'cancel_policy_desc',
      companyAassist: 'company_aassist',
      currencyCode: 'currency_code',
      instantConfirm: 'instant_confirm',
      itemId: 'item_id',
      maxAdvHours: 'max_adv_hours',
      maxDays: 'max_days',
      minAdvHours: 'min_adv_hours',
      minDays: 'min_days',
      nod: 'nod',
      nop: 'nop',
      paymentType: 'payment_type',
      price: 'price',
      promotionInfo: 'promotion_info',
      quota: 'quota',
      rateDailys: 'rate_dailys',
      rateId: 'rate_id',
      ratePlanName: 'rate_plan_name',
      rpId: 'rp_id',
      sellerId: 'seller_id',
      supportSpecialInvoice: 'support_special_invoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakfast: 'string',
      breakfastCount: 'number',
      btripHotelCancelPolicy: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy,
      cancelPolicyDesc: 'string',
      companyAassist: 'string',
      currencyCode: 'string',
      instantConfirm: 'boolean',
      itemId: 'string',
      maxAdvHours: 'number',
      maxDays: 'number',
      minAdvHours: 'number',
      minDays: 'number',
      nod: 'number',
      nop: 'number',
      paymentType: 'number',
      price: 'number',
      promotionInfo: 'string',
      quota: 'number',
      rateDailys: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys },
      rateId: 'string',
      ratePlanName: 'string',
      rpId: 'string',
      sellerId: 'string',
      supportSpecialInvoice: 'boolean',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicy && typeof (this.btripHotelCancelPolicy as any).validate === 'function') {
      (this.btripHotelCancelPolicy as any).validate();
    }
    if(Array.isArray(this.rateDailys)) {
      $dara.Model.validateArray(this.rateDailys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

