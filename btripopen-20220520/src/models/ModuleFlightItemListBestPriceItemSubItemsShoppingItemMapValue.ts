// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityValue } from "./ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityValue";
import { ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValue } from "./ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValue";


export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPricePriceShowInfo extends $dara.Model {
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

export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice extends $dara.Model {
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
  priceShowInfo?: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPricePriceShowInfo;
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
      priceShowInfo: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPricePriceShowInfo,
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

export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValue extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * ADT07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  id?: string;
  cabinQuantity?: { [key: string]: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityValue };
  searchPrice?: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice;
  segmentPrice?: { [key: string]: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValue };
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      cabinQuantity: 'cabin_quantity',
      searchPrice: 'search_price',
      segmentPrice: 'segment_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      cabinQuantity: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityValue },
      searchPrice: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice,
      segmentPrice: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceValue },
    };
  }

  validate() {
    if(this.cabinQuantity) {
      $dara.Model.validateMap(this.cabinQuantity);
    }
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    if(this.segmentPrice) {
      $dara.Model.validateMap(this.segmentPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

