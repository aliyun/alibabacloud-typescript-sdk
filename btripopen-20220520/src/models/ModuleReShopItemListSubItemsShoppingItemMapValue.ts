// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
  /**
   * @remarks
   * The journey ordinal number, starting from 0.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The segment ordinal number, starting from 0 within the same journey.
   * 
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

export class ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo extends $dara.Model {
  /**
   * @remarks
   * The cabin code.
   * 
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class. Valid values:
   * - F: First class.
   * - C: Business class.
   * - Y: Economy class.
   * - P: Premium economy class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * The cabin class name.
   * 
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  /**
   * @remarks
   * The number of remaining seats in the cabin. Valid values: 0-9 (0 to 9 seats remaining) or A (more than 9 seats).
   * 
   * @example
   * 8
   */
  quantity?: string;
  /**
   * @remarks
   * The cabin class description.
   * 
   * @example
   * 经济舱
   */
  cabinClassMemo?: string;
  /**
   * @remarks
   * The domestic special notes.
   * 
   * @example
   * 经济舱
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      quantity: 'quantity',
      cabinClassMemo: 'cabin_class_memo',
      specification: 'specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      quantity: 'string',
      cabinClassMemo: 'string',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityList extends $dara.Model {
  /**
   * @remarks
   * The segment position information, indicating which journey and which segment within the overall itinerary.
   */
  segmentPosition?: ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition;
  /**
   * @remarks
   * The detailed cabin information.
   */
  cabinInfo?: ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo,
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

export class ModuleReShopItemListSubItemsShoppingItemMapValueSearchPrice extends $dara.Model {
  /**
   * @remarks
   * The total amount, in cents.
   * 
   * @example
   * 1000
   */
  totalAmount?: number;
  /**
   * @remarks
   * The service fee amount in cents.
   * 
   * @example
   * 100
   */
  handlingAmount?: number;
  /**
   * @remarks
   * The upgrade fee amount, in cents.
   * 
   * @example
   * 1000
   */
  upgradeAmount?: number;
  /**
   * @remarks
   * The tax difference amount, in cents.
   * 
   * @example
   * 100
   */
  taxDiffAmount?: number;
  /**
   * @remarks
   * Indicates whether a direct quote is available. Default value: true.
   * 
   * @example
   * true
   */
  hasPrice?: boolean;
  /**
   * @remarks
   * The text prompt displayed when no direct quote is available.
   * 
   * @example
   * 待服务商确认
   */
  nonPriceText?: string;
  static names(): { [key: string]: string } {
    return {
      totalAmount: 'total_amount',
      handlingAmount: 'handling_amount',
      upgradeAmount: 'upgrade_amount',
      taxDiffAmount: 'tax_diff_amount',
      hasPrice: 'has_price',
      nonPriceText: 'non_price_text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalAmount: 'number',
      handlingAmount: 'number',
      upgradeAmount: 'number',
      taxDiffAmount: 'number',
      hasPrice: 'boolean',
      nonPriceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
  /**
   * @remarks
   * The journey ordinal number, starting from 0.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The segment ordinal number, starting from 0 within the same journey.
   * 
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

export class ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @remarks
   * The total amount in cents.
   * 
   * @example
   * 1000
   */
  totalAmount?: number;
  /**
   * @remarks
   * The service fee amount in cents.
   * 
   * @example
   * 1000
   */
  handlingAmount?: number;
  /**
   * @remarks
   * The upgrade fee amount in cents.
   * 
   * @example
   * 1000
   */
  upgradeAmount?: number;
  /**
   * @remarks
   * The tax difference amount in cents.
   * 
   * @example
   * 1000
   */
  taxDiffAmount?: number;
  /**
   * @remarks
   * Indicates whether a direct quote is available. Default value: true.
   * 
   * @example
   * 1000
   */
  hasPrice?: boolean;
  /**
   * @remarks
   * The text prompt displayed when no direct quote is available.
   * 
   * @example
   * 待服务商确认
   */
  nonPriceText?: string;
  static names(): { [key: string]: string } {
    return {
      totalAmount: 'total_amount',
      handlingAmount: 'handling_amount',
      upgradeAmount: 'upgrade_amount',
      taxDiffAmount: 'tax_diff_amount',
      hasPrice: 'has_price',
      nonPriceText: 'non_price_text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalAmount: 'number',
      handlingAmount: 'number',
      upgradeAmount: 'number',
      taxDiffAmount: 'number',
      hasPrice: 'boolean',
      nonPriceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceList extends $dara.Model {
  /**
   * @remarks
   * The segment position information, indicating which journey and which segment within the overall itinerary.
   */
  segmentPosition?: ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition;
  /**
   * @remarks
   * The rebooking quote.
   */
  searchPrice?: ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice,
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

export class ModuleReShopItemListSubItemsShoppingItemMapValue extends $dara.Model {
  /**
   * @remarks
   * The remaining cabin inventory for each segment.
   */
  cabinQuantityList?: ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityList[];
  /**
   * @remarks
   * The rebooking search price.
   */
  searchPrice?: ModuleReShopItemListSubItemsShoppingItemMapValueSearchPrice;
  /**
   * @remarks
   * The price for each segment. This field may not have a value because airline bundled products may not have prices broken down by segment.
   */
  segmentPriceList?: ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceList[];
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleReShopItemListSubItemsShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsShoppingItemMapValueSegmentPriceList },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

