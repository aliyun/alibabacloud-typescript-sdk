// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskIopsListResponseBodyDiskIopsList extends $dara.Model {
  /**
   * @remarks
   * The business time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-12-14 00:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The read throughput (in bytes).
   * 
   * @example
   * 10054
   */
  readBytes?: number;
  /**
   * @remarks
   * The read latency (in microseconds).
   * 
   * @example
   * 15646532
   */
  readLatency?: number;
  /**
   * @remarks
   * The read IOPS.
   * 
   * @example
   * 4
   */
  readOps?: number;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * @example
   * cn-hangzhou-3
   */
  regionId?: string;
  /**
   * @remarks
   * The write throughput (in bytes).
   * 
   * @example
   * 0
   */
  writeBytes?: number;
  /**
   * @remarks
   * The write latency (in microseconds).
   * 
   * @example
   * 0
   */
  writeLatency?: number;
  /**
   * @remarks
   * The write IOPS.
   * 
   * @example
   * 0
   */
  writeOps?: number;
  static names(): { [key: string]: string } {
    return {
      bizTime: 'BizTime',
      diskId: 'DiskId',
      readBytes: 'ReadBytes',
      readLatency: 'ReadLatency',
      readOps: 'ReadOps',
      regionId: 'RegionId',
      writeBytes: 'WriteBytes',
      writeLatency: 'WriteLatency',
      writeOps: 'WriteOps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTime: 'string',
      diskId: 'string',
      readBytes: 'number',
      readLatency: 'number',
      readOps: 'number',
      regionId: 'string',
      writeBytes: 'number',
      writeLatency: 'number',
      writeOps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskIopsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud disk I/O monitoring data.
   */
  diskIopsList?: DescribeDiskIopsListResponseBodyDiskIopsList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7814CAB-DB4E-140A-9D6F-7C8210C1DAC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIopsList: 'DiskIopsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIopsList: { 'type': 'array', 'itemType': DescribeDiskIopsListResponseBodyDiskIopsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIopsList)) {
      $dara.Model.validateArray(this.diskIopsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

