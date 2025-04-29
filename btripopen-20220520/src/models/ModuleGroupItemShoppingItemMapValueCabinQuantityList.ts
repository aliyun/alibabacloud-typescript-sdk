// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleGroupItemShoppingItemMapValueCabinQuantityListSegmentPosition } from "./ModuleGroupItemShoppingItemMapValueCabinQuantityListSegmentPosition";
import { ModuleGroupItemShoppingItemMapValueCabinQuantityListCabin } from "./ModuleGroupItemShoppingItemMapValueCabinQuantityListCabin";


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

