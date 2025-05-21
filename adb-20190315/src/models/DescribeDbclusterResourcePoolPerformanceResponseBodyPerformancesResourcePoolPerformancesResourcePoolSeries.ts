// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The value of the metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

