// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition } from "./ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition";
import { ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice } from "./ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice";


export class ModuleItemListSubItemsShoppingItemMapValueSegmentPriceList extends $dara.Model {
  segmentPosition?: ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition;
  searchPrice?: ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSegmentPosition,
      searchPrice: ModuleItemListSubItemsShoppingItemMapValueSegmentPriceListSearchPrice,
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

