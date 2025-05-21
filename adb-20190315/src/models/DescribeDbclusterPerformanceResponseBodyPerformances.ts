// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformancesSeries } from "./DescribeDbclusterPerformanceResponseBodyPerformancesSeries";


export class DescribeDBClusterPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metric data.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

