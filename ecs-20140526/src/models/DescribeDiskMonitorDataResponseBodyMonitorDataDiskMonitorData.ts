// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData extends $dara.Model {
  /**
   * @remarks
   * The read bandwidth of the disk. Unit: byte/s.
   * 
   * @example
   * 0
   */
  BPSRead?: number;
  /**
   * @remarks
   * The total read and write bandwidth of the disk. Unit: byte/s.
   * 
   * @example
   * 204
   */
  BPSTotal?: number;
  /**
   * @remarks
   * The write bandwidth of the disk. Unit: byte/s.
   * 
   * @example
   * 204
   */
  BPSWrite?: number;
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
   * The number of read I/O operations per second on the disk.
   * 
   * @example
   * 0
   */
  IOPSRead?: number;
  /**
   * @remarks
   * The total number of read and write I/O operations per second on the disk.
   * 
   * @example
   * 0
   */
  IOPSTotal?: number;
  /**
   * @remarks
   * The number of write I/O operations per second on the disk.
   * 
   * @example
   * 0
   */
  IOPSWrite?: number;
  /**
   * @remarks
   * The read latency of the disk. Unit: microseconds.
   * 
   * @example
   * 0
   */
  latencyRead?: number;
  /**
   * @remarks
   * The write latency of the disk. Unit: microseconds.
   * 
   * @example
   * 0
   */
  latencyWrite?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2014-07-23T12:07:00Z
   */
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

