// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListShoppingItemMapValueCabinQuantityList } from "./ModuleItemListShoppingItemMapValueCabinQuantityList";
import { ModuleItemListShoppingItemMapValueSearchPrice } from "./ModuleItemListShoppingItemMapValueSearchPrice";
import { ModuleItemListShoppingItemMapValueSegmentPriceList } from "./ModuleItemListShoppingItemMapValueSegmentPriceList";
import { ModuleItemListShoppingItemMapValueCabinQuantityValue } from "./ModuleItemListShoppingItemMapValueCabinQuantityValue";
import { ModuleItemListShoppingItemMapValueSegmentPriceValue } from "./ModuleItemListShoppingItemMapValueSegmentPriceValue";


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

