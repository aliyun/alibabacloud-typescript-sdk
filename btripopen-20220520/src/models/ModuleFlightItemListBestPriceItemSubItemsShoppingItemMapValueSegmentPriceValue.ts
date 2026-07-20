// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValuePriceShowInfo extends $dara.Model {
  /**
   * @example
   * 0.8折
   */
  discountInfo?: string;
  /**
   * @example
   * 0.8
   */
  discountNum?: number;
  /**
   * @example
   * false
   */
  showTicketPrice?: boolean;
  static names(): { [key: string]: string } {
    return {
      discountInfo: 'discount_info',
      discountNum: 'discount_num',
      showTicketPrice: 'show_ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountInfo: 'string',
      discountNum: 'number',
      showTicketPrice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValue extends $dara.Model {
  /**
   * @example
   * 17400
   */
  floorPrice?: number;
  /**
   * @example
   * 121000
   */
  ticketPrice?: number;
  /**
   * @example
   * 17400
   */
  sellPrice?: number;
  /**
   * @example
   * 17400
   */
  originalSellPrice?: number;
  /**
   * @example
   * 管控总价格（单位：分）
   */
  baseTotalPrice?: number;
  /**
   * @example
   * 17400
   */
  beforeControlPrice?: number;
  /**
   * @example
   * 11000
   */
  tax?: number;
  /**
   * @example
   * 采购产品，服务商的销售价
   */
  supplyPrice?: number;
  /**
   * @example
   * 242000
   */
  basicCabinPrice?: number;
  /**
   * @example
   * 5000
   */
  buildPrice?: number;
  /**
   * @example
   * 6000
   */
  oilPrice?: number;
  /**
   * @example
   * 头等舱基准价格
   */
  firstStandardPrice?: number;
  /**
   * @example
   * 商务舱基准价格
   */
  businessStandardPrice?: number;
  /**
   * @example
   * 242000
   */
  commonStandardPrice?: number;
  /**
   * @remarks
   * fdPrice
   * 
   * @example
   * fdPrice
   */
  interTicketPrice?: number;
  /**
   * @example
   * 直减往返，航段上减去的钱
   */
  subtractedPrice?: number;
  /**
   * @example
   * 优惠前价格（一舱多价）[动态优惠专用]
   */
  originCommonPrice?: number;
  /**
   * @example
   * 动态优惠后的价格 [动态优惠专用]
   */
  dynamicPromotionPrice?: number;
  /**
   * @example
   * 分期数
   */
  installmentNum?: number;
  /**
   * @example
   * 分期每期价格
   */
  installmentPrice?: number;
  /**
   * @example
   * 竞品动态补贴后的目标价格
   */
  competitionDynamicPrice?: number;
  /**
   * @example
   * 竞品动态补贴，可减的优惠
   */
  competitionPromotionPrice?: number;
  /**
   * @example
   * 当前航班组合普通报价限价前最低价格
   */
  minBeforeControlPriceOfNormal?: number;
  priceShowInfo?: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValuePriceShowInfo;
  static names(): { [key: string]: string } {
    return {
      floorPrice: 'floor_price',
      ticketPrice: 'ticket_price',
      sellPrice: 'sell_price',
      originalSellPrice: 'original_sell_price',
      baseTotalPrice: 'base_total_price',
      beforeControlPrice: 'before_control_price',
      tax: 'tax',
      supplyPrice: 'supply_price',
      basicCabinPrice: 'basic_cabin_price',
      buildPrice: 'build_price',
      oilPrice: 'oil_price',
      firstStandardPrice: 'first_standard_price',
      businessStandardPrice: 'business_standard_price',
      commonStandardPrice: 'common_standard_price',
      interTicketPrice: 'inter_ticket_price',
      subtractedPrice: 'subtracted_price',
      originCommonPrice: 'origin_common_price',
      dynamicPromotionPrice: 'dynamic_promotion_price',
      installmentNum: 'installment_num',
      installmentPrice: 'installment_price',
      competitionDynamicPrice: 'competition_dynamic_price',
      competitionPromotionPrice: 'competition_promotion_price',
      minBeforeControlPriceOfNormal: 'min_before_control_price_of_normal',
      priceShowInfo: 'price_show_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      floorPrice: 'number',
      ticketPrice: 'number',
      sellPrice: 'number',
      originalSellPrice: 'number',
      baseTotalPrice: 'number',
      beforeControlPrice: 'number',
      tax: 'number',
      supplyPrice: 'number',
      basicCabinPrice: 'number',
      buildPrice: 'number',
      oilPrice: 'number',
      firstStandardPrice: 'number',
      businessStandardPrice: 'number',
      commonStandardPrice: 'number',
      interTicketPrice: 'number',
      subtractedPrice: 'number',
      originCommonPrice: 'number',
      dynamicPromotionPrice: 'number',
      installmentNum: 'number',
      installmentPrice: 'number',
      competitionDynamicPrice: 'number',
      competitionPromotionPrice: 'number',
      minBeforeControlPriceOfNormal: 'number',
      priceShowInfo: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValuePriceShowInfo,
    };
  }

  validate() {
    if(this.priceShowInfo && typeof (this.priceShowInfo as any).validate === 'function') {
      (this.priceShowInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

