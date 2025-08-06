// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTieringStorageDataRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * The end time at which data is obtained. The end time must be later than the start time. The difference cannot exceed 31 days. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2023-05-29T02:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which you want to query data. If you leave this parameter empty, data in all regions is returned. Separate multiple regions with commas (,).
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If you leave this parameter empty, data in the last 24 hours is queried.
   * 
   * @example
   * 2023-05-29T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage type. By default, all storage types are returned. Valid values:
   * 
   * *   **IA**
   * *   **Archive**
   * *   **ColdArchive**
   * 
   * @example
   * IA
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

