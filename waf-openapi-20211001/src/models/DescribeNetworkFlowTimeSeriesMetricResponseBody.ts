// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries } from "./DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries";
import { DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData } from "./DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData";


export class DescribeNetworkFlowTimeSeriesMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of time-series data. Supports returning data with multiple values.
   */
  networkFlowTimeSeries?: DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the returned data.
   */
  timeSeriesMetaData?: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData;
  static names(): { [key: string]: string } {
    return {
      networkFlowTimeSeries: 'NetworkFlowTimeSeries',
      requestId: 'RequestId',
      timeSeriesMetaData: 'TimeSeriesMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkFlowTimeSeries: { 'type': 'array', 'itemType': DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries },
      requestId: 'string',
      timeSeriesMetaData: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.networkFlowTimeSeries)) {
      $dara.Model.validateArray(this.networkFlowTimeSeries);
    }
    if(this.timeSeriesMetaData && typeof (this.timeSeriesMetaData as any).validate === 'function') {
      (this.timeSeriesMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

