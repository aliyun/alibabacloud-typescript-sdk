// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmMeasureConfig extends $dara.Model {
  /**
   * @remarks
   * The list of grouping dimensions for the APM metric. This parameter specifies the dimension keys by which to perform grouping and aggregation on metric data.
   * 
   * @example
   * ["host.name", "service.name"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The code identifier of the APM metric. This parameter specifies the metric type to collect and query.
   * 
   * This parameter is required.
   * 
   * @example
   * CPU
   */
  measureCode?: string;
  /**
   * @remarks
   * The query time window, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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

