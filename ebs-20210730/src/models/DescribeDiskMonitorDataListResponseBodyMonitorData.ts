// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataListResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 2000
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the performance of the disk bursts. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstIOCount: 'number',
      diskId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

