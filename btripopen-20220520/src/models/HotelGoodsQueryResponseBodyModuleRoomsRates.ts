// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule } from "./HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule";
import { HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc } from "./HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc";
import { HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc } from "./HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc";
import { HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO } from "./HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDto";


export class HotelGoodsQueryResponseBodyModuleRoomsRates extends $dara.Model {
  bedDesc?: string;
  bedType?: string;
  breakfast?: string;
  btripCancelRule?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule;
  btripHotelCancelDesc?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc[];
  /**
   * @example
   * true
   */
  canSmoking?: boolean;
  cancelPolicyDesc?: string;
  /**
   * @example
   * 1
   */
  cancelPolicyType?: number;
  /**
   * @example
   * 0
   */
  companyAassist?: string;
  /**
   * @example
   * 0
   */
  confirmType?: number;
  /**
   * @example
   * cny
   */
  currencyCode?: string;
  /**
   * @example
   * demo
   */
  dailyPriceFormatYuan?: string;
  /**
   * @example
   * 400
   */
  dailyPriceView?: string;
  discountDesc?: HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc;
  /**
   * @example
   * demo
   */
  endTimeDaily?: string;
  hotelDetailRatePriceDTO?: HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO[];
  /**
   * @example
   * true
   */
  instantConfirm?: boolean;
  inventoryDesc?: string;
  /**
   * @example
   * 100
   */
  inventoryPrice?: string;
  /**
   * @example
   * true
   */
  isBusinessPay4Goods?: boolean;
  isGuarantee?: number;
  /**
   * @example
   * true
   */
  isNeedEmail?: boolean;
  /**
   * @example
   * 612673015638
   */
  itemId?: number;
  /**
   * @example
   * demo
   */
  lastCancelTime?: string;
  /**
   * @example
   * 2
   */
  maxOccupancy?: number;
  /**
   * @example
   * 2
   */
  minAdvHours?: number;
  /**
   * @example
   * 3
   */
  minDays?: number;
  /**
   * @example
   * 1
   */
  nod?: number;
  /**
   * @example
   * 2
   */
  nop?: number;
  /**
   * @example
   * 0
   */
  orderShipTime?: number;
  /**
   * @example
   * 1
   */
  paymentType?: number;
  /**
   * @example
   * 0
   */
  priceType?: number;
  /**
   * @example
   * demo
   */
  promotionInfo?: string;
  /**
   * @example
   * 4509447432148
   */
  rateId?: number;
  ratePlanName?: string;
  /**
   * @example
   * 4509447432148
   */
  rpId?: number;
  /**
   * @example
   * 4011822148
   */
  sellerId?: number;
  /**
   * @example
   * demo
   */
  startTimeDaily?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2321
   */
  supplierCode?: string;
  /**
   * @example
   * demo
   */
  supplierName?: string;
  /**
   * @example
   * true
   */
  supportSpecialInvoice?: boolean;
  /**
   * @example
   * 40000
   */
  unroundingDailyPriceFormatYuan?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedType: 'bed_type',
      breakfast: 'breakfast',
      btripCancelRule: 'btrip_cancel_rule',
      btripHotelCancelDesc: 'btrip_hotel_cancel_desc',
      canSmoking: 'can_smoking',
      cancelPolicyDesc: 'cancel_policy_desc',
      cancelPolicyType: 'cancel_policy_type',
      companyAassist: 'company_aassist',
      confirmType: 'confirm_type',
      currencyCode: 'currency_code',
      dailyPriceFormatYuan: 'daily_price_format_yuan',
      dailyPriceView: 'daily_price_view',
      discountDesc: 'discount_desc',
      endTimeDaily: 'end_time_daily',
      hotelDetailRatePriceDTO: 'hotel_detail_rate_price_d_t_o',
      instantConfirm: 'instant_confirm',
      inventoryDesc: 'inventory_desc',
      inventoryPrice: 'inventory_price',
      isBusinessPay4Goods: 'is_business_pay4_goods',
      isGuarantee: 'is_guarantee',
      isNeedEmail: 'is_need_email',
      itemId: 'item_id',
      lastCancelTime: 'last_cancel_time',
      maxOccupancy: 'max_occupancy',
      minAdvHours: 'min_adv_hours',
      minDays: 'min_days',
      nod: 'nod',
      nop: 'nop',
      orderShipTime: 'order_ship_time',
      paymentType: 'payment_type',
      priceType: 'price_type',
      promotionInfo: 'promotion_info',
      rateId: 'rate_id',
      ratePlanName: 'rate_plan_name',
      rpId: 'rp_id',
      sellerId: 'seller_id',
      startTimeDaily: 'start_time_daily',
      status: 'status',
      supplierCode: 'supplier_code',
      supplierName: 'supplier_name',
      supportSpecialInvoice: 'support_special_invoice',
      unroundingDailyPriceFormatYuan: 'unrounding_daily_price_format_yuan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedType: 'string',
      breakfast: 'string',
      btripCancelRule: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule,
      btripHotelCancelDesc: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc },
      canSmoking: 'boolean',
      cancelPolicyDesc: 'string',
      cancelPolicyType: 'number',
      companyAassist: 'string',
      confirmType: 'number',
      currencyCode: 'string',
      dailyPriceFormatYuan: 'string',
      dailyPriceView: 'string',
      discountDesc: HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc,
      endTimeDaily: 'string',
      hotelDetailRatePriceDTO: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO },
      instantConfirm: 'boolean',
      inventoryDesc: 'string',
      inventoryPrice: 'string',
      isBusinessPay4Goods: 'boolean',
      isGuarantee: 'number',
      isNeedEmail: 'boolean',
      itemId: 'number',
      lastCancelTime: 'string',
      maxOccupancy: 'number',
      minAdvHours: 'number',
      minDays: 'number',
      nod: 'number',
      nop: 'number',
      orderShipTime: 'number',
      paymentType: 'number',
      priceType: 'number',
      promotionInfo: 'string',
      rateId: 'number',
      ratePlanName: 'string',
      rpId: 'number',
      sellerId: 'number',
      startTimeDaily: 'string',
      status: 'number',
      supplierCode: 'string',
      supplierName: 'string',
      supportSpecialInvoice: 'boolean',
      unroundingDailyPriceFormatYuan: 'string',
    };
  }

  validate() {
    if(this.btripCancelRule && typeof (this.btripCancelRule as any).validate === 'function') {
      (this.btripCancelRule as any).validate();
    }
    if(Array.isArray(this.btripHotelCancelDesc)) {
      $dara.Model.validateArray(this.btripHotelCancelDesc);
    }
    if(this.discountDesc && typeof (this.discountDesc as any).validate === 'function') {
      (this.discountDesc as any).validate();
    }
    if(Array.isArray(this.hotelDetailRatePriceDTO)) {
      $dara.Model.validateArray(this.hotelDetailRatePriceDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

