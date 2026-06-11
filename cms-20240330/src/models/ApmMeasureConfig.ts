// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmMeasureConfig extends $dara.Model {
  /**
   * @remarks
   * An array of dimension keys used to group the results.
   */
  groupBy?: string[];
  /**
   * @remarks
   * The unique code that identifies the metric.
   * 
   * This parameter is required.
   */
  measureCode?: string;
  /**
   * @remarks
   * The aggregation period in seconds, which determines the time granularity of data points.
   * 
   * This parameter is required.
   */
  windowSecs?: number;
  static names(): { [key: string]: string } {
    return {
      groupBy: 'groupBy',
      measureCode: 'measureCode',
      windowSecs: 'windowSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: { 'type': 'array', 'itemType': 'string' },
      measureCode: 'string',
      windowSecs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

