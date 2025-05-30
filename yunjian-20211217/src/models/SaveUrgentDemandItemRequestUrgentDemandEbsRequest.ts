// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveUrgentDemandItemRequestUrgentDemandEbsRequest extends $dara.Model {
  /**
   * @example
   * cloud_essd
   */
  commodityCode?: string;
  /**
   * @example
   * 1
   */
  commodityNum?: number;
  /**
   * @example
   * yundisk
   */
  commodityTypeCode?: string;
  /**
   * @example
   * 111222
   */
  itemId?: number;
  /**
   * @example
   * 1
   */
  performanceLevel?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      itemId: 'itemId',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      itemId: 'number',
      performanceLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

