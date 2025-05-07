// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PriceEstimateOutputItemsSteps extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 10000
   */
  end?: number;
  /**
   * @example
   * 0.0001
   */
  price?: number;
  regionIds?: string[];
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      price: 'Price',
      regionIds: 'RegionIds',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      price: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

