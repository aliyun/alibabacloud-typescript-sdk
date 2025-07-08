// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints } from "./DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints";
import { DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos } from "./DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos";


export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelList extends $dara.Model {
  dataPoints?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
  processLastInfos?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos[];
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      metricName: 'MetricName',
      processLastInfos: 'ProcessLastInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints },
      metricName: 'string',
      processLastInfos: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    if(Array.isArray(this.processLastInfos)) {
      $dara.Model.validateArray(this.processLastInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

