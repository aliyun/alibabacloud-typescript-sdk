// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints } from "./DescribeDbnodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints";


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  /**
   * @example
   * pxc-i-********
   */
  DBNodeId?: string;
  /**
   * @example
   * Logic_TPS
   */
  measurement?: string;
  /**
   * @example
   * logic_tps
   */
  metricName?: string;
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
    };
  }

  validate() {
    if(this.points && typeof (this.points as any).validate === 'function') {
      (this.points as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

