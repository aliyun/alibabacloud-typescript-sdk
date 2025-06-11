// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectStepMetricResponseBodyDataMetricsDataPoints } from "./DescribeProjectStepMetricResponseBodyDataMetricsDataPoints";


export class DescribeProjectStepMetricResponseBodyDataMetrics extends $dara.Model {
  dataPoints?: DescribeProjectStepMetricResponseBodyDataMetricsDataPoints[];
  /**
   * @example
   * metric_name
   */
  name?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeProjectStepMetricResponseBodyDataMetricsDataPoints },
      name: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

