// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   gatewayLatency API: the processing latency of API Gateway
   * *   latency: the processing latency of the backend service.
   * 
   * @example
   * latency
   */
  item?: string;
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-09-06T02:05:13Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The value of the average latency.
   * 
   * @example
   * 10
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBodyInstanceLatency extends $dara.Model {
  monitorItem?: DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceLatencyResponseBodyInstanceLatencyMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitorItem)) {
      $dara.Model.validateArray(this.monitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLatencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of average latencies in the instance.
   */
  instanceLatency?: DescribeInstanceLatencyResponseBodyInstanceLatency;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceLatency: 'InstanceLatency',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLatency: DescribeInstanceLatencyResponseBodyInstanceLatency,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceLatency && typeof (this.instanceLatency as any).validate === 'function') {
      (this.instanceLatency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

