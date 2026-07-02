// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data returned as a JSON-formatted string. For more information, see [Monitoring parameters](https://help.aliyun.com/document_detail/122091.html).
   * 
   * > To improve data transfer efficiency, the system returns only monitoring data for metrics with non-zero values. If a metric is not returned, its value is **0**.
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

