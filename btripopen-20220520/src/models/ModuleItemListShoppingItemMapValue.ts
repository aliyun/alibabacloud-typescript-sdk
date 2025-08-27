// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListShoppingItemMapValueCabinQuantityValue } from "./ModuleItemListShoppingItemMapValueCabinQuantityValue";
import { ModuleItemListShoppingItemMapValueSegmentPriceValue } from "./ModuleItemListShoppingItemMapValueSegmentPriceValue";


export class ModuleItemListShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValueCabinQuantityListCabinInfo extends $dara.Model {
  cabin?: string;
  cabinClass?: string;
  cabinClassName?: string;
  quantity?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      quantity: 'quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      quantity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleItemListShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleItemListShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleItemListShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleItemListShoppingItemMapValueCabinQuantityListCabinInfo,
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    if(this.cabinInfo && typeof (this.cabinInfo as any).validate === 'function') {
      (this.cabinInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValueSearchPricePriceShowInfo extends $dara.Model {
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

export class ModuleItemListShoppingItemMapValueSearchPrice extends $dara.Model {
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
  priceShowInfo?: ModuleItemListShoppingItemMapValueSearchPricePriceShowInfo;
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
      priceShowInfo: ModuleItemListShoppingItemMapValueSearchPricePriceShowInfo,
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

export class ModuleItemListShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @example
   * 120000
   */
  sellPrice?: number;
  /**
   * @example
   * 120000
   */
  ticketPrice?: number;
  /**
   * @example
   * 6000
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      ticketPrice: 'ticket_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      ticketPrice: 'number',
      tax: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleItemListShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleItemListShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice,
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleItemListShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleItemListShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleItemListShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleItemListShoppingItemMapValueSegmentPriceList[];
  /**
   * @remarks
   * id
   * 
   * @example
   * ADT07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  id?: string;
  cabinQuantity?: { [key: string]: ModuleItemListShoppingItemMapValueCabinQuantityValue };
  segmentPrice?: { [key: string]: ModuleItemListShoppingItemMapValueSegmentPriceValue };
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
      id: 'id',
      cabinQuantity: 'cabin_quantity',
      segmentPrice: 'segment_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleItemListShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleItemListShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleItemListShoppingItemMapValueSegmentPriceList },
      id: 'string',
      cabinQuantity: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListShoppingItemMapValueCabinQuantityValue },
      segmentPrice: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListShoppingItemMapValueSegmentPriceValue },
    };
  }

  validate() {
    if(Array.isArray(this.cabinQuantityList)) {
      $dara.Model.validateArray(this.cabinQuantityList);
    }
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    if(Array.isArray(this.segmentPriceList)) {
      $dara.Model.validateArray(this.segmentPriceList);
    }
    if(this.cabinQuantity) {
      $dara.Model.validateMap(this.cabinQuantity);
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

