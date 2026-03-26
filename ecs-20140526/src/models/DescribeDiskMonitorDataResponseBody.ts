// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData extends $dara.Model {
  BPSRead?: number;
  BPSTotal?: number;
  BPSWrite?: number;
  diskId?: string;
  IOPSRead?: number;
  IOPSTotal?: number;
  IOPSWrite?: number;
  latencyRead?: number;
  latencyWrite?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      BPSRead: 'BPSRead',
      BPSTotal: 'BPSTotal',
      BPSWrite: 'BPSWrite',
      diskId: 'DiskId',
      IOPSRead: 'IOPSRead',
      IOPSTotal: 'IOPSTotal',
      IOPSWrite: 'IOPSWrite',
      latencyRead: 'LatencyRead',
      latencyWrite: 'LatencyWrite',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSRead: 'number',
      BPSTotal: 'number',
      BPSWrite: 'number',
      diskId: 'string',
      IOPSRead: 'number',
      IOPSTotal: 'number',
      IOPSWrite: 'number',
      latencyRead: 'number',
      latencyWrite: 'number',
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

export class DescribeDiskMonitorDataResponseBodyMonitorData extends $dara.Model {
  diskMonitorData?: DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData[];
  static names(): { [key: string]: string } {
    return {
      diskMonitorData: 'DiskMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskMonitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.diskMonitorData)) {
      $dara.Model.validateArray(this.diskMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBody extends $dara.Model {
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData;
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
   * The total number of monitoring data entries returned.
   * 
   * @example
   * 3
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
      monitorData: DescribeDiskMonitorDataResponseBodyMonitorData,
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

