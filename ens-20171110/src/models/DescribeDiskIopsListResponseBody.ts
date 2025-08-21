// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskIopsListResponseBodyDiskIopsList extends $dara.Model {
  /**
   * @remarks
   * The business time . The time is displayed in the yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-12-14 00:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The read throughput. Unit: bytes.
   * 
   * @example
   * 10054
   */
  readBytes?: number;
  /**
   * @remarks
   * The read latency. Unit: ms.
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
   * The ID of the node.
   * 
   * @example
   * cn-hangzhou-3
   */
  regionId?: string;
  /**
   * @remarks
   * The write throughput. Unit: bytes.
   * 
   * @example
   * 0
   */
  writeBytes?: number;
  /**
   * @remarks
   * The write latency. Unit: microseconds.
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
   * The IOPS monitoring data of the cloud disk.
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

