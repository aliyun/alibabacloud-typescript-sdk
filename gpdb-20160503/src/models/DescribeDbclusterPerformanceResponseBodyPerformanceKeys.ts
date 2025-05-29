// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries } from "./DescribeDbclusterPerformanceResponseBodyPerformanceKeysSeries";


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   * 
   * @example
   * adbpg_group_cpu_used_percent
   */
  name?: string;
  /**
   * @remarks
   * Details of the performance metric of a node.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries[];
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
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries },
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

