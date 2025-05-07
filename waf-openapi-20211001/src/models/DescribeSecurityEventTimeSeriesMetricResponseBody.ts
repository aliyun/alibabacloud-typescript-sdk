// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries } from "./DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries";
import { DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData } from "./DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData";


export class DescribeSecurityEventTimeSeriesMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-*****4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The time series data returned. This operation can return time series for multiple metrics.
   */
  securityEventTimeSeries?: DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries[];
  /**
   * @remarks
   * The metadata of the time series data returned.
   */
  timeSeriesMetaData?: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventTimeSeries: 'SecurityEventTimeSeries',
      timeSeriesMetaData: 'TimeSeriesMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventTimeSeries: { 'type': 'array', 'itemType': DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries },
      timeSeriesMetaData: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventTimeSeries)) {
      $dara.Model.validateArray(this.securityEventTimeSeries);
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

