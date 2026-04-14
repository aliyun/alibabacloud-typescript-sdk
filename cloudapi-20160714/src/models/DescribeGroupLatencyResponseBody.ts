// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem extends $dara.Model {
  item?: string;
  itemTime?: string;
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

export class DescribeGroupLatencyResponseBodyLatencyPacket extends $dara.Model {
  monitorItem?: DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem },
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

export class DescribeGroupLatencyResponseBody extends $dara.Model {
  latencyPacket?: DescribeGroupLatencyResponseBodyLatencyPacket;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DC3AB0-421C-5371-8170-86AEABF77AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      latencyPacket: 'LatencyPacket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyPacket: DescribeGroupLatencyResponseBodyLatencyPacket,
      requestId: 'string',
    };
  }

  validate() {
    if(this.latencyPacket && typeof (this.latencyPacket as any).validate === 'function') {
      (this.latencyPacket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

