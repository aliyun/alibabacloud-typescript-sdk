// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData extends $dara.Model {
  /**
   * @remarks
   * The number of received packets that were dropped by the secondary ENI over the internal network.
   * 
   * @example
   * 0
   */
  dropPacketRx?: string;
  /**
   * @remarks
   * The number of sent packets that were dropped by the secondary ENI over the internal network.
   * 
   * @example
   * 0
   */
  dropPacketTx?: string;
  /**
   * @remarks
   * The ID of the secondary ENI.
   * 
   * @example
   * eni-bp19da36d6xdwey****
   */
  eniId?: string;
  /**
   * @remarks
   * The average rate at which the secondary ENI received data over the internal network. Unit: Kbit/s.
   * 
   * @example
   * 0
   */
  intranetRx?: string;
  /**
   * @remarks
   * The average rate at which the secondary ENI sent data over the internal network. Unit: Kbit/s.
   * 
   * @example
   * 0
   */
  intranetTx?: string;
  /**
   * @remarks
   * The number of packets received by the secondary ENI over the internal network.
   * 
   * @example
   * 0
   */
  packetRx?: string;
  /**
   * @remarks
   * The number of packets sent by the secondary ENI over the internal network.
   * 
   * @example
   * 0
   */
  packetTx?: string;
  /**
   * @remarks
   * The timestamp of the monitoring data. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-21T03:22:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dropPacketRx: 'DropPacketRx',
      dropPacketTx: 'DropPacketTx',
      eniId: 'EniId',
      intranetRx: 'IntranetRx',
      intranetTx: 'IntranetTx',
      packetRx: 'PacketRx',
      packetTx: 'PacketTx',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropPacketRx: 'string',
      dropPacketTx: 'string',
      eniId: 'string',
      intranetRx: 'string',
      intranetTx: 'string',
      packetRx: 'string',
      packetTx: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEniMonitorDataResponseBodyMonitorData extends $dara.Model {
  eniMonitorData?: DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eniMonitorData: 'EniMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniMonitorData: { 'type': 'array', 'itemType': DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.eniMonitorData)) {
      $dara.Model.validateArray(this.eniMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEniMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of the secondary ENI.
   */
  monitorData?: DescribeEniMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeEniMonitorDataResponseBodyMonitorData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

