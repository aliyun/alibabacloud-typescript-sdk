// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleGroupItemShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
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

export class ModuleGroupItemShoppingItemMapValueCabinQuantityListCabin extends $dara.Model {
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
  cabinClassName?: string;
  /**
   * @example
   * A
   */
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

export class ModuleGroupItemShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleGroupItemShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabin?: ModuleGroupItemShoppingItemMapValueCabinQuantityListCabin;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabin: 'cabin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleGroupItemShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabin: ModuleGroupItemShoppingItemMapValueCabinQuantityListCabin,
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    if(this.cabin && typeof (this.cabin as any).validate === 'function') {
      (this.cabin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleGroupItemShoppingItemMapValueSearchPrice extends $dara.Model {
  /**
   * @example
   * 120000
   */
  ticketPrice?: number;
  /**
   * @example
   * 120000
   */
  sellPrice?: number;
  /**
   * @example
   * 6000
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      ticketPrice: 'ticket_price',
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketPrice: 'number',
      sellPrice: 'number',
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

export class ModuleGroupItemShoppingItemMapValueSegmentPriceListSegmentPosition extends $dara.Model {
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

export class ModuleGroupItemShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @example
   * 120000
   */
  ticketPrice?: number;
  /**
   * @example
   * 120000
   */
  sellPrice?: number;
  /**
   * @example
   * 6000
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      ticketPrice: 'ticket_price',
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketPrice: 'number',
      sellPrice: 'number',
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

export class ModuleGroupItemShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleGroupItemShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleGroupItemShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleGroupItemShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleGroupItemShoppingItemMapValueSegmentPriceListSearchPrice,
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

export class ModuleGroupItemShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleGroupItemShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleGroupItemShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleGroupItemShoppingItemMapValueSegmentPriceList[];
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleGroupItemShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleGroupItemShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleGroupItemShoppingItemMapValueSegmentPriceList },
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

