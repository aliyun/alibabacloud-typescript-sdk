// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem } from "./DescribeGroupLatencyResponseBodyLatencyPacketMonitorItem";


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

