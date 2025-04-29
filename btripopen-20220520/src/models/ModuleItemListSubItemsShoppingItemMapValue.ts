// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListSubItemsShoppingItemMapValueSearchPrice } from "./ModuleItemListSubItemsShoppingItemMapValueSearchPrice";
import { ModuleItemListSubItemsShoppingItemMapValueCabinQuantityValue } from "./ModuleItemListSubItemsShoppingItemMapValueCabinQuantityValue";
import { ModuleItemListSubItemsShoppingItemMapValueSegmentPriceValue } from "./ModuleItemListSubItemsShoppingItemMapValueSegmentPriceValue";


export class ModuleItemListSubItemsShoppingItemMapValue extends $dara.Model {
  searchPrice?: ModuleItemListSubItemsShoppingItemMapValueSearchPrice;
  /**
   * @remarks
   * id
   * 
   * @example
   * ADT07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  id?: string;
  cabinQuantity?: { [key: string]: ModuleItemListSubItemsShoppingItemMapValueCabinQuantityValue };
  segmentPrice?: { [key: string]: ModuleItemListSubItemsShoppingItemMapValueSegmentPriceValue };
  static names(): { [key: string]: string } {
    return {
      searchPrice: 'search_price',
      id: 'id',
      cabinQuantity: 'cabin_quantity',
      segmentPrice: 'segment_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchPrice: ModuleItemListSubItemsShoppingItemMapValueSearchPrice,
      id: 'string',
      cabinQuantity: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListSubItemsShoppingItemMapValueCabinQuantityValue },
      segmentPrice: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListSubItemsShoppingItemMapValueSegmentPriceValue },
    };
  }

  validate() {
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
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

