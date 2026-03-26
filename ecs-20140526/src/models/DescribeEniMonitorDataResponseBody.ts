// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData extends $dara.Model {
  dropPacketRx?: string;
  dropPacketTx?: string;
  eniId?: string;
  intranetRx?: string;
  intranetTx?: string;
  packetRx?: string;
  packetTx?: string;
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

