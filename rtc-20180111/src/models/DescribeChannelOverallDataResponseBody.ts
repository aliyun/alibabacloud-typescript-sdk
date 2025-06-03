// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelOverallDataResponseBodyCallInfo } from "./DescribeChannelOverallDataResponseBodyCallInfo";
import { DescribeChannelOverallDataResponseBodyMetricDatas } from "./DescribeChannelOverallDataResponseBodyMetricDatas";
import { DescribeChannelOverallDataResponseBodyOverallData } from "./DescribeChannelOverallDataResponseBodyOverallData";


export class DescribeChannelOverallDataResponseBody extends $dara.Model {
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.metricDatas)) {
      $dara.Model.validateArray(this.metricDatas);
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

