// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues } from "./DescribeDbclusterPerformanceResponseBodyPerformancesSeriesValues";


export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the list of performance metric values.
   * 
   * @example
   * cc-bp125e3uu94wo1s0k16****
   */
  name?: string;
  /**
   * @remarks
   * The values of the performance parameter. Each value of the performance parameter is collected at a point in time.
   */
  values?: DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues },
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

