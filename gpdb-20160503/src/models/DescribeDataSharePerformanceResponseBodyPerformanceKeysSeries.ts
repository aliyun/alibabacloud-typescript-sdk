// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues } from "./DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues";


export class DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries extends $dara.Model {
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
   * One or more values of the performance metric.
   */
  values?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues },
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

