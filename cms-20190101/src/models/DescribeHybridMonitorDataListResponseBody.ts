// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * instanceId
   */
  k?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * i-rj99xc6cptkk64ml****
   */
  v?: string;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBodyTimeSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates the time when the metric value is collected.
   * 
   * Unit: seconds.
   * 
   * @example
   * 1653804865
   */
  ts?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 0.13
   */
  v?: string;
  static names(): { [key: string]: string } {
    return {
      ts: 'Ts',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ts: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBodyTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The tags of the time dimension.
   */
  labels?: DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * AliyunEcs_cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The metric values that are collected at different timestamps.
   */
  values?: DescribeHybridMonitorDataListResponseBodyTimeSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metricName: 'MetricName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels },
      metricName: 'string',
      values: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * end timestamp must not be before start time.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C240412F-3F5F-50E2-ACEC-DE808EF9C4BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The returned monitoring data.
   */
  timeSeries?: DescribeHybridMonitorDataListResponseBodyTimeSeries[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timeSeries: 'TimeSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      timeSeries: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeries },
    };
  }

  validate() {
    if(Array.isArray(this.timeSeries)) {
      $dara.Model.validateArray(this.timeSeries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

