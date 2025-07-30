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
   * The timestamp of the record. Unit: milliseconds.
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
   * The error code returned by the backend service. The number is incremented.
   * 
   * @example
   * 403
   */
  code?: string;
  /**
   * @remarks
   * The monitoring statistics.
   */
  dataPoints?: DescribeMetricListResponseBodyDataPoints[];
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the %s variable in the **ErrMessage** parameter.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned for an exception.
   * 
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * *   **InternetOut**: the outbound traffic over the Internet. Unit: byte.
   * *   **diskusage_utilization**: the disk usage.
   * *   **IntranetInRate**: the inbound traffic over the internal network. Unit: byte.
   * *   **InternetIn**: the inbound traffic from the Internet. Unit: byte.
   * *   **cpu_total**: the CPU utilization.
   * *   **memory_usedutilization**: the memory usage.
   * *   **IntranetOutRate**: the outbound traffic over the internal network. Unit: byte.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Indicates whether the metrics of the cluster or a node are queried. Valid values:
   * 
   * *   **CLUSTER**: The metrics of the cluster are queried.
   * *   **NODE**: The metrics of a node are queried.
   * 
   * @example
   * CLUSTER
   */
  metricType?: string;
  /**
   * @remarks
   * The monitored object.
   * 
   * *   If the **MetricType** parameter is set to **NODE**, the value of this parameter is the ID of the node that is monitored.****
   * *   If the **MetricType** parameter is set to **CLUSTER**, the value of this parameter is the ID of the dedicated cluster. You can obtain the ID by calling the ListDedicatedCluster operation.
   * 
   * @example
   * ecs-jhjnjjn
   */
  param?: string;
  /**
   * @remarks
   * The monitoring interval. Unit: seconds. Minimum value: 15.
   * 
   * @example
   * 15
   */
  period?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

