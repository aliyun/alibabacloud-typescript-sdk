// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The percentage of BPS.
   * 
   * @example
   * 80(%)
   */
  BPSPercent?: number;
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 0
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The percentage of IOPS.
   * 
   * @example
   * 80(%)
   */
  IOPSPercent?: number;
  /**
   * @remarks
   * The read bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 10
   */
  readBPS?: number;
  /**
   * @remarks
   * Read IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  readBlockSize?: number;
  /**
   * @remarks
   * The maximum number of read IOPS.
   * 
   * @example
   * 2000
   */
  readIOPS?: number;
  /**
   * @remarks
   * Read IO latency. Unit:  microsecond
   * 
   * @example
   * 100
   */
  readLatency?: number;
  /**
   * @remarks
   * The timestamp that is used to query the near real-time monitoring data of the disk. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The write bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 204
   */
  writeBPS?: number;
  /**
   * @remarks
   * Write IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  writeBlockSize?: number;
  /**
   * @remarks
   * The maximum number of write IOPS.
   * 
   * @example
   * 2000
   */
  writeIOPS?: number;
  /**
   * @remarks
   * Write IO latency. Unit: microsecond
   * 
   * @example
   * 100
   */
  writeLatency?: number;
  static names(): { [key: string]: string } {
    return {
      BPSPercent: 'BPSPercent',
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      IOPSPercent: 'IOPSPercent',
      readBPS: 'ReadBPS',
      readBlockSize: 'ReadBlockSize',
      readIOPS: 'ReadIOPS',
      readLatency: 'ReadLatency',
      timestamp: 'Timestamp',
      writeBPS: 'WriteBPS',
      writeBlockSize: 'WriteBlockSize',
      writeIOPS: 'WriteIOPS',
      writeLatency: 'WriteLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSPercent: 'number',
      burstIOCount: 'number',
      diskId: 'string',
      IOPSPercent: 'number',
      readBPS: 'number',
      readBlockSize: 'number',
      readIOPS: 'number',
      readLatency: 'number',
      timestamp: 'string',
      writeBPS: 'number',
      writeBlockSize: 'number',
      writeIOPS: 'number',
      writeLatency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The near real-time monitoring data of the disk.
   */
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
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
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.monitorData)) {
      $dara.Model.validateArray(this.monitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

