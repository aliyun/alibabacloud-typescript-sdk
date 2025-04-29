// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   InstanceDropPacketRX: the number of inbound packets dropped in the instance per second.
   * *   InstanceDropPacketTX: the number of outbound packets dropped in the instance per second.
   * 
   * @example
   * InstanceDropPacketRX
   */
  item?: string;
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-09-06T04:00:36Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of dropped packets in the instance.
   * 
   * @example
   * 0.0
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

