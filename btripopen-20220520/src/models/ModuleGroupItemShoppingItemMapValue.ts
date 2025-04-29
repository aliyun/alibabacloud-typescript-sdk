// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleGroupItemShoppingItemMapValueCabinQuantityList } from "./ModuleGroupItemShoppingItemMapValueCabinQuantityList";
import { ModuleGroupItemShoppingItemMapValueSearchPrice } from "./ModuleGroupItemShoppingItemMapValueSearchPrice";
import { ModuleGroupItemShoppingItemMapValueSegmentPriceList } from "./ModuleGroupItemShoppingItemMapValueSegmentPriceList";


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

