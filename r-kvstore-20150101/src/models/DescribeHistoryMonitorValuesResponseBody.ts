// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryMonitorValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring information returned in JSON format. For more information, see [Monitoring parameter description](https://help.aliyun.com/document_detail/122091.html).
   * 
   * > To improve data transmission efficiency, only non-zero monitoring data is returned. All other monitoring data that is not displayed has a default value of **0**.
   * 
   * @example
   * "{\\"2022-11-06T00:00:00Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:05Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:10Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:15Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:20Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:25Z\\":{\\"memoryUsage\\":\\"6.67\\"}}"
   */
  monitorHistory?: string;
  monitorLegend?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0997EE8-F4C2-4503-9168-85177ED7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorHistory: 'MonitorHistory',
      monitorLegend: 'MonitorLegend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorHistory: 'string',
      monitorLegend: 'string',
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

