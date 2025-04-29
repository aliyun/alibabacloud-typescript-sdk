// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListShoppingItemMapValueSegmentPriceListSegmentPosition } from "./ModuleItemListShoppingItemMapValueSegmentPriceListSegmentPosition";
import { ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice } from "./ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice";


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

