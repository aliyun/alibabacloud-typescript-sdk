// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo extends $dara.Model {
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo,
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueSearchPrice extends $dara.Model {
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
   * 1000
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
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
   * 1000
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceListSearchPrice,
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

export class ModuleReShopItemListBestPriceItemShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleReShopItemListBestPriceItemShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceList[];
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleReShopItemListBestPriceItemShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleReShopItemListBestPriceItemShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleReShopItemListBestPriceItemShoppingItemMapValueSegmentPriceList },
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

