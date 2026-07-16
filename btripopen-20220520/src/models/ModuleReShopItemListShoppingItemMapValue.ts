// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
  journeyIndex?: number;
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

export class ModuleReShopItemListShoppingItemMapValueCabinQuantityListCabinInfo extends $dara.Model {
  cabin?: string;
  cabinClass?: string;
  cabinClassName?: string;
  quantity?: string;
  cabinClassMemo?: string;
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

export class ModuleReShopItemListShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleReShopItemListShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleReShopItemListShoppingItemMapValueCabinQuantityListCabinInfo,
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

export class ModuleReShopItemListShoppingItemMapValueSearchPrice extends $dara.Model {
  totalAmount?: number;
  handlingAmount?: number;
  upgradeAmount?: number;
  taxDiffAmount?: number;
  hasPrice?: boolean;
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

export class ModuleReShopItemListShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
  journeyIndex?: number;
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

export class ModuleReShopItemListShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  totalAmount?: number;
  handlingAmount?: number;
  upgradeAmount?: number;
  taxDiffAmount?: number;
  hasPrice?: boolean;
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

export class ModuleReShopItemListShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleReShopItemListShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleReShopItemListShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleReShopItemListShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleReShopItemListShoppingItemMapValueSegmentPriceListSearchPrice,
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

export class ModuleReShopItemListShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleReShopItemListShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleReShopItemListShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleReShopItemListShoppingItemMapValueSegmentPriceList[];
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleReShopItemListShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleReShopItemListShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleReShopItemListShoppingItemMapValueSegmentPriceList },
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

