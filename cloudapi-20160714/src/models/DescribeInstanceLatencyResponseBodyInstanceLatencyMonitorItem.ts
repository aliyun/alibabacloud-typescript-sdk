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

