// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   InstancePacketRX: inbound data packets
   * *   InstancePacketTX: outbound data packets
   * 
   * @example
   * InstancePacketRX
   */
  item?: string;
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-05-24T10:14:53Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of inbound and outbound data packets in the instance.
   * 
   * @example
   * 0
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

