// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListCabinInfo extends $dara.Model {
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  /**
   * @example
   * 8
   */
  quantity?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClassMemo?: string;
  /**
   * @example
   * 无
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityListCabinInfo,
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice extends $dara.Model {
  /**
   * @example
   * 1000
   */
  totalAmount?: number;
  /**
   * @example
   * 1000
   */
  handlingAmount?: number;
  /**
   * @example
   * 1000
   */
  upgradeAmount?: number;
  /**
   * @example
   * 1000
   */
  taxDiffAmount?: number;
  /**
   * @example
   * true
   */
  hasPrice?: boolean;
  /**
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @example
   * 1000
   */
  totalAmount?: number;
  /**
   * @example
   * 1000
   */
  handlingAmount?: number;
  /**
   * @example
   * 1000
   */
  upgradeAmount?: number;
  /**
   * @example
   * 1000
   */
  taxDiffAmount?: number;
  /**
   * @example
   * true
   */
  hasPrice?: boolean;
  /**
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceListSearchPrice,
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

export class ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceList[];
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValueSegmentPriceList },
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

