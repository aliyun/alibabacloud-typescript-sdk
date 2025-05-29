// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries } from "./DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries";


export class DescribeDataSharePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * adbpg_datashare_topic_count
   */
  name?: string;
  /**
   * @remarks
   * Details of the performance metric.
   */
  series?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * int
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
      series: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries },
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

