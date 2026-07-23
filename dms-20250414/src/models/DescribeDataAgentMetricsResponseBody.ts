// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentMetricsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * data_agent_session_per_user
   */
  metricName?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      metricName: 'MetricName',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      metricName: 'string',
      success: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAgentMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range.
   * 
   * @example
   * 1782836200000
   */
  endTime?: number;
  /**
   * @remarks
   * The metric type.
   * 
   * @example
   * basic
   */
  metricType?: string;
  /**
   * @remarks
   * The list of metrics.
   */
  metrics?: DescribeDataAgentMetricsResponseBodyDataMetrics[];
  /**
   * @remarks
   * The start time of the query range.
   * 
   * @example
   * 1782835200000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      metrics: 'Metrics',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metricType: 'string',
      metrics: { 'type': 'array', 'itemType': DescribeDataAgentMetricsResponseBodyDataMetrics },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAgentMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: DescribeDataAgentMetricsResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request is abnormal.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDataAgentMetricsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

