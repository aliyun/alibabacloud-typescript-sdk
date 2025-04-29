// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPricePriceShowInfo } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPricePriceShowInfo";


export class ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPrice extends $dara.Model {
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
  firstStandardPrice?: number;
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
  subtractedPrice?: number;
  originCommonPrice?: number;
  dynamicPromotionPrice?: number;
  installmentNum?: number;
  installmentPrice?: number;
  competitionDynamicPrice?: number;
  competitionPromotionPrice?: number;
  /**
   * @example
   * 17400
   */
  minBeforeControlPriceOfNormal?: number;
  priceShowInfo?: ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPricePriceShowInfo;
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
      priceShowInfo: ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPricePriceShowInfo,
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

