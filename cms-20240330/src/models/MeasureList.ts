// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MeasureList extends $dara.Model {
  /**
   * @remarks
   * The list of grouping dimensions for measure data, specifying the dimension keys used for grouping and aggregation of measure results.
   * 
   * @example
   * ["host.name", "region"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The metric code.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_usage
   */
  measureCode?: string;
  /**
   * @remarks
   * The query time window in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
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

