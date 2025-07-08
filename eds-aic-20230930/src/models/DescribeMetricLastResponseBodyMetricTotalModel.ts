// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricLastResponseBodyMetricTotalModelMetricModelList } from "./DescribeMetricLastResponseBodyMetricTotalModelMetricModelList";


export class DescribeMetricLastResponseBodyMetricTotalModel extends $dara.Model {
  /**
   * @example
   * acp-fkuit0cmyru4p****
   */
  androidInstanceId?: string;
  metricModelList?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelList[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      metricModelList: 'MetricModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      metricModelList: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelList },
    };
  }

  validate() {
    if(Array.isArray(this.metricModelList)) {
      $dara.Model.validateArray(this.metricModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

