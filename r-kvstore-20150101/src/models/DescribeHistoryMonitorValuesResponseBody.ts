// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring information returned in the JSON format. For more information, see [View performance monitoring data](https://help.aliyun.com/document_detail/122091.html).
   * 
   * *   Only metrics whose values are not 0 are returned. This improves data transmission efficiency. Metrics that are not displayed are represented by the **0** default value.
   * 
   * *   The query result is aligned with the data aggregation frequency. If the specified time range to query is less than or equal to 10 minutes and the data is aggregated once every 5 seconds, query results are returned at an interval of 5 seconds. If the specified StartTime value does not coincide with a point in time for data aggregation, the system returns the latest point in time for data aggregation as the first point in time. For example, if you set the StartTime parameter to 2022-01-20T12:01:48Z, the first point in time returned is 2022-01-20T12:01:45Z.
   * 
   * @example
   * "{\\"2022-11-06T00:00:00Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:05Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:10Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:15Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:20Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:25Z\\":{\\"memoryUsage\\":\\"6.67\\"}}"
   */
  monitorHistory?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0997EE8-F4C2-4503-9168-85177ED7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorHistory: 'MonitorHistory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorHistory: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

