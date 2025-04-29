// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  static names(): { [key: string]: string } {
    return {
      segmentIndex: 'segment_index',
      journeyIndex: 'journey_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentIndex: 'number',
      journeyIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

