// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBodyDataPoints extends $dara.Model {
  /**
   * @remarks
   * The statistical value.
   * 
   * @example
   * 15.25
   */
  statistics?: number;
  /**
   * @remarks
   * The record timestamp, in milliseconds.
   * 
   * @example
   * 1650872310000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend error code, which is an incrementing number.
   * 
   * @example
   * 403
   */
  code?: string;
  /**
   * @remarks
   * The monitoring statistics information.
   */
  dataPoints?: DescribeMetricListResponseBodyDataPoints[];
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %s placeholder in the **ErrMessage** error message.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code corresponding to the exception.
   * 
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * - **InternetOut**: outbound Internet traffic, in bytes.
   * - **diskusage_utilization**: disk usage.
   * - **IntranetInRate**: inbound internal network traffic, in bytes.
   * - **InternetIn**: inbound Internet traffic, in bytes.
   * - **cpu_total**: CPU utilization.
   * - **memory_usedutilization**: memory utilization.
   * - **IntranetOutRate**: outbound internal network traffic, in bytes.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Specifies whether to query a cluster or a node. Valid values:
   * - **CLUSTER**: cluster.
   * - **NODE**: node.
   * 
   * @example
   * CLUSTER
   */
  metricType?: string;
  /**
   * @remarks
   * The observation value.
   * 
   * - If **MetricType** is set to **NODE**, the value is **nodeid**.
   * - If **MetricType** is set to **CLUSTER**, the value is the ID of the dedicated cluster, which can be obtained by calling the ListDedicatedCluster operation.
   * 
   * @example
   * ecs-jhjnjjn
   */
  param?: string;
  /**
   * @remarks
   * The observation interval in seconds. The minimum interval is 15 seconds.
   * 
   * @example
   * 15
   */
  period?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      metricName: 'MetricName',
      metricType: 'MetricType',
      param: 'Param',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyDataPoints },
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      metricName: 'string',
      metricType: 'string',
      param: 'string',
      period: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

