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

export class DescribeInstanceDropPacketResponseBodyInstanceDropPacket extends $dara.Model {
  monitorItem?: DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceDropPacketResponseBodyInstanceDropPacketMonitorItem },
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

export class DescribeInstanceDropPacketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dropped packets in the instance.
   */
  instanceDropPacket?: DescribeInstanceDropPacketResponseBodyInstanceDropPacket;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDropPacket: 'InstanceDropPacket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropPacket: DescribeInstanceDropPacketResponseBodyInstanceDropPacket,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceDropPacket && typeof (this.instanceDropPacket as any).validate === 'function') {
      (this.instanceDropPacket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

