// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStorageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. 
   * 
   * *   Default value: **app-1000000**.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which you want to query storage data. If you leave this parameter empty, data in all regions is returned. Separate multiple regions with commas (,). Valid values:
   * 
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-beijing**: China (Beijing)
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **ap-southeast-1**: Singapore
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket. If you leave this parameter empty, data of all buckets is returned. Separate multiple transcoding specifications with commas (,).
   * 
   * @example
   * bucket
   */
  storage?: string;
  /**
   * @remarks
   * The storage class. Set the value to **OSS**.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
      storage: 'Storage',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
      storage: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

