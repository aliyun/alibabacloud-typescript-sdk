// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of alerts.
   * 
   * @example
   * 75
   */
  all?: number;
  countMap?: { [key: string]: number };
  /**
   * @remarks
   * The number of high-risk alerts.
   * 
   * @example
   * 25
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk alerts.
   * 
   * @example
   * 25
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk alerts.
   * 
   * @example
   * 25
   */
  medium?: number;
  /**
   * @remarks
   * The number of connected services.
   * 
   * @example
   * 3
   */
  productNum?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      countMap: 'CountMap',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
      productNum: 'ProductNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      countMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      high: 'number',
      low: 'number',
      medium: 'number',
      productNum: 'number',
    };
  }

  validate() {
    if(this.countMap) {
      $dara.Model.validateMap(this.countMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

