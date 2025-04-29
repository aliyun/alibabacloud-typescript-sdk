// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   latency: the backend processing latency
   * *   gatewayLatency: the API Gateway processing latency
   * 
   * @example
   * latency
   */
  item?: string;
  /**
   * @remarks
   * The point in time when the latency data was collected. The format is YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-03-30T16:10:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The latency. Unit: ms.
   * 
   * @example
   * 100.0
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

